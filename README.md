# VYTAL Enterprise

VYTAL Enterprise is the umbrella operating repository for the VYTAL ecosystem.
It governs shared canon, digital experience, cross-repository contracts and
controlled distribution across VYTAL Health, VYTAL Pouches, VYTAL Branding and
VYTAL Innovation. VYTAL House is the flagship inside VYTAL Health.

The immediate enterprise priority is the VYTAL House flagship program. It
remains proposed, pre-development and pre-opening. Property, capital,
professional-team and schedule details are maintained in the controlled
workspace and are intentionally excluded from this public repository.

## Start here

| Need | Canonical file |
| --- | --- |
| Public project canon | [README](README.md) |
| Status and decision protocol | [Governance](governance/STATUS_AND_DECISIONS.md) |
| Agent and skill contract | [Agents](governance/AGENTS_AND_SKILLS.md) |
| Repository topology | [Repository registry](registry/repositories.json) |
| Verified commits | [Federation lock](registry/federation-lock.json) |
| Antigravity orchestration | [Master prompt](prompts/VYTAL_ANTIGRAVITY_MASTER_PROMPT.md) |
| Security and private-workspace boundary | [Security policy](SECURITY.md) |

## Repository federation

`VYTALEnterprise` is the umbrella. Domain repositories remain independent
delivery and risk boundaries; they are not a shared store for restricted data.

| Domain | Repository |
| --- | --- |
| Flagship operating system | [VYTALHouse](https://github.com/VYTALHouse/VYTALHouse) |
| Public House website | [VYTALHouse_com](https://github.com/VYTALHouse/VYTALHouse_com) |
| Functional products | [VYTALPouches](https://github.com/VYTALHouse/VYTALPouches) |
| Brand system | [VYTALBranding](https://github.com/VYTALHouse/VYTALBranding) |
| Operations | [VYTALOperations](https://github.com/VYTALHouse/VYTALOperations) |
| Careers | [VYTALCareers](https://github.com/VYTALHouse/VYTALCareers) |
| AI orchestration | [VYTALAI](https://github.com/VYTALHouse/VYTALAI) |
| CRM architecture | [VYTALCRM](https://github.com/VYTALHouse/VYTALCRM) |
| Member/operator application | [VYTALApp](https://github.com/VYTALHouse/VYTALApp) |
| IP controls | [VYTALIP](https://github.com/VYTALHouse/VYTALIP) |
| Proposed clinical entity | [VYTALPLLC](https://github.com/VYTALHouse/VYTALPLLC) |
| Proposed management organization | [VYTALMSO](https://github.com/VYTALHouse/VYTALMSO) |
| Parent/holding governance | [FCGHoldings](https://github.com/VYTALHouse/FCGHoldings) |

FREEDĒM remains a separate venture and does not inherit VYTAL brand,
healthcare, data or repository governance.

## Local development

```bash
npm ci
npm run lint
npm test
npm run verify:federation
```

## Brand and claims guardrails

- Official spelling: **VYTAL**.
- Master platform: **Change Your State.**
- Base palette: matte black, silver, graphite and white; prismatic color is an
  accent, not a default blue system.
- The Prism V is provisional until an approved vector master is supplied.
- No repository or visual may imply that zoning, parking, permits, licensing,
  financing, product approval, construction completion or opening is complete.
- Never commit secrets, PFS/POF, bank statements, PHI, PII or restricted
  clinical/legal/financial records to these public repositories.
