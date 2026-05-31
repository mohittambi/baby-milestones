import {
  getWeightRange,
  getHeightRange,
  getHeadRange,
  getSleepNeeds,
  kgToLbs,
} from './growthData';
import { formatTravelTipsAsParagraphs, travelTypeConfig } from './travelTips';

export const MEDICAL_DISCLAIMER =
  'This information is educational only and does not replace advice from your pediatrician or emergency services.';

export const sleepRegressionGuide = {
  title: 'Sleep Regression Guide',
  paragraphs: [
    'Sleep regressions are temporary disruptions in sleep patterns, often linked to developmental leaps. They are exhausting but usually pass within 2–6 weeks.',
    'Keep a consistent bedtime routine: bath, dim lights, feeding, same sleep space. Put baby down drowsy but awake when possible.',
    'Follow safe sleep: alone, on the back, in a crib or bassinet with a firm mattress and no loose bedding or toys.',
    'Avoid introducing new sleep crutches you cannot sustain long term. Extra comfort is fine; permanent changes are harder to undo.',
    'Take shifts with a partner if you can. Rest when baby rests, even for short naps.',
    'Contact your pediatrician if sleep issues persist beyond a few weeks, if baby seems unwell, or if you notice breathing pauses or unusual lethargy.',
  ],
  month4Note:
    'Around Month 4, the 4-month sleep regression is very common as sleep cycles mature. Stay consistent with routines — many families see improvement after this leap.',
};

export const solidsNotReady = {
  title: 'Starting Solids — Not Yet Recommended',
  paragraphs: [
    'Most babies are not ready for solid foods before around 6 months. Before then, breast milk or formula provides complete nutrition.',
    'Readiness signs include: good head control, sitting with minimal support, interest in food, and ability to move food to the mouth (not just tongue-thrust reflex).',
    'If you are considering early introduction, discuss timing with your pediatrician first — especially for allergies or prematurity.',
    'When your baby reaches Month 6, revisit starting solids with single-ingredient purees and close supervision for choking.',
  ],
};

export const solidsReady = {
  title: 'Starting Solids (Month 6+)',
  paragraphs: [
    'Around 6 months, many babies can begin exploring solid foods alongside breast milk or formula.',
    'Start with single-ingredient purees or soft finger foods: sweet potato, avocado, banana, or iron-fortified cereal if your pediatrician recommends it.',
    'Introduce one new food every 3–5 days to watch for allergic reactions (rash, vomiting, breathing difficulty — seek care immediately for severe symptoms).',
    'Let baby touch and explore food — messy eating supports sensory learning and self-feeding skills.',
    'Always supervise meals. Cut round foods lengthwise, avoid honey before 12 months, and keep small objects away from reach.',
    'Offer water in a cup with meals once solids are established. Continue milk feeds as the main nutrition source through the first year.',
    'Consult your pediatrician for personalized guidance, especially if there is a family history of food allergy.',
  ],
};

export const chokingGuide = {
  title: 'Choking & Object Safety',
  paragraphs: [
    'If baby is coughing forcefully and can breathe or cry, encourage coughing and stay close — do not slap the back while they are effectively coughing.',
    'If baby cannot breathe, cry, or make sounds, or lips turn blue: call emergency services immediately (911 or your local number).',
    'For an infant who is not breathing: give 5 back blows (support head, angle face-down on your forearm) then 5 chest thrusts with two fingers on the breastbone. Repeat until the object comes out or help arrives.',
    'Never blindly finger-sweep the mouth unless you can clearly see and remove an object.',
    'Prevention: keep coins, batteries, grapes, nuts, and small toy parts out of reach. Cut food into safe sizes. Stay within arm\'s reach during meals and play.',
    'Take an infant CPR class through your hospital or Red Cross.',
  ],
};

