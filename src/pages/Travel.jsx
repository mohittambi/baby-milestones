import TravelTips from '../components/TravelTips';

function Travel({ currentMonth }) {
  return (
    <div className="travel-page">
      <TravelTips currentMonth={currentMonth} />
    </div>
  );
}

export default Travel;
