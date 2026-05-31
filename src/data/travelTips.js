import { travelTypeConfig, TRAVEL_TYPES } from './travelTypeConfig';

export { travelTypeConfig, TRAVEL_TYPES };

export const MEDICAL_DISCLAIMER_TRAVEL =
  'This information is educational only and does not replace advice from your pediatrician or emergency services.';

const BAND_LABELS = {
  newborn: 'newborns (Months 1–2)',
  infant: 'infants (Months 3–5)',
  olderInfant: 'older infants (Months 6–11)',
  toddler: 'toddlers (Months 12–24)',
  olderToddler: 'older toddlers (Months 25–36)',
};

/** @type {Record<string, Record<string, { packing: string[], during: string[], safety: string[], redFlags: string[] }>>} */
const TIPS = {
  car: {
    newborn: {
      packing: [
        'Rear-facing infant car seat installed correctly (base tight, harness at or below shoulders).',
        'Extra diapers, wipes, 2–3 outfit changes, blanket, burp cloths.',
        'Nursing cover or bottle supplies; pacifier if you use one.',
      ],
      during: [
        'Limit continuous car time when possible — plan stops every 1–2 hours for feeding, diaper, and stretch.',
        'Never leave baby alone in the car; avoid bulky coats under harness straps.',
        'Run AC in hot weather — parked cars heat up quickly in India.',
      ],
      safety: [
        'Car seat stays rear-facing until at least age 2 or max seat limit — whichever comes later per seat manual.',
        'Second adult in back seat with baby on long trips when possible.',
      ],
      redFlags: [
        'Excessive vomiting after rides, breathing difficulty, or lethargy — seek care.',
        'Sunburn or overheating — move to shade and offer fluids (milk).',
      ],
    },
    infant: {
      packing: [
        'Same car seat setup; add sun shades for rear windows, favourite small toy.',
        'Snacks not needed yet — milk only before 6 months unless pediatrician advised otherwise.',
      ],
      during: [
        'Baby may fuss from boredom — sing, talk, safe mirror toy if approved for your seat.',
        'Schedule drives around nap times; white noise or low music can help.',
      ],
      safety: [
        'Distraction at this age is common — secure loose items in the car (no projectiles).',
        'Check harness fit monthly as baby grows.',
      ],
      redFlags: [
        'Prolonged screaming with fever or vomiting — evaluate with doctor.',
      ],
    },
    olderInfant: {
      packing: [
        'Add spill-proof cup, bib, soft snacks if on solids, portable high-chair clip if eating on stops.',
        'Medicines bag: fever reducer only if pediatrician has advised use.',
      ],
      during: [
        'Offer water or milk on schedule; solids can wait until a safe stop.',
        'Tummy breaks on a mat — crawling practice reduces restlessness.',
      ],
      safety: [
        'Keep choking-sized foods out of reach while driving.',
        'Rear-facing still recommended through at least 2 years for most seats.',
      ],
      redFlags: [
        'Motion sickness with repeated vomiting — ask pediatrician before long trips.',
      ],
    },
    toddler: {
      packing: [
        'Snacks, sippy cup, books, stickers, tablet only if you use screens with limits.',
        'Potty supplies or extra diapers, change of clothes, hand sanitizer.',
      ],
      during: [
        'Explain short trips: "We drive, then park."',
        'Frequent stops for movement — toddlers need to burn energy.',
      ],
      safety: [
        'Harness or forward-facing per car seat stage — follow label limits, not age alone.',
        'Child-lock rear doors; teach not to unbuckle.',
      ],
      redFlags: [
        'Escape attempts from harness — stop safely and refit; consider different seat if persistent.',
      ],
    },
    olderToddler: {
      packing: [
        'Activity bag, headphones if used, comfort item, sunscreen/hat.',
        'ID and health insurance info for parents.',
      ],
      during: [
        'Involve child in trip planning — map, countdown, pack their small bag.',
        'Healthy snacks over sugary only — reduces crashes and car mess.',
      ],
      safety: [
        'Booster only when height/weight minimums met per local law and seat manual.',
      ],
      redFlags: [
        'Car sickness, injury after sudden stop — seek care if head injury suspected.',
      ],
    },
  },
  air: {
    newborn: {
      packing: [
        'Birth certificate or age proof may be required on some airlines for lap infant — check carrier rules.',
        'Diapers for flight duration + delays; changing pad, 2 outfits, muslin.',
        'Feed at takeoff/landing to ease ear pressure (breast or bottle).',
      ],
      during: [
        'Lap infant or approved car seat in own seat if purchased — own seat is safer when affordable.',
        'Walk the aisle only when crew allows; change diaper in lavatory with disposable liner.',
      ],
      safety: [
        'Avoid flying with fever or active illness if possible — immature immune system.',
        'Hand hygiene before feeding; limit strangers touching baby\'s face/hands.',
      ],
      redFlags: [
        'Breathing difficulty, blue lips, dehydration — seek crew help and medical care on landing.',
      ],
    },
    infant: {
      packing: [
        'Same feeding plan; extra layers (cabin AC is cold).',
        'Small toys, teething ring if drooling.',
      ],
      during: [
        'Feed or suck during ascent/descent every time.',
        'Protect ears from loud cabin — soft hat optional.',
      ],
      safety: [
        'Germ exposure is higher — postpone non-urgent travel if baby is unwell.',
      ],
      redFlags: [
        'Ear pain lasting after flight with fever — pediatrician visit.',
      ],
    },
    olderInfant: {
      packing: [
        'Finger foods in spill-proof containers, bib, wipes.',
        'Consider booking bassinet row if airline offers for infant weight limit.',
      ],
      during: [
        'Walk breaks when safe; stand with baby in aisle if permitted.',
        'Stick to familiar foods to avoid tummy upset.',
      ],
      safety: [
        'Altitude and dry air — offer fluids often.',
      ],
      redFlags: [
        'Severe diarrhea or vomiting on board — notify crew; hydrate after landing.',
      ],
    },
    toddler: {
      packing: [
        'Snacks, tablet/books, headphones, spare clothes in carry-on.',
        'Stroller gate-check if allowed — saves arms in airport.',
      ],
      during: [
        'Explain security and boarding steps beforehand to reduce anxiety.',
        'Ear pressure: drink from straw cup or snack during climb/descent.',
      ],
      safety: [
        'Use harness in airplane seat if you brought FAA-approved restraint.',
        'Toddler-proof medications — keep in adult bag.',
      ],
      redFlags: [
        'Meltdown with injury risk — prioritize safety over embarrassment; pause in quiet corner.',
      ],
    },
    olderToddler: {
      packing: [
        'Child ID, activities, charged tablet, power bank, comfort toy.',
        'Masks if family chooses during illness season — follow local guidance.',
      ],
      during: [
        'Let child help roll small bag; praise cooperation at security.',
      ],
      safety: [
        'Discuss not running in terminals; hold hands in crowds.',
      ],
      redFlags: [
        'Lost child protocols — agree meeting point before entering busy areas.',
      ],
    },
  },
  train: {
    newborn: {
      packing: [
        'Lightweight carrier or stroller; Indian trains vary — confirm berth type (lower/side lower for space).',
        'Feeding supplies, hot water in thermos only if you can test temperature safely on wrist.',
      ],
      during: [
        'Keep baby away from aisle edges and hot chai vendors passing by.',
        'Sanitize hands before feeds; train surfaces are high-touch.',
      ],
      safety: [
        'Never leave baby unattended on berth; adult sleeps in shifts on long journeys.',
      ],
      redFlags: [
        'Fever after travel — see doctor; crowded carriages increase infection risk.',
      ],
    },
    infant: {
      packing: [
        'Sheet or liner for berth; mosquito net if overnight rural routes.',
        'Toys that do not roll away under seats.',
      ],
      during: [
        'Use window or door area for short walks when train is stopped safely.',
        'AC coaches: dress in layers.',
      ],
      safety: [
        'Secure baby during sudden stops and boarding rush.',
      ],
      redFlags: [
        'Diarrhea from unfamiliar water — use sealed bottled water for formula if applicable.',
      ],
    },
    olderInfant: {
      packing: [
        'Portable food, utensils, bib, trash bags for waste.',
        'Child-safe soap for hand cleaning.',
      ],
      during: [
        'Explore vestibule only with adult and when train rules allow.',
      ],
      safety: [
        'Watch fingers in berth gaps and folding tables.',
      ],
      redFlags: [
        'Dehydration in heat — offer fluids frequently.',
      ],
    },
    toddler: {
      packing: [
        'Snacks, activities, potty or diapers, change of clothes.',
        'Harness or wrist link in crowded stations.',
      ],
      during: [
        'Point out scenery — trains can be less stressful than cars for motion sickness.',
      ],
      safety: [
        'Hold hands on platforms; stand behind yellow line.',
      ],
      redFlags: [
        'Wandering on moving train — assign one adult to watch at all times.',
      ],
    },
    olderToddler: {
      packing: [
        'Books, card games, small puzzles, headphones.',
        'Own small backpack teaches responsibility.',
      ],
      during: [
        'Set bathroom rules before trip; use station stops for toilet when possible.',
      ],
      safety: [
        'Discuss strangers and staying close in crowds.',
      ],
      redFlags: [
        'Injury on sharp berth edges — first aid kit handy.',
      ],
    },
  },
  dayOuting: {
    newborn: {
      packing: [
        'Stroller with lie-flat or carrier; sun hat, light blanket.',
        'Feeding cover, diapers for 2–3 changes minimum.',
      ],
      during: [
        'Avoid peak sun (11am–4pm); seek shade.',
        'Keep outing under 2 hours if baby is under 6 weeks unless pediatrician cleared longer.',
      ],
      safety: [
        'No sunscreen on large areas under 6 months — shade and clothing first.',
      ],
      redFlags: [
        'Overheating, sunburn, lethargy — cool down and seek care if not improving.',
      ],
    },
    infant: {
      packing: [
        'Play mat for park grass; insect protection as advised locally.',
        'Extra layer for evening breeze.',
      ],
      during: [
        'Mall outings: go during quieter hours; germ exposure in food courts.',
      ],
      safety: [
        'Stranger awareness — polite declines for kisses on face/hands.',
      ],
      redFlags: [
        'Fever 24–48h after crowded outing — monitor hydration.',
      ],
    },
    olderInfant: {
      packing: [
        'Snacks, cup, wet wipes, change of clothes.',
        'Portable shade umbrella.',
      ],
      during: [
        'Let baby explore textures safely — grass, sand with supervision.',
      ],
      safety: [
        'Choking hazards at picnics — cut grapes/foods appropriately.',
      ],
      redFlags: [
        'Bee sting or rash — remove stinger if visible, call doctor for facial swelling.',
      ],
    },
    toddler: {
      packing: [
        'Snacks, water, hat, sunscreen per pediatrician after 6 months.',
        'Band-aids, hand sanitizer.',
      ],
      during: [
        'Set return-home time before leaving — avoids overtired meltdown.',
      ],
      safety: [
        'Playground: check equipment temperature and height appropriateness.',
      ],
      redFlags: [
        'Fall from climbing structure — watch for head injury signs.',
      ],
    },
    olderToddler: {
      packing: [
        'Activity kit, snacks, potty plan, spare clothes.',
      ],
      during: [
        'Involve in planning: "We will leave when the big hand is here."',
      ],
      safety: [
        'Road safety near parking lots — hold hands always.',
      ],
      redFlags: [
        'Lost in crowd — teach name and parent phone if appropriate.',
      ],
    },
  },
  hotel: {
    newborn: {
      packing: [
        'Portable crib or confirm hotel crib meets safety standards (firm mattress, fitted sheet only).',
        'Sterilizing supplies if bottle-feeding; travel blackout blinds optional.',
      ],
      during: [
        'Keep sleep environment similar to home — same sleep sack, white noise app.',
        'Check room temperature; AC remote out of reach later when mobile.',
      ],
      safety: [
        'Never bed-share on soft hotel mattresses if avoidable — separate safe sleep surface.',
      ],
      redFlags: [
        'Poor sleep with fever — may be illness, not just new place.',
      ],
    },
    infant: {
      packing: [
        'Outlet covers if toddler phase approaching; baby monitor if large suite.',
        'Bath tub insert or sink bath plan.',
      ],
      during: [
        'Unpack essentials first — sleep space, then feeding station.',
      ],
      safety: [
        'Inspect room for small objects, loose cords, balcony doors.',
      ],
      redFlags: [
        'Rash after hotel linens — wash known clothes; see doctor if worsening.',
      ],
    },
    olderInfant: {
      packing: [
        'High-chair alternative: clip seat or eat on lap safely at table.',
        'Laundry soap for accidents.',
      ],
      during: [
        'Maintain nap schedule roughly — overtired baby fights sleep in new crib.',
      ],
      safety: [
        'Childproof sharp furniture corners with towels if needed.',
      ],
      redFlags: [
        'Stomach upset from new water — use bottled if concerned.',
      ],
    },
    toddler: {
      packing: [
        'Snack stash, potty seat if toilet training, night light.',
        'Pool float only if size-appropriate and supervised.',
      ],
      during: [
        'Tour room together: "This is where we sleep tonight."',
      ],
      safety: [
        'Lock balcony doors; check window stops.',
      ],
      redFlags: [
        'Pool incident — supervise within arm\'s reach always.',
      ],
    },
    olderToddler: {
      packing: [
        'Activities for downtime, swim gear if pool, first-aid basics.',
      ],
      during: [
        'Set simple rules: indoor voice, no running in corridors.',
      ],
      safety: [
        'Elevator safety — hold hands, step in/out together.',
      ],
      redFlags: [
        'Injury in unfamiliar gym/play zone — know local emergency number.',
      ],
    },
  },
};

