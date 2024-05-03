import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type dataType = {
  activityAmount: number,
  activityName: string,
  activityType: string,
  activitySubType: string,
  isMonthly: boolean,
  date: Date
}

const Details = ({ navigation, route }: any) => {

  console.log(route.params.data);
  
  const d = new Date();

  let results: any = [];

  route.params.data?.forEach((item: any, index: any): any => {
    results.push(
      <View style={styles.item} key={index}>
        <Text style={styles.headerText}>{item.activityName}</Text>
        <Text style={styles.text}>{item.activityType}</Text>
        <Text style={styles.text}>{item.activitySubType}</Text>
        {item.isMonthly && <Text>Repeats monthly</Text>}
        <Text style={styles.text}>{new Date(item.date.seconds * 1000).toLocaleDateString()}</Text>
      </View>
    )
  })

  console.log(results);
  

  return (
    <View style={styles.container}>
      {results}
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-start'
  },
  item: {
    marginBottom: 10,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  }
})