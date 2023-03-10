import React from "react";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";
const SelectManager = () => {
  const { options, value, onChange } = useMultiSelect({
    value: "",
    options: ["ab", "cd"],
  });
  return (
    <div className="MultiSelectBox" >
      <MultiSelect
        options={options}
        value={value}
        label="Select Manager"
        onChange={onChange}
        single
        create
      />
    </div>
  );
};

export default SelectManager;