export function getTravelBand(month) {
  if (month == null) return 'infant';
  if (month <= 2) return 'newborn';
  if (month <= 5) return 'infant';
  if (month <= 11) return 'olderInfant';
  if (month <= 24) return 'toddler';
  return 'olderToddler';
}

export function getTravelTips(month, typeId) {
  const type = TIPS[typeId] ? typeId : 'car';
  const band = getTravelBand(month);
  const data = TIPS[type][band];
  const cfg = travelTypeConfig[type];

  return {
    typeId: type,
    typeLabel: cfg.label,
    typeIcon: cfg.icon,
    month: month ?? null,
    band,
    bandLabel: BAND_LABELS[band],
    title: `${cfg.label} — Month ${month ?? '?'}`,
    sections: [
      { heading: 'Packing', items: data.packing },
      { heading: 'During the trip', items: data.during },
      { heading: 'Safety', items: data.safety },
      { heading: 'When to call the doctor', items: data.redFlags },
    ],
  };
}

export function getTravelOverview(month) {
  const m = month ?? 4;
  const band = getTravelBand(m);
  const lines = [
    `Travel overview for Month ${m} (${BAND_LABELS[band]}):`,
    ...TRAVEL_TYPES.map((id) => {
      const cfg = travelTypeConfig[id];
      const tip = TIPS[id][band].during[0];
      return `• ${cfg.icon} ${cfg.label}: ${tip}`;
    }),
    'Open the Travel page to read full guides by type, or ask: "flying with my baby" or "road trip month 6".',
  ];
  return lines;
}

export function formatTravelTipsAsParagraphs(month, typeId) {
  if (!typeId) {
    return getTravelOverview(month);
  }
  const tips = getTravelTips(month, typeId);
  const paras = [
    month != null
      ? `For Month ${month} — ${tips.typeLabel} (${tips.bandLabel}):`
      : `${tips.typeLabel} (${tips.bandLabel}):`,
  ];
  for (const sec of tips.sections) {
    paras.push(`${sec.heading}:\n${sec.items.map((i) => `• ${i}`).join('\n')}`);
  }
  return paras;
}