export function getFeedingParagraphs(month) {
  const base = [
    'Brief refusals or shorter feeds are common and often linked to growth spurts, illness, teething, or developmental distraction — not always low milk supply.',
    'Check basics: wet diapers (typically 6+ per day after the first week), weight trend at checkups, and whether baby is alert and generally content between feeds.',
  ];

  if (month == null) {
    return [
      ...base,
      'Newborns (Months 1–3): cluster feeding and frequent night feeds are normal. Focus on latch, positioning, and feeding on demand.',
      'Months 4–5: feeds may shorten because baby is more aware of surroundings. Offer a quiet, dim room; try feeding when drowsy.',
      'Month 6+: milk intake may dip temporarily when solids start — keep offering breast or formula first, then solids.',
      'When to call the doctor: fewer than expected wet diapers, signs of dehydration (sunken fontanelle, lethargy), fever, green vomit, blood in stool, or weight loss.',
    ];
  }

  if (month <= 3) {
    return [
      `For Month ${month} babies:`,
      ...base,
      'Cluster feeding and growth spurts can make intake look uneven day to day. Feed on demand; avoid stretching intervals too early without pediatrician guidance.',
      'Latch pain beyond the first week, clicking sounds, or poor weight gain warrant lactation or pediatric support.',
      'When to call the doctor: fewer wet diapers, no weight gain, fever, lethargy, or refusal of all feeds for multiple feeds in a row.',
    ];
  }

  if (month >= 4 && month < 6) {
    return [
      `For Month ${month} babies:`,
      ...base,
      'Around 4–5 months, many babies take shorter feeds because they are more distracted, rolling, or approaching the 4-month sleep regression. Try a calm, low-stimulation room and feed before overtiredness.',
      'Increased drooling and mouthing toys are common before teeth erupt — feeding fussiness can overlap with teething discomfort.',
      'Milk remains the sole nutrition source before 6 months; do not replace feeds with water or juice unless your pediatrician advises.',
      'When to call the doctor: refusing all feeds for 8+ hours, signs of dehydration, fever, persistent vomiting, or poor weight gain.',
    ];
  }

  return [
    `For Month ${month} babies:`,
    ...base,
    'After starting solids, it is normal for milk volume to decrease slightly while baby explores textures. Offer milk before solids until your pediatrician suggests otherwise.',
    'Short feeds can mean baby is filling up on solids or is distracted — adjust timing so baby is hungry at milk feeds.',
    'When to call the doctor: refusing both milk and solids, dehydration signs, fever, or weight concerns.',
  ];
}

export const feedingIssuesGuide = {
  title: 'Feeding Concerns',
  getParagraphs: getFeedingParagraphs,
};

export function getTeethingParagraphs(month) {
  const common = [
    'Drooling, chewing on hands, fussiness, and interrupted sleep are common teething signs. True tooth eruption timing varies widely (often 6–10 months for first teeth).',
    'Safe relief: chilled (not frozen) teething ring, clean damp washcloth, gentle gum massage with a clean finger.',
    'Avoid benzocaine gels and teething necklaces (choking/strangulation risk per AAP guidance).',
    'When to call the doctor: fever above 100.4°F (38°C) lasting more than a day, rash, diarrhea, or extreme irritability — these may be illness, not teething alone.',
  ];
  if (month != null && month >= 4 && month < 6) {
    return [
      `For Month ${month} babies:`,
      'Many babies drool heavily and chew objects from 4–5 months before teeth appear — this can overlap with feeding fussiness and sleep changes.',
      ...common,
    ];
  }
  if (month != null && month >= 6) {
    return [
      `For Month ${month} babies:`,
      'First teeth may be emerging — offer soft cold teethers and extra cuddles during feeds if gums are sore.',
      ...common,
    ];
  }
  return common;
}

export const teethingGuide = {
  title: 'Teething & Oral Discomfort',
  getParagraphs: getTeethingParagraphs,
};

export function getGrowthSpurtParagraphs(month) {
  return [
    month != null ? `For Month ${month} babies:` : 'Growth spurts:',
    'Babies often feed more frequently for 2–3 days during a growth spurt — this is normal and helps increase supply if breastfeeding.',
    'Common spurts occur around 3 weeks, 6 weeks, 3 months, and 6 months (timing varies).',
    'Extra night waking and clinginess often accompany spurts. Respond with feeding on demand and rest when you can.',
    'When to call the doctor: feeding refusal lasting more than a day, fever, or signs of illness unrelated to increased hunger.',
  ];
}

export const growthSpurtGuide = {
  title: 'Growth Spurts & Cluster Feeding',
  getParagraphs: getGrowthSpurtParagraphs,
};

