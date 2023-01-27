import React from "react";
import { MultiSelect, useMultiSelect } from "chakra-multiselect";
const SelectTeam = () => {
  const { options, value, onChange } = useMultiSelect({
    value: "",
    options: ["ab", "cd"],
  });
  return (
    <MultiSelect
      options={options}
      value={value}
      label="Select Team"
      onChange={onChange}
      single
      create
    />
  );
};

export default SelectTeam;
