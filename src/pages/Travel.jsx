import TravelTips from '../components/TravelTips';

function Travel({ currentMonth, onGoHome, onGoShopping }) {
  return (
    <div className="travel-page">
      <TravelTips
        currentMonth={currentMonth}
        onGoHome={onGoHome}
        onGoShopping={onGoShopping}
      />
    </div>
  );
}

export default Travel;
