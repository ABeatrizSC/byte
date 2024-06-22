import React, { ChangeEventHandler } from "react";
import { Category } from "../../../../types/models";

interface CategoryRadioProps extends Category {
  handleSelect: ChangeEventHandler<HTMLInputElement>;
  selectedCategory: string;
  name: string;
}

const CategoryRadio: React.FC<CategoryRadioProps> = (props) => {
  const { handleSelect, selectedCategory, name, category_id } = props;
  return (
    <div className="radio-filter-container">
      <input
        type="radio"
        name="filter"
        id={category_id}
        value={category_id}
        checked={selectedCategory === category_id}
        onChange={handleSelect}
      />
      <label htmlFor={category_id}>{name}</label>
    </div>
  );
};

export default CategoryRadio;
