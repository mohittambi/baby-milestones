import milestones from '../data/milestones';
import {
  sleepRegressionGuide,
  solidsNotReady,
  solidsReady,
  chokingGuide,
  fallbackResponse,
  feedingIssuesGuide,
  teethingGuide,
  growthSpurtGuide,
  tummyTimeGuide,
  colicGuide,
  constipationGuide,
  skinCareGuide,
  immunizationsGuide,
  safeSleepGuide,
  bathTimeGuide,
  getTravelParagraphs,
  withDisclaimer,
  getWeightHeightParagraphs,
  getHeadCircumferenceParagraphs,
  getSleepScheduleParagraphs,
  getNightWakingParagraphs,
  getFeverParagraphs,
  coldCoughGuide,
  getRefluxParagraphs,
  jaundiceGuide,
  eyeCareGuide,
  getCrawlingParagraphs,
  getWalkingParagraphs,
  getSittingParagraphs,
  getLanguageParagraphs,
  hearingGuide,
  hiccupsGuide,
  pacifierGuide,
  getBabyProofingParagraphs,
  getPlayToysParagraphs,
  separationAnxietyGuide,
  bondingGuide,
} from '../data/assistantResponses';

function normalize(input) {
  return input.toLowerCase().trim();
}

export function parseMonth(text) {
  let match = text.match(/month\s*(\d{1,2})/i);
  if (!match) match = text.match(/(\d{1,2})\s*month/i);
  if (!match) match = text.match(/(\d{1,2})\s*mo\b/i);
  if (!match) return null;
  const n = parseInt(match[1], 10);
  if (n < 1 || n > 36) return null;
  return n;
}

export function parseGender(text) {
  if (/\bbaby\s*girl\b|\bgirl\b|\bdaughter\b/.test(text)) return 'girl';
  if (/\bbaby\s*boy\b|\bboy\b|\bson\b/.test(text)) return 'boy';
  return null;
}

export function parseTravelType(text) {
  if (/flight|airplane|airport|air travel|\bfly\b|\bflying\b/.test(text)) return 'air';
  if (/train|rail|metro|railway/.test(text)) return 'train';
  if (/hotel|resort|overnight stay|multi.?day/.test(text)) return 'hotel';
  if (/day outing|picnic|\bpark\b|mall visit|short trip/.test(text)) return 'dayOuting';
  if (/road trip|car trip|\bdrive\b|\bdriving\b|car seat.*trip|trip.*car/.test(text)) return 'car';
  if (/\bcar\b|\broad\b/.test(text)) return 'car';
  return null;
}

function resolveContextMonth({ currentMonth, selectedMonth, parsedMonth }) {
  if (parsedMonth != null) return parsedMonth;
  if (selectedMonth != null) return selectedMonth;
  if (currentMonth != null) return currentMonth;
  return null;
}

function paragraphsToBody(paragraphs) {
  return withDisclaimer(paragraphs).join('\n\n');
}

function makeResponse(type, title, paragraphs, monthUsed) {
  return {
    type,
    title,
    body: paragraphsToBody(paragraphs),
    monthUsed,
  };
}

function buildMonthCryingResponse(month) {
  const data = milestones.find((m) => m.month === month);
  if (!data) {
    return makeResponse(
      'monthCrying',
      `Month ${month} — Crying & Fussiness`,
      ['No milestone data found for that month. Please choose a month between 1 and 36.'],
      month
    );
  }

  const emotionalTips = data.emotional
    .slice(0, 2)
    .map((e) => `• ${e.text} — ${e.tip}`)
    .join('\n');
  const challenge =
    data.cons.find((c) => /cry|fuss|sleep|regression|frustrat/i.test(c)) || data.cons[0];
  const weekly = data.weeklyTips?.[0]?.tip;

  const paragraphs = [
    `Month ${month} (${data.title}): ${data.summary}`,
    'What may be going on:',
    emotionalTips,
    challenge ? `Common challenge this month: ${challenge}` : '',
    weekly ? `Tip for this stage: ${weekly}` : '',
    'Comfort strategies: respond warmly, check hunger/diaper/temperature, offer a calm environment, and use consistent soothing routines. If crying is sudden, high-pitched, or paired with fever, rash, or breathing difficulty, seek medical care promptly.',
  ].filter(Boolean);

  return makeResponse('monthCrying', `Month ${month} — Crying & Fussiness`, paragraphs, month);
}

