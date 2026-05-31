# Parenting Assistant — Knowledge Base (memory)

Living reference for topic keywords, month bands, and content rules. Implementation: `src/data/assistantResponses.js`, `src/data/growthData.js`, `src/utils/assistantMatch.js`.

## Month resolution

1. Explicit in query: `month 4`, `4 month`, `4mo`
2. Else `selectedMonth` (month detail page)
3. Else `currentMonth` from `babyBirthDate`
4. Clamp 1–36

## Gender in query

- `girl`, `baby girl`, `daughter` → girls WHO ranges
- `boy`, `baby boy`, `son` → boys WHO ranges

## Priority (match order)

1. choking / obstruction
2. fever
3. feeding (not spit-up)
4. head circumference
5. weight / height / growth chart
6. sleep regression
7. sleep schedule / night waking
8. safe sleep
9. solids
10. reflux / spit up
11. teething, colic, constipation, skin, vaccines, jaundice, eyes, cold/cough
12. crawling, walking, sitting
13. hearing, language
14. tummy time, growth spurt
15. bath, travel, baby proofing, hiccups, pacifier, separation, bonding, play
16. development check
17. crying / fussy
18. month-aware fallback

## Topics (30+)

### Growth

| Topic | Keywords |
|-------|----------|
| weightHeight | weight, ideal weight, kg, pounds, percentile, growth chart, how much weigh, height, length |
| headCircumference | head size, fontanelle, soft spot |

Data: `growthData.js` (WHO 15th–85th approx.)

### Sleep

| Topic | Keywords |
|-------|----------|
| sleepRegression | sleep regression, 4 month sleep |
| sleepSchedule | how much sleep, how many hours, nap schedule, awake window, overtired |
| nightWaking | night feed, sleeping through, waking at night |
| safeSleep | safe sleep, sids, cosleep, crib |

### Feeding & digestion

| Topic | Keywords |
|-------|----------|
| feedingIssues | feed, bottle, breast, latch, refuse, not taking feed |
| solids | solids, weaning, puree |
| refluxSpitUp | spit up, reflux, projectile |

### Illness

| Topic | Keywords |
|-------|----------|
| fever | fever, temperature, thermometer |
| coldCough | cold, cough, congestion, runny nose |
| jaundice | jaundice, yellow skin |
| eyeCare | sticky eye, tear duct, vision |

### Motor & language

| Topic | Keywords |
|-------|----------|
| crawling | crawl, army crawl |
| walking | walk, first steps, cruising |
| sittingUp | sit up, sitting |
| language | talk, babble, first word, say mama |
| hearing | hear, respond to sound |
| tummyTime | tummy time, head control |
| developmentCheck | milestone, delay, developing normally |

### Everyday

| Topic | Keywords |
|-------|----------|
| teething, colic, constipation, skinCare, immunizations |
| hiccups, pacifier, babyProofing, playToys |
| separationAnxiety, bonding, bathTime, travel |
| choking, growthSpurt, monthCrying |

## Test queries

| Query | Expected type |
|-------|----------------|
| ideal weight for a 4 month old baby girl | weightHeight, month 4 |
| how much should my 6 month old weigh | weightHeight |
| how many hours should my baby sleep | sleepSchedule |
| when will my baby crawl | crawling |
| baby has fever | fever |
| 3 month old spitting up | refluxSpitUp |
| when will baby say mama | language |
| baby not responding to sounds | hearing |
| is it ok to use pacifier | pacifier |
| flying with my 4 month old baby | travel (air), month 4 |
| road trip with 9 month old | travel (car), month 9 |
| travel tips | travel overview, current month |

## Travel page

Nav: **Travel** (desktop + mobile). Data: `travelTips.js`. Types: car, air, train, dayOuting, hotel. Gear footer links to Shopping.

## Disclaimer

All responses append `MEDICAL_DISCLAIMER` from `assistantResponses.js`.
