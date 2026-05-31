# Coral — Claude / Cursor project guide

Baby Milestone Tracker (React + Vite). See [memory.md](memory.md) for parenting-assistant knowledge base.

## Stack

- React 19, Vite 8, Vitest
- Data: `src/data/milestones.js`, `diyActivities.js`, `assistantResponses.js`
- State: `localStorage` keys `babyBirthDate`, `babyMilestoneChecks`

## Parenting Assistant

| File | Role |
|------|------|
| `src/utils/assistantMatch.js` | Keyword routing + month context |
| `src/data/assistantResponses.js` | Static guides (30+ topics) |
| `src/data/growthData.js` | WHO weight/height ranges, sleep needs by month |
| `src/data/travelTips.js` | Age-aware travel tips by type |
| `src/pages/Travel.jsx` | Travel nav page |
| `src/components/AssistantPanel.jsx` | UI on Home + Month Detail |

## Commands

```bash
npm run dev
npm test
npm run verify:data
npm run build
```

## Conventions

- UI label **Watch For** (not "Take Care") for warning cards
- Assistant: educational only; emergencies → call pediatrician / local emergency number
- Extend KB via `.cursor/skills/parenting-assistant/SKILL.md` and `.cursor/rules/claude.mdc`
