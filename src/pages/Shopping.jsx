import ShoppingChecklist from '../components/ShoppingChecklist';

function Shopping({ checkedItems, toggleCheck, currentMonth }) {
  return (
    <div className="shopping-page">
      <ShoppingChecklist
        checkedItems={checkedItems}
        toggleCheck={toggleCheck}
        currentMonth={currentMonth}
      />
    </div>
  );
}

export default Shopping;
