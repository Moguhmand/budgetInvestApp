import { View, Text, Button, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { NavigationProp, RouteProp } from '@react-navigation/native';
import AddActivityForm from '../../components/AddActivityForm';
import FontAwesome from '@expo/vector-icons/FontAwesome';


// interface RouterProps {
//   navigation: NavigationProp<any, any>;
//   route: RouteProp<any, any>;
// }

const Home = ({ navigation, route }: any) => {

  const [modalVisible, setModalVisible] = useState(false);

  const drawerNavigator = navigation.getParent('Drawer')

  useEffect(() => {
    drawerNavigator.setOptions({
      headerRight: () => (
        <FontAwesome.Button name='plus-square' onPress={() => setModalVisible(!modalVisible)}/>
      ),
    })
  }, [navigation])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AddActivityForm modalVisible={modalVisible} setModalVisible={setModalVisible}/>

      <Button title='Alert' onPress={() => alert('gg')} />
    </View>
  )
}

export default Home