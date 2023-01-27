import React from "react";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";
const SelectTranslator = () => {
  const { options, value, onChange } = useMultiSelect({
    value: "",
    options: ["ab", "cd"],
  });
  return (
    <MultiSelect
      options={options}
      value={value}
      label="Select Translator"
      onChange={onChange}
      single
      create
    />
  );
};

export default SelectTranslator;
