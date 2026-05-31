// Month-by-month shopping, care guides, clothes, and holding games (India-focused)
// See docs/baby-shopping-and-care-guide.md for full research and links

const PRODUCTS = {
  sebamedLotion: {
    id: 'shop-sebamed-lotion',
    name: 'Sebamed Baby Body Lotion (pH 5.5)',
    image: '/images/shop/sebamed-lotion.jpg',
    category: 'skincare',
    for: 'baby',
    why: 'pH 5.5 protects acid mantle; chamomile and allantoin soothe dry skin',
    links: {
      firstcry: 'https://www.firstcry.com/sebamed/0/0/831',
      amazon: 'https://www.amazon.in/s?k=sebamed+baby+lotion',
    },
  },
  sebamedRashCream: {
    id: 'shop-sebamed-rash',
    name: 'Sebamed Baby Rash Cream',
    image: '/images/shop/sebamed-rash.jpg',
    category: 'skincare',
    for: 'baby',
    why: 'Diaper rash prevention; maintains pH 5.5 in diaper area',
    links: {
      firstcry: 'https://www.firstcry.com/sebamed/0/0/831',
      amazon: 'https://www.amazon.in/s?k=sebamed+baby+rash+cream',
    },
  },
  sebamedShampoo: {
    id: 'shop-sebamed-shampoo',
    name: 'Sebamed Baby Shampoo (tear-free)',
    image: '/images/shop/sebamed-shampoo.jpg',
    category: 'skincare',
    for: 'baby',
    why: 'Gentle scalp cleansing; use 1–2× per week',
    links: {
      firstcry: 'https://www.firstcry.com/sebamed/sebamed-baby-shampoo-ph-5-5-soap-free-no-tears-150-ml/48194/product-detail',
      amazon: 'https://www.amazon.in/s?k=sebamed+baby+shampoo',
    },
  },
  sebamedWash: {
    id: 'shop-sebamed-wash',
    name: 'Sebamed Baby Gentle Wash',
    image: '/images/shop/sebamed-wash.jpg',
    category: 'skincare',
    for: 'baby',
    why: 'Soap-free, tear-free body wash for bath time',
    links: {
      firstcry: 'https://www.firstcry.com/sebamed/sebamed-baby-gentle-wash-ph-5-5-baby-body-wash-soap-free-tear-free-1000-ml/18256737/product-detail',
      amazon: 'https://www.amazon.in/s?k=sebamed+baby+gentle+wash',
    },
  },
  drySheets: {
    id: 'shop-dry-sheets',
    name: 'Waterproof Dry Sheets (pack of 2–3)',
    image: '/images/shop/dry-sheets.jpg',
    category: 'gear',
    for: 'baby',
    why: 'Protects mattress during diaper leaks and spit-up',
    links: {
      firstcry: 'https://www.firstcry.com/search?q=baby+dry+sheet',
      amazon: 'https://www.amazon.in/dp/B0BCVRJSSM',
    },
  },
  sterilizer: {
    id: 'shop-sterilizer',
    name: 'Fisher-Price Bottle Sterilizer (SteamMax / DryMax)',
    image: '/images/shop/sterilizer.jpg',
    category: 'feeding',
    for: 'baby',
    why: 'Steam-sterilize bottles, pump parts, and pacifiers',
    links: {
      firstcry: 'https://www.firstcry.com/fisher-price-by-tiffany/fisher-price-drymax-6-bottle-sterilizer-and-dryer-multicolor/8870538/product-detail',
      amazon: 'https://www.amazon.in/s?k=fisher+price+baby+bottle+sterilizer',
    },
  },
  breastPump: {
    id: 'shop-breast-pump',
    name: 'Babyhug / Philips Avent Breast Pump',
    image: '/images/shop/breast-pump.jpg',
    category: 'feeding',
    for: 'parent',
    why: 'Express milk for storage or when away (Just Born does not make pumps)',
    links: {
      firstcry: 'https://www.firstcry.com/breast-feeding/breast-pumps?scid=37&type=t1-70',
      amazon: 'https://www.amazon.in/s?k=babyhug+breast+pump',
    },
  },
  carrier: {
    id: 'shop-carrier',
    name: 'Babyhug Baby Carrier (newborn-safe)',
    image: '/images/shop/carrier.jpg',
    category: 'travel',
    for: 'both',
    why: 'Hands-free carrying; inward-facing for months 1–4',
    links: {
      firstcry: 'https://www.firstcry.com/babyhug/baby-carriers/7/41/621',
      amazon: 'https://www.amazon.in/s?k=babyhug+baby+carrier+newborn',
    },
  },
  diaperBag: {
    id: 'shop-diaper-bag',
    name: 'Motherly Diaper Bag',
    image: '/images/shop/diaper-bag.jpg',
    category: 'travel',
    for: 'parent',
    why: 'Hospital bag and outings; insulated bottle pockets, changing mat on some models',
    links: {
      firstcry: 'https://www.firstcry.com/motherly/motherly-grace-tote-diaper-bag-for-mothers-for-travel-with-changing-mat-and-6-month-assurance-maternity-hospital-bag-for-newborn-water-resistant-baby-bag-for-mom-unicorn-blue/18177039/product-detail',
      amazon: 'https://www.amazon.in/Motherly-Diaper-Mothers-Maternity-Unicorn/dp/B07SW4FDSQ/',
    },
  },
  bottleBrush: {
    id: 'shop-bottle-brush',
    name: 'Bottle Cleaning Brush Set',
    image: '/images/shop/bottle-brush.jpg',
    category: 'hygiene',
    for: 'baby',
    why: 'Clean bottle nipples and pump parts after each use',
    links: {
      firstcry: 'https://www.firstcry.com/feeding-bottle-cleaning/cleaning-combo-sets?scid=133&type=t1-6063',
      amazon: 'https://www.amazon.in/dp/B0FQNZXVGK',
    },
  },
  pram: {
    id: 'shop-pram',
    name: 'Newborn Pram (180° flat recline)',
    image: '/images/shop/pram.jpg',
    category: 'travel',
    for: 'baby',
    why: 'Safe flat position for 0–6 months; many convert to stroller later',
    links: {
      firstcry: 'https://www.firstcry.com/baby-strollers-and-prams/180-degree-flat-recline?features=t2-7336&scid=44',
      amazon: 'https://www.amazon.in/s?k=newborn+pram+flat+recline',
    },
  },
  newbornClothes: {
    id: 'shop-newborn-clothes',
    name: 'Newborn Cotton Clothes Set',
    image: '/images/shop/newborn-clothes.jpg',
    category: 'clothing',
    for: 'baby',
    why: '6–8 jhablas/onesies, caps, mittens, swaddles — wash before first use',
    links: {
      firstcry: 'https://www.firstcry.com/babyhug/babyhug-100-cotton-woven-sleeveless-jhablas-with-stripes-and-teddy-bear-print-pack-of-3-white-orange-and-sky-blue/19801994/product-detail',
      amazon: 'https://www.amazon.in/s?k=newborn+cotton+jhabla+romper',
    },
  },
  playGym: {
    id: 'shop-play-gym',
    name: 'Baby Play Gym / Play Mat (BIS certified)',
    image: '/images/shop/play-gym.jpg',
    category: 'gear',
    for: 'baby',
    why: 'Tummy time, reaching, and sensory play from month 2–3',
    links: {
      firstcry: 'https://www.firstcry.com/play-gyms-and-playmats/0-3-months/3-6-months/6-9-months/9-12-months/12-18-months/18-24-months?age=0%2C1%2C2%2C3%2C4%2C5&scid=49',
      amazon: 'https://www.amazon.in/s?k=playmat+for+babies+0+to+12+months',
    },
  },
  pacifier: {
    id: 'shop-pacifier',
    name: 'BPA-Free Orthodontic Pacifier (0–6M)',
    image: '/images/shop/pacifier.jpg',
    category: 'feeding',
    for: 'baby',
    why: 'Comfort sucking after breastfeeding is established (month 2–3+)',
    optional: true,
    links: {
      firstcry: 'https://www.firstcry.com/search?q=baby+pacifier+bpa+free',
      amazon: 'https://www.amazon.in/Philips-Avent-Pacifier-SCF085-12/dp/B09P1V8RMM',
    },
  },
  bibs: {
    id: 'shop-bibs',
    name: 'Baby Bibs (4–5 pack)',
    image: '/images/shop/bibs.jpg',
    category: 'clothing',
    for: 'baby',
    why: 'Drooling increases around month 3–4',
    links: {
      firstcry: 'https://www.firstcry.com/babyhug/babyhug-drool-bibs-printed-pack-of-5-multicolor/18149757/product-detail',
      amazon: 'https://www.amazon.in/s?k=baby+bibs+cotton',
    },
  },
  stroller: {
    id: 'shop-stroller',
    name: 'Multi-Recline Stroller',
    image: '/images/shop/stroller.jpg',
    category: 'travel',
    for: 'baby',
    why: 'If pram does not convert — for sit-up outings from ~6 months',
    optional: true,
    links: {
      firstcry: 'https://www.firstcry.com/babyhug/baby-strollers-prams/7/44/621',
      amazon: 'https://www.amazon.in/s?k=baby+stroller+6+months+reclining',
    },
  },
  walkingShoes: {
    id: 'shop-walking-shoes',
    name: 'Soft-Sole Baby Shoes',
    image: '/images/shop/walking-shoes.jpg',
    category: 'clothing',
    for: 'baby',
    why: 'Flexible sole for early walking practice — not stiff shoes',
    links: {
      firstcry: 'https://www.firstcry.com/search?q=baby+soft+sole+shoes',
      amazon: 'https://www.amazon.in/s?k=baby+soft+sole+shoes+first+walkers',
    },
  },
  nursingPads: {
    id: 'shop-nursing-pads',
    name: 'Nursing Pads',
    image: '/images/shop/nursing-pads.jpg',
    category: 'feeding',
    for: 'parent',
    why: 'Leak protection during breastfeeding',
    links: {
      firstcry: 'https://www.firstcry.com/nua/nua-nursing-pads-pack-of-18-disposable-pads-soft-and-breathable-leak-protection-during-breastfeeding-discreet-and-comfortable-fit-100-toxic-free-safe-for-mom-and-baby-white/21490225/product-detail',
      amazon: 'https://www.amazon.in/s?k=nursing+pads+breastfeeding',
    },
  },
  nippleCream: {
    id: 'shop-nipple-cream',
    name: 'Lanolin Nipple Cream',
    image: '/images/shop/nipple-cream.jpg',
    category: 'feeding',
    for: 'parent',
    why: 'Sore nipple relief',
    links: {
      firstcry: 'https://www.firstcry.com/lansinoh/lansinoh-lanolin-nipple-cream-10ml/17520908/product-detail',
      amazon: 'https://www.amazon.in/s?k=lanolin+nipple+cream',
    },
  },
  burpCloths: {
    id: 'shop-burp-cloths',
    name: 'Burp Cloths (4–5)',
    image: '/images/shop/burp-cloths.jpg',
    category: 'feeding',
    for: 'parent',
    why: 'Spit-up after feeds',
    links: {
      firstcry: 'https://www.firstcry.com/search?q=burp+cloths+baby',
      amazon: 'https://www.amazon.in/s?k=baby+burp+cloths',
    },
  },
  clothesSizeUp: {
    id: 'shop-clothes-sizeup',
    name: 'Cotton Clothes (next size)',
    image: '/images/shop/clothes-sizeup.jpg',
    category: 'clothing',
    for: 'baby',
    why: 'Babies outgrow clothes quickly — buy 2–3 sizes ahead',
    links: {
      firstcry: 'https://www.firstcry.com/search?q=baby+cotton+romper',
      amazon: 'https://www.amazon.in/s?k=baby+cotton+romper',
    },
  },
};

