import { View, Text, Button, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { NavigationProp, RouteProp } from '@react-navigation/native';
import AddActivityForm from '../../components/AddActivityForm';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import DonutChart from '../../components/DonutChart';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../firebaseConfig';
import { collection, doc, getDocs } from 'firebase/firestore';


// interface RouterProps {
//   navigation: NavigationProp<any, any>;
//   route: RouteProp<any, any>;
// }

type queryObject = {
  activityAmount: number,
  activityName: string,
  activityType: string,
  activitySubType: string,
  isMonthly: boolean,
  date: Date
}

const Home = ({ navigation, route }: any) => {

  const [data, setData] = useState([]);

  const getQuery = async () => {
    const activitiesColRef = collection(FIREBASE_DB, "Users", FIREBASE_AUTH.currentUser?.uid as string, "Activities");
    const querySnapshot = await getDocs(activitiesColRef);

    let queryData: queryObject[] = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, ' => ', doc.data());
      queryData.push(doc.data() as queryObject);
    })
    if (!(queryData === data)) {
      setData(queryData as any);
    }
  }

  getQuery()

  const [modalVisible, setModalVisible] = useState(false);

  const drawerNavigator = navigation.getParent('Drawer')

  useEffect(() => {
    drawerNavigator.setOptions({
      headerRight: () => (
        <FontAwesome.Button name='plus-square' onPress={() => setModalVisible(!modalVisible)} />
      ),
    })
  }, [navigation])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddActivityForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <DonutChart input={data as any} />
      <Button title='View activities' onPress={() => {
        console.log(data);
        navigation.navigate('Details', { data: data })
      }}/>
    </View>
  )
}

export default Home