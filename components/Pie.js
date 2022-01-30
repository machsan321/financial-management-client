import React, { useState } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { VictoryPie } from "victory-native";
import { FONTS, SIZES } from '../constants';

const Pie = ({ chartData, selectedCategory, events }) => {
  const [height, setHeight] = useState(() =>
    Platform.OS == "ios" ? SIZES.height * 0.8 : SIZES.height
  );
  const [width, setWidth] = useState(() =>
    Platform.OS == "ios" ? SIZES.width * 0.8 : SIZES.width
  );
  const [standalone, setStandalone] = useState(() =>
    Platform.OS == "ios" ? true : false
  );
    
  let colorScales = chartData.map((item) => item.color);
  let totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0
  );

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <VictoryPie
        standalone={standalone}
        labels={(datum) => `${datum.y}`}
        data={chartData}
        innerRadius={70}
        width={width}
        height={height}
        colorScale={colorScales}
        events={events}
        labelRadius={({ innerRadius }) =>
          (SIZES.width * 0.4 + innerRadius) / 2.5
        }
        style={{
          labels: { fill: "white", ...FONTS.body3 },
          parent: {
            ...styles.shadow,
          },
        }}
        radius={({ datum }) =>
          selectedCategory && selectedCategory.name == datum.name
            ? SIZES.width * 0.4
            : SIZES.width * 0.4 - 10
        }
      />
      <View style={{ position: "absolute", top: "42%", left: "42%" }}>
        <Text style={{ ...FONTS.h1, textAlign: "center" }}>
          {totalExpenseCount}
        </Text>
        <Text style={{ ...FONTS.body3, textAlign: "center" }}>Expenses</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default Pie;