const BATH_STEPS_SPONGE = [
  'Warm room (~26°C); gather towel, Sebamed wash, diaper, and clothes first',
  'Sponge bath only until umbilical cord falls (1–3 weeks)',
  'Face first with plain water — no soap in eyes',
  'Hair 2–3× per week with Sebamed Shampoo',
  'Body section by section; diaper area last',
  'Pat dry gently; apply Sebamed lotion on slightly damp skin',
  'Never leave baby unattended',
];

const BATH_STEPS_TUB = [
  'Warm room (~26°C); fill tub with 2–3 inches lukewarm water (37–38°C)',
  'Test water with elbow — warm, not hot',
  'Support head and neck with one hand at all times',
  'Face (plain water) → hair → body → diaper area last',
  'Total time 5–10 minutes; pat dry and apply lotion',
  'Never leave baby unattended in water',
];

const BATH_DOS = [
  'Use pH 5.5 baby wash (Sebamed Gentle Wash)',
  'Support head and neck always',
  'Test water temperature with elbow',
  'Keep bath 5–10 minutes',
  'Wait 30 minutes after feeding',
];

const BATH_DONTS = [
  'Never leave baby unattended',
  'No tub until umbilical cord falls off',
  'No adult soap or bubble bath under 6 months',
  'No hot water',
  'No oil on umbilical cord stump',
];