export function getTummyTimeParagraphs(month) {
  if (month == null || month <= 2) {
    return [
      'Start with 2–3 minutes, 3–4 times daily on a firm surface while awake and supervised. Tummy time builds neck and shoulder strength.',
      'Use chest-to-chest tummy time if baby dislikes the mat — same muscle benefits.',
      'When to call the doctor: baby cannot turn head side to side by 2 months or seems very stiff/floppy.',
    ];
  }
  if (month <= 5) {
    return [
      `For Month ${month} babies:`,
      'Aim for about 15–30 minutes total per day, split into short sessions. Place interesting toys just within reach to encourage pushing up and rolling.',
      'Always supervise — never leave baby alone on elevated surfaces.',
      'When to call the doctor: cannot hold head steady by 4 months or no interest in lifting head during tummy time.',
    ];
  }
  return [
    `For Month ${month} babies:`,
    'Continue daily tummy time or crawling practice on the floor. Supervised play builds core strength for sitting and mobility.',
    'When to call the doctor: significant motor delay concerns — discuss at well-child visits.',
  ];
}

export const tummyTimeGuide = {
  title: 'Tummy Time',
  getParagraphs: getTummyTimeParagraphs,
};

export const colicGuide = {
  title: 'Colic & Excessive Crying',
  paragraphs: [
    'Colic is often defined as crying more than 3 hours a day, more than 3 days a week, for more than 3 weeks in an otherwise healthy infant — peak around 6 weeks.',
    'Soothing strategies: swaddling (if not rolling), white noise, rhythmic motion, pacifier, warm bath, and breaks for parents.',
    'Rule out hunger, wet diaper, temperature, illness, and reflux with your pediatrician if crying is new or severe.',
    'When to call the doctor: fever, vomiting, bulging fontanelle, breathing difficulty, blood in stool, or if you feel unable to cope — seek support immediately.',
  ],
};

export const constipationGuide = {
  title: 'Bowel Movements & Constipation',
  paragraphs: [
    'Breastfed babies may go several days without stool; soft stools when they go are usually normal. Formula-fed babies often stool daily.',
    'Signs of constipation: hard, dry pellets; straining with pain; blood on stool from small tears.',
    'For infants: bicycle legs, warm bath, tummy massage. Do not give laxatives, juice, or water without pediatrician advice (especially under 6 months).',
    'When to call the doctor: vomiting, distended belly, refusal to feed, blood in stool, or no stool in 48+ hours with distress in young infants.',
  ],
};

export const skinCareGuide = {
  title: 'Skin Care (Rash, Diaper, Eczema)',
  paragraphs: [
    'Diaper rash: change frequently, air time, thick barrier cream (zinc oxide). See doctor if blisters, open sores, or fever.',
    'Cradle cap: gentle shampoo and soft brush; mineral oil briefly if advised by pediatrician.',
    'Eczema: fragrance-free moisturizer; avoid overheating; pediatrician may recommend medicated cream if persistent.',
    'When to call the doctor: spreading rash, pus, fever, hives with breathing difficulty, or rash with poor feeding/lethargy.',
  ],
};

export function getImmunizationParagraphs(month) {
  return [
    month != null ? `For Month ${month} — discuss schedule with your pediatrician:` : 'Immunizations:',
    'Follow your country\'s infant immunization schedule (e.g. IAP/NIPI in India, CDC schedule in the US).',
    'Mild fever, fussiness, or sore leg after vaccines are common for 24–48 hours.',
    'Comfort: extra cuddles, fluids (milk), and pediatrician-approved fever reducer if needed.',
    'When to call the doctor: high fever, seizure, breathing difficulty, swelling spreading up the limb, or inconsolable crying beyond 48 hours.',
  ];
}

export const immunizationsGuide = {
  title: 'Vaccines & Immunizations',
  getParagraphs: getImmunizationParagraphs,
};

export const safeSleepGuide = {
  title: 'Safe Sleep',
  paragraphs: [
    'ABC: Alone, on the Back, in a Crib (or safe sleep surface) — firm mattress, fitted sheet only, no pillows, bumpers, or loose blankets.',
    'Room-sharing without bed-sharing is recommended for at least the first 6 months where possible.',
    'Avoid overheating, smoke exposure, and inclined sleepers not approved for overnight sleep.',
    'When to call the doctor: breathing pauses, blue lips, or repeated choking during sleep.',
  ],
};

export const bathTimeGuide = {
  title: 'Bathing Your Baby',
  paragraphs: [
    'Newborns: sponge baths until umbilical cord falls off (usually 1–2 weeks). Keep stump dry and clean.',
    'After cord heals: short baths 2–3 times per week are enough; daily is fine if baby enjoys it.',
    'Water warm not hot; never leave baby unattended. Support head and neck.',
    'When to call the doctor: redness, odor, or discharge at cord site; rash that worsens after baths.',
  ],
};

