import { useState } from 'react';
import Timeline from '../components/Timeline';

function Home({ birthDate, setBirthDate, currentMonth, checkedItems, onSelectMonth }) {
  const formatAge = () => {
    if (!birthDate) return null;
    const birth = new Date(birthDate);
    const now = new Date();
    const months = (now.getFullYear() - birth.getFullYear()) * 12 + (now.getMonth() - birth.getMonth());
    const days = now.getDate() - birth.getDate();
    const adjustedMonths = days < 0 ? months - 1 : months;

    if (adjustedMonths < 0) return "Baby hasn't arrived yet!";
    if (adjustedMonths === 0) return "Your newborn is less than a month old!";
    if (adjustedMonths === 1) return "Your baby is 1 month old!";
    if (adjustedMonths <= 36) return `Your baby is ${adjustedMonths} months old!`;
    return `Your child is ${Math.floor(adjustedMonths / 12)} years and ${adjustedMonths % 12} months old!`;
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Baby Milestone Tracker</h1>
        <p>
          Track your little one's journey from newborn to toddler.
          Discover monthly milestones, activities, and tips for the first 36 months.
        </p>
        <div className="birth-date-form">
          <label htmlFor="birthdate">When was your baby born?</label>
          <input
            type="date"
            id="birthdate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
          />
          {birthDate && (
            <div className="birth-date-info fade-in">
              {formatAge()}
            </div>
          )}
        </div>
      </section>

      <Timeline
        currentMonth={currentMonth}
        checkedItems={checkedItems}
        onSelectMonth={onSelectMonth}
      />
    </div>
  );
}

export default Home;
