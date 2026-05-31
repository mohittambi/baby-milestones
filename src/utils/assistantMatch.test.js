import { describe, it, expect } from 'vitest';
import { matchAssistantQuery, parseMonth, parseGender, parseTravelType } from './assistantMatch';

describe('parseMonth and parseGender', () => {
  it('parses 4 month format', () => {
    expect(parseMonth('4 month not taking feed')).toBe(4);
    expect(parseMonth('ideal weight for month 4')).toBe(4);
  });

  it('parses gender from query', () => {
    expect(parseGender('4 month old baby girl')).toBe('girl');
    expect(parseGender('my son is 6 months')).toBe('boy');
  });

  it('parses travel type from query', () => {
    expect(parseTravelType('flying with baby')).toBe('air');
    expect(parseTravelType('road trip')).toBe('car');
    expect(parseTravelType('train journey')).toBe('train');
  });
});

describe('matchAssistantQuery', () => {
  it('matches sleep regression', () => {
    const r = matchAssistantQuery('sleep regression', { currentMonth: 4 });
    expect(r.type).toBe('sleepRegression');
    expect(r.body).toMatch(/sleep regression/i);
    expect(r.body).toMatch(/Month 4|4-month/i);
  });

  it('returns Month 6+ solids guidance when month >= 6', () => {
    const r = matchAssistantQuery('solids', { currentMonth: 6 });
    expect(r.type).toBe('solids');
    expect(r.title).toMatch(/Month 6/i);
    expect(r.body).toMatch(/single-ingredient|puree/i);
  });

  it('defers solids when month < 6', () => {
    const r = matchAssistantQuery('solids', { selectedMonth: 4 });
    expect(r.type).toBe('solids');
    expect(r.title).toMatch(/Not Yet/i);
    expect(r.body).toMatch(/6 months/i);
  });

  it('matches choking with emergency steps', () => {
    const r = matchAssistantQuery('choking');
    expect(r.type).toBe('choking');
    expect(r.body).toMatch(/emergency|911|back blows/i);
    expect(r.body).toMatch(/educational only|pediatrician/i);
  });

  it('matches Month 4 baby crying with month-specific content', () => {
    const r = matchAssistantQuery('Month 4 baby crying', { currentMonth: 8 });
    expect(r.type).toBe('monthCrying');
    expect(r.monthUsed).toBe(4);
    expect(r.body).toMatch(/Explorer|Month 4/i);
  });

  it('matches "4 month not taking feed" with feeding guide for month 4', () => {
    const r = matchAssistantQuery('4 month not taking feed', { currentMonth: 5 });
    expect(r.type).toBe('feedingIssues');
    expect(r.monthUsed).toBe(4);
    expect(r.body).toMatch(/For Month 4|Month 4/i);
  });

  it('matches ideal weight for 4 month old baby girl', () => {
    const r = matchAssistantQuery('the ideal weight for a 4 month old baby girl', {
      currentMonth: 5,
    });
    expect(r.type).toBe('weightHeight');
    expect(r.monthUsed).toBe(4);
    expect(r.title).toMatch(/Girls/i);
    expect(r.body).toMatch(/5\.6|7\.3|kg/i);
    expect(r.body).not.toMatch(/do not have a specific guide/i);
  });

  it('matches how much should my 6 month old weigh', () => {
    const r = matchAssistantQuery('how much should my 6 month old weigh', { currentMonth: 6 });
    expect(r.type).toBe('weightHeight');
    expect(r.monthUsed).toBe(6);
    expect(r.body).toMatch(/kg|Weight/i);
  });

  it('matches how many hours should my baby sleep', () => {
    const r = matchAssistantQuery('how many hours should my baby sleep', { currentMonth: 3 });
    expect(r.type).toBe('sleepSchedule');
    expect(r.monthUsed).toBe(3);
    expect(r.body).toMatch(/14|sleep|nap/i);
  });

  it('matches when will my baby crawl', () => {
    const r = matchAssistantQuery('when will my baby crawl', { currentMonth: 5 });
    expect(r.type).toBe('crawling');
    expect(r.body).toMatch(/6|10|crawl/i);
  });

  it('matches baby has fever', () => {
    const r = matchAssistantQuery('baby has fever', { currentMonth: 4 });
    expect(r.type).toBe('fever');
    expect(r.body).toMatch(/fever|doctor|pediatrician/i);
  });

  it('matches 3 month old spitting up', () => {
    const r = matchAssistantQuery('3 month old spitting up', { currentMonth: 5 });
    expect(r.type).toBe('refluxSpitUp');
    expect(r.monthUsed).toBe(3);
    expect(r.body).toMatch(/spit|reflux/i);
  });

  it('matches when will baby say mama', () => {
    const r = matchAssistantQuery('when will baby say mama', { currentMonth: 8 });
    expect(r.type).toBe('language');
    expect(r.body).toMatch(/mama|word|babbl/i);
  });

  it('matches baby not responding to sounds', () => {
    const r = matchAssistantQuery('baby not responding to sounds', { currentMonth: 4 });
    expect(r.type).toBe('hearing');
    expect(r.body).toMatch(/hear|sound/i);
  });

  it('matches is it ok to use pacifier', () => {
    const r = matchAssistantQuery('is it ok to use pacifier', { currentMonth: 2 });
    expect(r.type).toBe('pacifier');
    expect(r.body).toMatch(/pacifier|SIDS|sooth/i);
  });

  it('matches teething pain', () => {
    const r = matchAssistantQuery('teething pain', { currentMonth: 5 });
    expect(r.type).toBe('teething');
    expect(r.body).toMatch(/teething|drool/i);
  });

  it('matches growth spurt', () => {
    const r = matchAssistantQuery('growth spurt', { currentMonth: 3 });
    expect(r.type).toBe('growthSpurt');
    expect(r.body).toMatch(/spurt|cluster/i);
  });

  it('matches development check with month context', () => {
    const r = matchAssistantQuery('is my baby developing normally', { currentMonth: 4 });
    expect(r.type).toBe('developmentCheck');
    expect(r.monthUsed).toBe(4);
    expect(r.body).toMatch(/Explorer|Milestones/i);
  });

  it('matches Month 3 tummy time', () => {
    const r = matchAssistantQuery('Month 3 tummy time', { currentMonth: 8 });
    expect(r.type).toBe('tummyTime');
    expect(r.monthUsed).toBe(3);
  });

  it('matches diaper rash as skin care', () => {
    const r = matchAssistantQuery('diaper rash', { currentMonth: 2 });
    expect(r.type).toBe('skinCare');
    expect(r.body).toMatch(/diaper rash|barrier cream/i);
  });

  it('uses month-aware fallback when DOB set but query unknown', () => {
    const r = matchAssistantQuery('random xyz question', { currentMonth: 4 });
    expect(r.type).toBe('fallback');
    expect(r.monthUsed).toBe(4);
    expect(r.body).toMatch(/Explorer|Month 4/i);
  });

  it('matches flying with 4 month old as air travel for month 4', () => {
    const r = matchAssistantQuery('flying with my 4 month old baby', { currentMonth: 8 });
    expect(r.type).toBe('travel');
    expect(r.monthUsed).toBe(4);
    expect(r.title).toMatch(/Flight/i);
    expect(r.body).toMatch(/takeoff|landing|flight|Feed/i);
  });

  it('matches road trip with 9 month old', () => {
    const r = matchAssistantQuery('road trip with 9 month old', { currentMonth: 5 });
    expect(r.type).toBe('travel');
    expect(r.monthUsed).toBe(9);
    expect(r.body).toMatch(/car|road|Car/i);
  });

  it('matches travel tips with current month overview', () => {
    const r = matchAssistantQuery('travel tips', { currentMonth: 5 });
    expect(r.type).toBe('travel');
    expect(r.monthUsed).toBe(5);
    expect(r.body).toMatch(/Month 5|overview|Car|Flight/i);
  });
});