export function getTravelParagraphs(month, travelType) {
  const paras = formatTravelTipsAsParagraphs(month, travelType);
  if (travelType && travelTypeConfig[travelType]) {
    return {
      title: `Travel — ${travelTypeConfig[travelType].label}`,
      paragraphs: paras,
    };
  }
  return {
    title: 'Travel with Baby',
    paragraphs: paras,
  };
}

export function getWeightHeightParagraphs(month, gender) {
  const m = month ?? 4;
  const gKey = gender === 'boy' ? 'boy' : gender === 'girl' ? 'girl' : null;
  const label = gKey === 'boy' ? 'boys' : gKey === 'girl' ? 'girls' : 'babies';
  const g = gKey === 'boy' ? 'boy' : 'girl';

  const w = getWeightRange(m, g);
  const h = getHeightRange(m, g);
  const lines = [
    month != null
      ? `For Month ${m} (${gKey === 'girl' ? 'girls' : gKey === 'boy' ? 'boys' : 'typical ranges'}):`
      : 'Typical growth ranges (WHO 15th–85th percentile):',
    `Weight: ${w.low} – ${w.high} kg (${kgToLbs(w.low)} – ${kgToLbs(w.high)} lbs)`,
    `Length/height: ${h.low} – ${h.high} cm`,
    'What matters most is steady growth along your baby\'s own curve on the growth chart at checkups — not matching an "ideal" number.',
    'Also check: 6+ wet diapers per day (after week 1), alertness, and feeding well.',
    'When to call the doctor: sudden percentile drop or jump, poor feeding, lethargy, or weight loss.',
  ];
  if (!gKey) {
    const wg = getWeightRange(m, 'girl');
    const wb = getWeightRange(m, 'boy');
    lines.splice(
      2,
      1,
      `Girls: ${wg.low}–${wg.high} kg | Boys: ${wb.low}–${wb.high} kg`
    );
  }
  return lines;
}

export function getHeadCircumferenceParagraphs(month, gender) {
  const m = month ?? 1;
  const g = gender === 'boy' ? 'boy' : 'girl';
  const head = getHeadRange(m, g);
  return [
    month != null ? `For Month ${m}:` : 'Head circumference:',
    `Typical range (approx.): ${head.low} – ${head.high} cm`,
    'The soft spot (fontanelle) on top is usually flat and may pulse gently — it typically closes by 12–18 months.',
    'When to call the doctor: sunken fontanelle with poor feeding (dehydration), bulging fontanelle with fever or lethargy, or very rapid head growth.',
  ];
}

export function getSleepScheduleParagraphs(month) {
  const s = getSleepNeeds(month);
  return [
    month != null ? `Sleep schedule — Month ${month}:` : 'Sleep schedule:',
    `Total sleep: about ${s.total} hours per 24 hours`,
    `Daytime naps: about ${s.naps}`,
    `Longest night stretch (typical): ${s.nightStretch}`,
    `Awake windows between sleeps: about ${s.awake}`,
    'Watch sleepy cues (yawning, staring, fussing) — overtired babies often fight sleep harder.',
    'A short, consistent bedtime routine (feed, dim lights, song) helps signal sleep time.',
    'When to call the doctor: difficulty waking, breathing pauses, or blue lips during sleep.',
  ];
}

export function getNightWakingParagraphs(month) {
  return [
    month != null ? `For Month ${month}:` : 'Night waking:',
    'Waking at night for feeds or comfort is normal for most infants under 6–12 months.',
    'Many babies do not "sleep through the night" (6–8 hours) until 6+ months, and some later — this is not a failure of parenting.',
    'Keep lights low and interactions boring at night to reinforce day vs night.',
    'When to call the doctor: sudden change in sleep with fever, breathing difficulty, or extreme lethargy.',
  ];
}

export function getFeverParagraphs(month) {
  if (month != null && month < 3) {
    return [
      `For Month ${month} (under 3 months):`,
      'Any rectal temperature of 100.4°F (38°C) or higher needs prompt medical evaluation — do not wait.',
      'Use a digital rectal thermometer for accuracy in young infants.',
      'Do not give fever medicine without pediatrician guidance in this age group.',
      'Seek care urgently if baby is lethargic, not feeding, has a rash, or breathing difficulty.',
    ];
  }
  return [
    month != null ? `For Month ${month}:` : 'Fever in infants:',
    'Fever is often the body fighting infection. Rectal or temporal artery thermometers are most reliable for babies.',
    'Contact your pediatrician for: fever in a baby under 3 months, fever over 102°F (39°C), fever lasting more than 3 days, or if baby seems very unwell.',
    'Comfort: extra fluids (milk), light clothing, pediatrician-approved fever reducer if advised.',
    'Seek emergency care: difficulty breathing, blue lips, seizure, bulging fontanelle, or unresponsive baby.',
  ];
}

