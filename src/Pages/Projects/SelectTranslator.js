import React from "react";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";
const SelectTranslator = () => {
  const { options, value, onChange } = useMultiSelect({
    value: "",
    options: ["ab", "cd"],
  });
  return (
    <div className="MultiSelectBox">
      <MultiSelect
        options={options}
        value={value}
        label="Select Translator"
        onChange={onChange}
        single
        create
      />
    </div>
  );
};

export default SelectTranslator;