const MASSAGE_STEPS = [
  'Warm room; baby calm and alert — wait 30–45 min after feeding',
  'Warm coconut or sesame oil in palms (never cold oil)',
  'Legs: long strokes thigh to ankle',
  'Arms: milking stroke shoulder to wrist',
  'Tummy: clockwise circles (aids gas)',
  'Chest: outward strokes from center',
  'Back: long strokes neck to bottom (baby on tummy)',
  'Stop if baby fusses',
];

const MASSAGE_DOS = [
  'Start after umbilical cord falls off (week 2–3)',
  'Gentle strokes only — no firm pressure',
  'Best before bath (morning) or before bedtime',
];

const MASSAGE_DONTS = [
  'No massage before cord falls off',
  'No massage right after feeding',
  'No firm pressure or joint stretching',
  'No cold oil on skin',
];

const PACIFIER_DOS = [
  'Wait until breastfeeding is established (3–4 weeks)',
  'One-piece silicone, BPA-free, orthodontic shape',
  'Shield at least 1.5 inches wide with ventilation holes',
  'Sterilize before first use; clean daily',
  'Offer between or after feedings — not when hungry',
  'Replace every 2–3 months or if cracked',
  'Wean gradually from month 6–12',
];

const PACIFIER_DONTS = [
  'Do not introduce in week 1 if breastfeeding',
  'Do not tie pacifier around neck',
  'Do not dip in honey or sugar',
  'Do not force if baby refuses',
  'Do not use broken or cracked pacifiers',
  'Do not reinsert once baby is asleep',
  'Aim to stop by 12–18 months',
];

