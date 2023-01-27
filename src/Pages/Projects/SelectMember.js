import React from "react";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";
const SelectMember = () => {
  const { options, value, onChange } = useMultiSelect({
    value: [],
    options: ["ab", "cd"],
  });
  return (
    <MultiSelect
      options={options}
      value={value}
      label="Select Members"
      onChange={onChange}
      create
    />
  );
};

export default SelectMember;