function buildSleepRegression(monthUsed) {
  const paragraphs = [...sleepRegressionGuide.paragraphs];
  if (monthUsed === 4) {
    paragraphs.push(sleepRegressionGuide.month4Note);
  }
  return makeResponse('sleepRegression', sleepRegressionGuide.title, paragraphs, monthUsed);
}

function buildSolids(monthUsed) {
  const ready = monthUsed != null && monthUsed >= 6;
  const guide = ready ? solidsReady : solidsNotReady;
  return makeResponse('solids', guide.title, guide.paragraphs, monthUsed);
}

function buildMonthAwareFallback(monthUsed, text) {
  const data = milestones.find((m) => m.month === monthUsed);
  if (!data) {
    return makeResponse('fallback', fallbackResponse.title, fallbackResponse.paragraphs, monthUsed);
  }

  const paragraphs = [
    `We do not have a specific guide for "${text}" yet.`,
    `For Month ${monthUsed} (${data.title}): ${data.summary}`,
    `This month's tip: ${data.weeklyTips?.[0]?.tip || 'See weekly tips on the month detail page.'}`,
    'Try: weight, sleep hours, fever, feeding, crawling, talking, spit-up, teething, or development check.',
  ];

  return makeResponse('fallback', fallbackResponse.title, paragraphs, monthUsed);
}

