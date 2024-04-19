import AddCategory from "../Modals/AddCategory";
import AddFood from "../Modals/AddFood";

const Drink = () => {
  return (
    <div>
      <div className="drink-wrap">
        <div>
          <div className="drink-header flex justify-between">
            <h2 className="text-[22px] font-bold">Drink</h2>
            <AddCategory />
          </div>
          <AddFood />
        </div>
      </div>
    </div>
  );
};

export default Drink;
