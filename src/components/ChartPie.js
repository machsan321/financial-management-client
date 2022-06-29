import React from "react";
import { Platform } from "react-native";
import { SIZES } from "../constants/index";
import Pie from "./Pie";


const ChartPie = ({ chartData, selectedCategory, events }) => {
  return ( Platform.OS == "android" ? (
    <Svg
      width={SIZES.width}
      height={SIZES.width}
      style={{ width: "100%", height: "auto" }}
    >
      <Pie
        chartData={chartData}
        selectedCategory={selectedCategory}
        events={events}
      />
    </Svg>
  ) : (
    <Pie
      chartData={chartData}
      selectedCategory={selectedCategory}
      events={events}
    />
  )); 
};

export default ChartPie;