export function matchAssistantQuery(input, { currentMonth = null, selectedMonth = null } = {}) {
  const text = normalize(input);
  if (!text) {
    return makeResponse('fallback', fallbackResponse.title, fallbackResponse.paragraphs, null);
  }

  const parsedMonth = parseMonth(text);
  const monthUsed = resolveContextMonth({ currentMonth, selectedMonth, parsedMonth });
  const gender = parseGender(text);
  const monthForTopic = parsedMonth ?? monthUsed;

  if (/chok|gag|can't breathe|cannot breathe|obstruct/.test(text)) {
    return makeResponse('choking', chokingGuide.title, chokingGuide.paragraphs, monthUsed);
  }

  if (/fever|temperature|thermometer|burning up|hot forehead|paracetamol|crocin|ibuprofen.*fever/.test(text)) {
    return makeResponse('fever', 'Fever', getFeverParagraphs(monthForTopic), monthForTopic);
  }

  if (
    /not taking feed|won't feed|wont feed|refus.*feed|feed.*refus|not eating|won't eat|wont eat|won't drink|wont drink|nursing strike|bottle strike|latch|breastfeed|breast feed|\bfeed\b|feeding|\bbottle\b|\bnursing\b/.test(
      text
    ) &&
    !/sleep|regress/.test(text) &&
    !/spit|reflux|vomit/.test(text)
  ) {
    return makeResponse(
      'feedingIssues',
      feedingIssuesGuide.title,
      feedingIssuesGuide.getParagraphs(monthForTopic),
      monthForTopic
    );
  }

  if (/head circumference|head size|fontanelle|soft spot|head too big|head too small/.test(text)) {
    return makeResponse(
      'headCircumference',
      'Head Circumference',
      getHeadCircumferenceParagraphs(monthForTopic, gender),
      monthForTopic
    );
  }

  if (
    /ideal weight|how much should.*weigh|weight|heavy|light|\bkg\b|\bpound|\blbs\b|percentile|growth chart|underweight|overweight|how tall|height|length|\bcm\b|too small|too big/.test(
      text
    ) &&
    !/growth spurt/.test(text)
  ) {
    const title =
      gender === 'girl'
        ? `Weight & Growth — Month ${monthForTopic ?? '?'} (Girls)`
        : gender === 'boy'
          ? `Weight & Growth — Month ${monthForTopic ?? '?'} (Boys)`
          : `Weight & Growth — Month ${monthForTopic ?? '?'}`;
    return makeResponse(
      'weightHeight',
      title,
      getWeightHeightParagraphs(monthForTopic, gender),
      monthForTopic
    );
  }

  if (/sleep\s*regress|regression.*sleep|waking.*night.*regress|4.?month.*sleep/.test(text)) {
    return buildSleepRegression(monthUsed);
  }

  if (
    /how much sleep|how many hours.*sleep|nap schedule|awake window|sleep hours|sleep training|overtired|when should.*sleep|bedtime routine/.test(
      text
    ) &&
    !/regress/.test(text)
  ) {
    return makeResponse(
      'sleepSchedule',
      'Sleep Schedule',
      getSleepScheduleParagraphs(monthForTopic),
      monthForTopic
    );
  }

  if (/night feed|dream feed|sleeping through|sleep through the night|waking at night|wake at night/.test(text)) {
    return makeResponse(
      'nightWaking',
      'Night Waking',
      getNightWakingParagraphs(monthForTopic),
      monthForTopic
    );
  }

  if (
    /safe sleep|sids|co-?sleep|cosleep|crib safety|back to sleep/.test(text) &&
    !/regress/.test(text)
  ) {
    const extra =
      monthUsed != null && monthUsed < 6
        ? ['For babies under 6 months, room-sharing without bed-sharing is especially emphasized in safe-sleep guidance.']
        : [];
    return makeResponse('safeSleep', safeSleepGuide.title, [...safeSleepGuide.paragraphs, ...extra], monthUsed);
  }

  if (/\bsolid|\bweaning|puree|starting to eat/.test(text) && !/feed/.test(text)) {
    return buildSolids(monthUsed);
  }

  if (/spit up|spitting|reflux|gerd|projectile vomit|posset/.test(text)) {
    return makeResponse(
      'refluxSpitUp',
      'Spitting Up & Reflux',
      getRefluxParagraphs(monthForTopic),
      monthForTopic
    );
  }

  if (/teeth|teething|drool|drooling|gum|biting/.test(text)) {
    return makeResponse(
      'teething',
      teethingGuide.title,
      teethingGuide.getParagraphs(monthUsed),
      monthUsed
    );
  }

  if (/growth\s*spurt|cluster\s*feed|eating a lot|hungry all the time|feeding frenzy/.test(text)) {
    return makeResponse(
      'growthSpurt',
      growthSpurtGuide.title,
      growthSpurtGuide.getParagraphs(monthUsed),
      monthUsed
    );
  }

  if (/colic|inconsolable|evening crying|gassy baby/.test(text)) {
    return makeResponse('colic', colicGuide.title, colicGuide.paragraphs, monthUsed);
  }

  if (/constipat|hard stool|strain.*stool|not pooping/.test(text) && !/poop.*normal/.test(text)) {
    const intro =
      monthUsed != null ? [`For Month ${monthUsed} babies — stool patterns change with diet and age.`] : [];
    return makeResponse('constipation', constipationGuide.title, [...intro, ...constipationGuide.paragraphs], monthUsed);
  }

  if (/rash|diaper rash|eczema|cradle cap|skin irritation/.test(text)) {
    return makeResponse('skinCare', skinCareGuide.title, skinCareGuide.paragraphs, monthUsed);
  }

  if (/vaccin|immuniz|shot\b|fever after vaccine/.test(text)) {
    return makeResponse(
      'immunizations',
      immunizationsGuide.title,
      immunizationsGuide.getParagraphs(monthUsed),
      monthUsed
    );
  }

  if (/jaundice|yellow skin|yellow eyes|bilirubin/.test(text)) {
    return makeResponse('jaundice', jaundiceGuide.title, jaundiceGuide.paragraphs, monthUsed);
  }

  if (/sticky eye|blocked tear|tear duct|squint|vision|baby eye|\beyes\b/.test(text)) {
    return makeResponse('eyeCare', eyeCareGuide.title, eyeCareGuide.paragraphs, monthUsed);
  }

  if (/cold\b|cough|runny nose|congestion|stuffy nose|sneez/.test(text)) {
    return makeResponse('coldCough', coldCoughGuide.title, coldCoughGuide.paragraphs, monthUsed);
  }

  if (/crawl|creeping|army crawl|not crawling/.test(text)) {
    return makeResponse('crawling', 'Crawling', getCrawlingParagraphs(monthForTopic), monthForTopic);
  }

  if (/walk|walking|first step|cruising|not walking/.test(text)) {
    return makeResponse('walking', 'Walking', getWalkingParagraphs(monthForTopic), monthForTopic);
  }

  if (/sit up|sitting up|not sitting|supported sitting/.test(text) || (/\bsit\b|\bsitting\b/.test(text) && !/baby sitter/.test(text))) {
    return makeResponse('sittingUp', 'Sitting', getSittingParagraphs(monthForTopic), monthForTopic);
  }

  if (/hear|hearing|respond to sound|not responding to sound|deaf/.test(text)) {
    return makeResponse('hearing', hearingGuide.title, hearingGuide.paragraphs, monthUsed);
  }

  if (
    /talk|talking|babbl|first word|speech|say mama|say dada|not talking|when will.*speak|language/.test(text)
  ) {
    return makeResponse('language', 'Language & Speech', getLanguageParagraphs(monthForTopic), monthForTopic);
  }

  if (/tummy\s*time|tummytime|prone|neck strength|head control/.test(text)) {
    return makeResponse(
      'tummyTime',
      tummyTimeGuide.title,
      tummyTimeGuide.getParagraphs(parsedMonth ?? monthUsed),
      parsedMonth ?? monthUsed
    );
  }

  if (/\bbath\b|umbilical|cord stump|bathing/.test(text)) {
    const extra =
      monthUsed != null && monthUsed <= 1
        ? ['Month 1: sponge baths until the umbilical cord stump falls off.']
        : [];
    return makeResponse('bathTime', bathTimeGuide.title, [...extra, ...bathTimeGuide.paragraphs], monthUsed);
  }

  if (
    /travel|road trip|flying|flight|airplane|airport|train trip|hotel stay|day outing|trip with baby|going on a trip/.test(
      text
    )
  ) {
    const travelType = parseTravelType(text);
    const guide = getTravelParagraphs(monthForTopic, travelType);
    return makeResponse('travel', guide.title, guide.paragraphs, monthForTopic);
  }

  if (/baby proof|childproof|baby safety|fall hazard|injury prevention/.test(text)) {
    return makeResponse(
      'babyProofing',
      'Baby Proofing & Safety',
      getBabyProofingParagraphs(monthForTopic),
      monthForTopic
    );
  }

  if (/hiccup/.test(text)) {
    return makeResponse('hiccups', hiccupsGuide.title, hiccupsGuide.paragraphs, monthUsed);
  }

  if (/pacifier|dummy|soother|thumb suck|thumb sucking/.test(text)) {
    return makeResponse('pacifier', pacifierGuide.title, pacifierGuide.paragraphs, monthUsed);
  }

  if (/separation anxiety|stranger anxiety|clingy|won't let go|cry when i leave|cry when i go/.test(text)) {
    return makeResponse(
      'separationAnxiety',
      separationAnxietyGuide.title,
      separationAnxietyGuide.paragraphs,
      monthUsed
    );
  }

  if (/bond|bonding|attachment|postpartum|not bonding/.test(text)) {
    return makeResponse('bonding', bondingGuide.title, bondingGuide.paragraphs, monthUsed);
  }

  if (/\btoy|\btoys\b|how to play|what to do with baby|play ideas|activities for/.test(text)) {
    return makeResponse('playToys', 'Play & Toys', getPlayToysParagraphs(monthForTopic), monthForTopic);
  }

  if (
    /milestone|develop|behind|delay|not doing|developing normally|watch for|concerned about/.test(text)
  ) {
    const month = parsedMonth ?? monthUsed ?? currentMonth ?? 1;
    const data = milestones.find((m) => m.month === month);
    if (data) {
      const milestoneList = [...data.physical, ...data.emotional]
        .slice(0, 4)
        .map((i) => `• ${i.text}`)
        .join('\n');
      const watchList = data.watchFor.slice(0, 4).map((w) => `• ${w}`).join('\n');
      const paragraphs = [
        `Month ${month} (${data.title}): ${data.summary}`,
        'Milestones many babies work on now:',
        milestoneList,
        'Discuss with your pediatrician if you notice:',
        watchList,
        'Every baby has their own pace. One delayed skill is not always a problem; loss of skills or multiple concerns should be evaluated promptly.',
      ];
      return makeResponse('developmentCheck', `Development — Month ${month}`, paragraphs, month);
    }
  }

  const cryingQuery =
    parsedMonth != null && /cry|fuss|fussy|upset|scream|won't stop/.test(text);

  if (cryingQuery) {
    return buildMonthCryingResponse(parsedMonth);
  }

  if (/cry|fuss|fussy|upset|scream/.test(text) && monthUsed != null && !/colic/.test(text)) {
    return buildMonthCryingResponse(monthUsed);
  }

  if (monthUsed != null) {
    return buildMonthAwareFallback(monthUsed, text);
  }

  return makeResponse('fallback', fallbackResponse.title, fallbackResponse.paragraphs, null);
}
