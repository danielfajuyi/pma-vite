function FilterItem({ itemText, handleFilter }) {
  return (
    <div onClick={handleFilter} className="dropdown-option-list ">
      {itemText}
    </div>
  );
}

export default FilterItem;