function getBathGuide(month) {
  const sponge = month <= 2;
  return {
    title: sponge ? 'Sponge Bath (until cord falls)' : 'Tub Bath',
    frequency: sponge
      ? '2–3× per week; sponge only until umbilical cord falls (1–3 weeks)'
      : '2–3× per week; tub bath after cord has healed',
    waterTemp: '37–37.5°C (test with elbow)',
    duration: '5–10 minutes',
    steps: sponge ? BATH_STEPS_SPONGE : BATH_STEPS_TUB,
    dos: BATH_DOS,
    donts: BATH_DONTS,
  };
}

function getMassageGuide(month) {
  let frequency = 'Once daily, 10–15 min, before bath or bedtime';
  if (month >= 4 && month <= 6) frequency = 'Once daily or every other day, 10–15 min';
  if (month >= 7) frequency = '2–3× per week, 10–15 min (bedtime routine)';
  return {
    title: 'Baby Massage',
    frequency,
    bestTime: 'Before bath (morning) — common in Indian families',
    oil: 'Warm coconut or sesame oil in palms first',
    steps: MASSAGE_STEPS,
    dos: MASSAGE_DOS,
    donts: MASSAGE_DONTS,
  };
}

function getPacifierGuide(month) {
  if (month < 2) return null;
  const guide = {
    title: 'Pacifier — Safe Use',
    when: month <= 3
      ? 'Introduce only after breastfeeding is well established (3–4 weeks)'
      : month <= 12
        ? 'Wean gradually — reduce use from month 6 onward'
        : 'Should be fully weaned by 18 months',
    dos: PACIFIER_DOS,
    donts: PACIFIER_DONTS,
  };
  return guide;
}

