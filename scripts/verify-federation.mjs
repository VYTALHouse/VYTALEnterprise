import fs from "node:fs";

const path = new URL("../registry/repositories.json", import.meta.url);
const lockPath = new URL("../registry/federation-lock.json", import.meta.url);
const registry = JSON.parse(fs.readFileSync(path, "utf8"));
const lock = JSON.parse(fs.readFileSync(lockPath, "utf8"));
const expected = new Set([
  "VYTALEnterprise", "VYTALHouse", "VYTALHouse_com", "VYTALPouches",
  "VYTALBranding", "VYTALOperations", "VYTALCareers", "VYTALAI",
  "VYTALCRM", "VYTALApp", "VYTALIP", "VYTALPLLC", "VYTALMSO",
  "FCGHoldings"
]);

if (registry.schemaVersion !== 1) throw new Error("Unsupported registry schema");
if (registry.umbrella !== "VYTALEnterprise") throw new Error("Umbrella mismatch");
const names = registry.repositories.map((repo) => repo.name);
if (new Set(names).size !== names.length) throw new Error("Duplicate repository name");
for (const name of expected) {
  if (!names.includes(name)) throw new Error(`Missing repository: ${name}`);
}
for (const repo of registry.repositories) {
  if (!repo.url.startsWith("https://github.com/VYTALHouse/")) {
    throw new Error(`Unexpected repository owner: ${repo.name}`);
  }
}

const lockedNames = Object.keys(lock.domainCommits);
const expectedDomains = [...expected].filter((name) => name !== "VYTALEnterprise");
if (lock.rootRepository !== "VYTALEnterprise") throw new Error("Lock root mismatch");
if (lockedNames.length !== expectedDomains.length) throw new Error("Lock size mismatch");
for (const name of expectedDomains) {
  const commit = lock.domainCommits[name];
  if (!/^[0-9a-f]{40}$/.test(commit ?? "")) {
    throw new Error(`Invalid prepared commit for ${name}`);
  }
}

console.log(
  `Verified ${names.length} VYTAL repositories and ${lockedNames.length} prepared domain commits.`,
);
