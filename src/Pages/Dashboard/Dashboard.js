import { Text } from "@chakra-ui/react";
import * as React from "react";
import Shells from "../../Components/shels/Shells";
import AfterAuth from "../../HOC/AfterAuth";

const Dashboard = ({ children, colorMode, toggleColorMode }) => {
  return (
    <AfterAuth>
      <Shells />
    </AfterAuth>
  );
};
export default Dashboard;