function getClothes(month) {
  if (month <= 1) {
    return {
      size: 'Newborn / 0–3 months',
      items: [
        '6–8 cotton jhablas/onesies (front-open)',
        '2–3 caps',
        '2–3 mittens',
        '2–3 muslin swaddles',
        '4–5 socks',
        '2–3 light blankets',
      ],
      notes: '100% cotton; wash before first use with mild baby detergent',
    };
  }
  if (month <= 3) {
    return {
      size: '0–3 months',
      items: ['Continue rotating 6–8 onesies', 'Add 2–3 rompers', 'Bibs from month 3 (drooling)'],
      notes: 'Fewer mittens as scratching reduces',
    };
  }
  if (month <= 6) {
    return {
      size: '3–6 months',
      items: ['Short-sleeve onesies for summer', 'Footed sleepsuits for night', '5–7 soft leggings', '4–5 bibs'],
      notes: 'Size up — baby doubles birth weight by 5–6 months',
    };
  }
  if (month <= 9) {
    return {
      size: '6–9 months',
      items: ['Crawling-friendly soft pants', 'Avoid loose strings or buttons', 'Optional knee pads on hard floors'],
      notes: 'Breathable cotton for Indian climate',
    };
  }
  if (month <= 12) {
    return {
      size: '9–12 months',
      items: ['Easy snap buttons for diaper changes', 'Soft flexible shoes when walking starts'],
      notes: 'Do not use stiff-soled shoes',
    };
  }
  if (month <= 18) {
    return {
      size: '12–18 months',
      items: ['Cardigans for winter/AC', 'Soft-soled shoes for walking practice'],
      notes: 'Layer in AC rooms year-round',
    };
  }
  if (month <= 24) {
    return {
      size: '18–24 months',
      items: ['Elastic-waist pants', 'Easy self-dressing tops by 24 months'],
      notes: 'Size up every 3 months',
    };
  }
  return {
    size: month <= 30 ? '24–30 months' : '30–36 months',
    items: ['Cotton breathable outfits', 'Season-appropriate layers'],
    notes: 'Buy 2–3 sizes ahead; 12–15 rotating pieces is enough',
  };
}

