import MomCareTips from '../components/MomCareTips';

function MomCare({ birthDate }) {
  return (
    <div className="mom-care-page">
      <MomCareTips birthDate={birthDate} />
    </div>
  );
}

export default MomCare;