export const coldCoughGuide = {
  title: 'Colds, Cough & Congestion',
  paragraphs: [
    'Most babies have several mild colds in the first year — daycare and siblings increase exposure.',
    'Saline nose drops and gentle suction help congestion; a cool-mist humidifier may ease breathing.',
    'Do not use over-the-counter cough/cold medicines under 2 years (not recommended).',
    'When to call the doctor: fever in young infants, fast breathing, ribs pulling in, blue lips, poor feeding, or symptoms worsening after 5–7 days.',
  ],
};

export function getRefluxParagraphs(month) {
  return [
    month != null ? `For Month ${month}:` : 'Spitting up & reflux:',
    'Frequent spit-up after feeds is common — "happy spitter" babies gain weight well and are content.',
    'Try: smaller feeds, burp mid-feed, hold upright 20–30 minutes after feeding, avoid tight diapers.',
    'Concerning signs: projectile vomiting, green vomit, blood in spit-up, poor weight gain, extreme fussiness with arching back.',
    'When to call the doctor: dehydration signs, blood in vomit, or poor weight gain.',
  ];
}

export const jaundiceGuide = {
  title: 'Jaundice (Yellow Skin/Eyes)',
  paragraphs: [
    'Many newborns develop mild jaundice in the first week as the liver matures — often resolves with frequent feeding.',
    'Breastfed babies may have jaundice slightly longer; pediatrician monitors bilirubin levels.',
    'When to call the doctor urgently: very yellow skin/eyes, lethargy, poor feeding, high-pitched cry, or jaundice after the first 2 weeks without follow-up.',
  ],
};

export const eyeCareGuide = {
  title: 'Eye Care',
  paragraphs: [
    'Sticky or watery eyes in newborns are often blocked tear ducts — gentle massage inner corner and clean with damp cotton.',
    'Most blocked ducts open on their own by 12 months.',
    'When to call the doctor: red/painful eye, pus-like discharge with fever, crossed eyes after 4 months, or white reflection in photos (rare — mention at checkup).',
  ],
};

export function getCrawlingParagraphs(month) {
  return [
    month != null ? `For Month ${month}:` : 'Crawling:',
    'Many babies crawl between 6–10 months; some skip crawling and go straight to cruising/walking.',
    'Encourage: tummy time, reaching for toys, time on the floor in a safe space.',
    'Army crawling and bottom-scooting count as mobility — variety is normal.',
    'When to call the doctor: no movement toward mobility by 12 months, or loss of skills.',
  ];
}

export function getWalkingParagraphs(month) {
  return [
    month != null ? `For Month ${month}:` : 'Walking:',
    'First steps often occur between 9–18 months; cruising along furniture usually comes first.',
    'Bare feet or soft shoes indoors help balance and foot development.',
    'When to call the doctor: not standing with support by 18 months or regression in motor skills.',
  ];
}

export function getSittingParagraphs(month) {
  return [
    month != null ? `For Month ${month}:` : 'Sitting:',
    'Supported sitting often begins 4–5 months; independent sitting commonly 6–7 months.',
    'Practice: supported sitting with pillows, reaching for toys to build core strength.',
    'When to call the doctor: cannot sit with support by 9 months.',
  ];
}

export function getLanguageParagraphs(month) {
  if (month != null && month <= 3) {
    return [
      `For Month ${month}:`,
      'Expect coos, gurgles, and turning to your voice — early language foundations.',
      'Talk, sing, and narrate your day; respond to baby\'s sounds (serve and return).',
      'When to call the doctor: no response to loud sounds.',
    ];
  }
  if (month != null && month <= 8) {
    return [
      `For Month ${month}:`,
      'Babbling with consonants (ba, da, ma) is typical from ~6 months.',
      'Repeat sounds back; read books daily; limit background TV so baby can focus on your voice.',
      'When to call the doctor: no babbling by 9 months.',
    ];
  }
  if (month != null && month <= 18) {
    return [
      `For Month ${month}:`,
      'First words often appear around 12 months; "mama" and "dada" may come before words have meaning.',
      'Name objects during play; celebrate any word attempts.',
      'When to call the doctor: no words by 18 months.',
    ];
  }
  return [
    month != null ? `For Month ${month}:` : 'Language development:',
    'Two-word phrases often emerge 18–24 months; vocabulary grows rapidly with exposure.',
    'Read daily, expand what baby says ("ball" → "Yes, red ball!").',
    'When to call the doctor: loss of words, no gestures, or no phrases by 24 months.',
  ];
}