const HOLDING_BY_RANGE = [
  {
    maxMonth: 1,
    games: [
      { id: 'hold-m1-cradle', name: 'Cradle Hold', icon: "1f931", description: 'Head in elbow crook, body along forearm — for feeding and calming' },
      { id: 'hold-m1-football', name: 'Football Hold', icon: "1f3c8", description: 'Baby along your side, head in hand — good for colic and reflux' },
      { id: 'hold-m1-skin', name: 'Skin-to-Skin', icon: "two-hearts", description: 'Baby on bare chest, face turned — regulates temperature and bonding' },
      { id: 'hold-m1-shoulder', name: 'Shoulder Hold', icon: "baby", description: 'Upright against shoulder for burping after feeds' },
    ],
  },
  {
    maxMonth: 2,
    games: [
      { id: 'hold-m2-face', name: 'Face-to-Face Upright', icon: "1f440", description: 'Hold upright on chest at 30 cm — encourages social smile' },
      { id: 'hold-m2-mirror', name: 'Smile Mirror Game', icon: "1fa9e", description: 'Make slow smiles; wait up to 10 seconds for baby to respond' },
    ],
  },
  {
    maxMonth: 3,
    games: [
      { id: 'hold-m3-airplane', name: 'Airplane Hold', icon: "airplane", description: 'Tummy on forearm like airplane — tummy time alternative' },
      { id: 'hold-m3-sit', name: 'Supported Sitting', icon: "1fa91", description: 'Prop with pillows on lap — builds core strength' },
      { id: 'hold-m3-peek', name: 'Peek-a-Boo While Held', icon: "1f648", description: 'Cover face with cloth — object permanence play' },
    ],
  },
  {
    maxMonth: 4,
    games: [
      { id: 'hold-m4-sit', name: 'Supported Sitting on Lap', icon: "1fa91", description: 'Face in or out — trunk strength for reaching' },
      { id: 'hold-m4-bounce', name: 'Standing Bounce', icon: "1f9b5", description: 'Feet on lap, gentle bounce — leg strength prep' },
    ],
  },
  {
    maxMonth: 6,
    games: [
      { id: 'hold-m5-hip', name: 'Hip Carry (facing in)', icon: "hugging", description: 'Short periods facing in — safe world exploration' },
      { id: 'hold-m5-knee', name: 'Bouncing on Knee', icon: "1f3b5", description: 'Gentle bounce with rhymes — balance and joy' },
    ],
  },
  {
    maxMonth: 9,
    games: [
      { id: 'hold-m7-stand', name: 'Supported Standing', icon: "1f9cd", description: 'Hold under arms on lap — pre-walking leg strength' },
      { id: 'hold-m8-cruise', name: 'Cruising Support', icon: "1f6b6", description: 'Walk beside baby holding one hand at furniture' },
    ],
  },
  {
    maxMonth: 12,
    games: [
      { id: 'hold-m10-walk', name: 'Hand-Holding Walks', icon: "handshake", description: 'Walk holding both hands — walking confidence' },
      { id: 'hold-m11-piggy', name: 'Piggyback / Shoulder Ride', icon: "backpack", description: 'Well-supported shoulder ride for fun and balance' },
      { id: 'hold-m12-dance', name: 'Dancing Together', icon: "1f483", description: 'Sway to music while holding — rhythm and bonding' },
    ],
  },
  {
    maxMonth: 18,
    games: [
      { id: 'hold-m14-chase', name: 'Chase Games', icon: "1f3c3", description: 'Safe crawling chase on soft surfaces' },
      { id: 'hold-m15-ball', name: 'Ball Rolling', icon: "26bd", description: 'Roll soft ball while standing supported' },
    ],
  },
  {
    maxMonth: 24,
    games: [
      { id: 'hold-m18-spin', name: 'Spinning / Dancing', icon: "1f300", description: 'Hold hands and spin gently' },
      { id: 'hold-m20-horsey', name: 'Horsey Ride', icon: "1f434", description: 'Gentle bouncing on lap or back' },
    ],
  },
  {
    maxMonth: 36,
    games: [
      { id: 'hold-m24-throw', name: 'Throw and Catch', icon: "1f3be", description: 'Soft ball turn-taking while facing each other' },
      { id: 'hold-m30-copy', name: 'Copycat Games', icon: "1fa9e", description: 'Mirror baby movements — imitation learning' },
    ],
  },
];

function getHoldingGames(month) {
  const range = HOLDING_BY_RANGE.find((r) => month <= r.maxMonth);
  if (!range) return HOLDING_BY_RANGE[HOLDING_BY_RANGE.length - 1].games;
  const idx = HOLDING_BY_RANGE.indexOf(range);
  const games = [];
  for (let i = 0; i <= idx; i++) {
    games.push(...HOLDING_BY_RANGE[i].games);
  }
  return games.filter((g, i, arr) => arr.findIndex((x) => x.id === g.id) === i);
}

