import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Svg, { G, Circle } from 'react-native-svg';

type inputObject = {
    activityAmount: number,
    activityName: string,
    activityType: string,
    activitySubType: string,
    isMonthly: boolean,
    date: Date
}

const DonutChart = (params: { input: inputObject[] }) => {

    const radius = 70;
    const circleCircumference = 2 * Math.PI * radius;

    // temp
    // const leftToSpendAmount = 600;
    // const targetAmount = 1000;
    // const spentAmount = targetAmount - leftToSpendAmount;
    // const percentage = (spentAmount / targetAmount) * 100;
    // const strokeDashoffset = circleCircumference - (circleCircumference * percentage) / 100;
    // end temp

    let sumOfIncome = 0;
    let sumOfSpent = 0;
    for (let i = 0; i < params.input.length; i++) {
        if (params.input[i].activityType === 'income') {
            sumOfIncome += params.input[i].activityAmount;
        } else {
            sumOfSpent += params.input[i].activityAmount;
        }
    }

    const percentage = (sumOfSpent/sumOfIncome) * 100;
    const strokeDashoffset = circleCircumference - (circleCircumference * percentage) / 100;

    //console.log(params.toString());
    

    return (
        <View style={styles.graphWrapper}>
            <Text style={styles.titleText}>{Math.round(percentage)}% of monthly budget used.</Text>
            <Svg height='270' width='270' viewBox='0 0 180 180'>
                <G rotation={-90} originX='90' originY='90'>
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#F1F6F9"
                        fill="transparent"
                        strokeWidth="25"
                    />
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#14274E"
                        fill="transparent"
                        strokeWidth="25"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </G>
            </Svg>
        </View>
    )
}

export default DonutChart;

const styles = StyleSheet.create({
    titleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 5,
      },
    graphWrapper: {
        alignItems: "center",
        justifyContent: "center",
    },
})