export const hearingGuide = {
  title: 'Hearing & Sound Response',
  paragraphs: [
    'Newborn hearing screening is standard — follow up if referred.',
    'Babies should startle to loud sounds, calm to familiar voices, and turn toward sounds by a few months old.',
    'Talk and sing face-to-face; notice if baby consistently does not respond to sounds.',
    'When to call the doctor: no reaction to loud noises, no babbling by 9 months, or parental concern about hearing.',
  ],
};

export const hiccupsGuide = {
  title: 'Hiccups',
  paragraphs: [
    'Hiccups are very common in newborns and infants — often during or after feeds.',
    'They are usually harmless and stop on their own; no treatment needed.',
    'When to call the doctor: hiccups with vomiting, breathing difficulty, or poor feeding every time.',
  ],
};

export const pacifierGuide = {
  title: 'Pacifiers & Soothing',
  paragraphs: [
    'Pacifiers may reduce SIDS risk when used at sleep (after breastfeeding is established, if nursing).',
    'Offer for soothing, not to replace feeds; avoid dipping in honey or sweeteners.',
    'Weaning can start gradually after 6–12 months if desired — no fixed deadline for all families.',
    'Thumb sucking is also common and usually stops on its own before school age.',
  ],
};

export function getBabyProofingParagraphs(month) {
  const m = month ?? 6;
  const tips =
    m < 6
      ? 'Secure cords, cover outlets, never leave on high surfaces, water never unattended.'
      : m < 12
        ? 'Pad sharp corners, anchor furniture, choking hazards off floor, stair gates planned.'
        : 'Cabinet locks, toilet locks, small objects out of reach, supervise pets and older siblings.';
  return [
    `Safety — around Month ${m}:`,
    tips,
    'Get on the floor at baby\'s level to spot hazards.',
    'When to call the doctor: any fall with vomiting, sleepiness, or bulging fontanelle — seek care immediately.',
  ];
}

export function getPlayToysParagraphs(month) {
  return [
    month != null ? `Play ideas — Month ${month}:` : 'Play & activities:',
    'Best toys match current skills: high-contrast cards (newborn), rattles (2–3 mo), textured books (4+ mo), balls and stacking cups (6+ mo).',
    'Floor time and your attention matter more than expensive gear.',
    'See the month detail page in this app for milestone activities and DIY ideas.',
    'When to call the doctor: no interest in people or toys by 4 months.',
  ];
}

export const separationAnxietyGuide = {
  title: 'Separation & Stranger Anxiety',
  paragraphs: [
    'Clinginess and crying when you leave often peak around 8–10 months — a sign of healthy attachment.',
    'Practice short separations, goodbye rituals, and familiar caregivers.',
    'Avoid sneaking away — a quick hug and "I\'ll be back" builds trust over time.',
    'When to call the doctor: extreme distress that never improves or social withdrawal at 12+ months.',
  ],
};

export const bondingGuide = {
  title: 'Bonding & Connection',
  paragraphs: [
    'Bonding builds through responsive care: feeding, cuddling, talking, and meeting cries with comfort.',
    'Skin-to-skin is powerful for newborns and still soothing later.',
    'If you feel disconnected, exhausted, or hopeless — tell your doctor; postpartum mood changes are common and treatable.',
    'When to call the doctor: thoughts of harming yourself or baby — seek help immediately.',
  ],
};

export const fallbackResponse = {
  title: 'Parenting Assistant',
  paragraphs: [
    'Try asking about: weight or height, sleep hours, fever, feeding, crawling, talking, spit-up, teething, vaccines, or development.',
    'Your birth date is saved — advice uses your baby\'s current month when you do not specify another month.',
    'For medical emergencies or urgent concerns, contact your pediatrician or emergency services.',
  ],
};

export function withDisclaimer(paragraphs) {
  const list = Array.isArray(paragraphs) ? paragraphs : [paragraphs];
  return [...list, MEDICAL_DISCLAIMER];
}