function getShopping(month) {
  const essential = [];
  const optional = [];
  const forParents = [];

  if (month === 1) {
    essential.push(
      PRODUCTS.sebamedLotion,
      PRODUCTS.sebamedRashCream,
      PRODUCTS.sebamedShampoo,
      PRODUCTS.sebamedWash,
      PRODUCTS.drySheets,
      PRODUCTS.sterilizer,
      PRODUCTS.breastPump,
      PRODUCTS.carrier,
      PRODUCTS.diaperBag,
      PRODUCTS.bottleBrush,
      PRODUCTS.pram,
      PRODUCTS.newbornClothes
    );
    forParents.push(PRODUCTS.nursingPads, PRODUCTS.nippleCream, PRODUCTS.burpCloths);
  }

  if (month >= 2 && month <= 3) {
    essential.push(PRODUCTS.playGym);
    optional.push({ ...PRODUCTS.pacifier, optional: true });
  }

  if (month >= 4 && month <= 6) {
    essential.push(PRODUCTS.bibs);
    essential.push({ ...PRODUCTS.clothesSizeUp, name: 'Cotton Clothes (3–6 months size)' });
  }

  if (month >= 6 && month <= 7) {
    optional.push({ ...PRODUCTS.stroller, optional: true });
  }

  if (month >= 7 && month <= 9) {
    essential.push({ ...PRODUCTS.clothesSizeUp, name: 'Cotton Clothes (6–9 months size)' });
  }

  if (month >= 10 && month <= 12) {
    essential.push({ ...PRODUCTS.clothesSizeUp, name: 'Cotton Clothes (9–12 months size)' });
    optional.push(PRODUCTS.walkingShoes);
  }

  if (month >= 13) {
    const sizeLabel =
      month <= 18 ? '12–18M' : month <= 24 ? '18–24M' : month <= 30 ? '24–30M' : '30–36M';
    essential.push({
      ...PRODUCTS.clothesSizeUp,
      id: `shop-clothes-m${month}`,
      name: `Cotton Clothes (${sizeLabel})`,
    });
  }

  return { essential, optional, forParents };
}

const shoppingAndCare = Array.from({ length: 36 }, (_, i) => {
  const month = i + 1;
  return {
    month,
    shopping: getShopping(month),
    careGuides: {
      bath: getBathGuide(month),
      massage: getMassageGuide(month),
      pacifier: getPacifierGuide(month),
    },
    holdingGames: getHoldingGames(month),
    clothes: getClothes(month),
  };
});

const GROUP_ORDER = { essential: 0, optional: 1, forParents: 2 };

/**
 * Merge shopping items from fromMonth..toMonth (inclusive), deduped by id.
 * Returns { essential, optional, forParents } with introMonth on each item.
 */
export function getShoppingListForRange(fromMonth, toMonth) {
  const from = Math.max(1, Math.min(36, fromMonth));
  const to = Math.max(from, Math.min(36, toMonth));
  const seen = new Map();

  for (let m = from; m <= to; m++) {
    const data = shoppingAndCare.find((d) => d.month === m);
    if (!data) continue;
    const { essential, optional, forParents } = data.shopping;
    essential.forEach((item) => {
      if (!seen.has(item.id)) seen.set(item.id, { ...item, group: 'essential', introMonth: m });
    });
    optional.forEach((item) => {
      if (!seen.has(item.id)) seen.set(item.id, { ...item, group: 'optional', introMonth: m });
    });
    forParents.forEach((item) => {
      if (!seen.has(item.id)) seen.set(item.id, { ...item, group: 'forParents', introMonth: m });
    });
  }

  const all = [...seen.values()].sort((a, b) => {
    const g = GROUP_ORDER[a.group] - GROUP_ORDER[b.group];
    if (g !== 0) return g;
    return a.introMonth - b.introMonth;
  });

  return {
    essential: all.filter((i) => i.group === 'essential'),
    optional: all.filter((i) => i.group === 'optional'),
    forParents: all.filter((i) => i.group === 'forParents'),
    all,
  };
}

export default shoppingAndCare;
