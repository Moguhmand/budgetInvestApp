import { View, Text, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../../firebaseConfig';
import AddActivityForm from '../../components/AddActivityForm';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Home = ({ navigation }: RouterProps) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        animationType='slide'
        visible={modalVisible}
      >
        <View>
          <Text>hola!</Text>
          <AddActivityForm />
          <Button title='Submit' onPress={() => setModalVisible(!modalVisible)} />
        </View>
      </Modal>

      <Button title='Add new Activity' onPress={() => setModalVisible(true)} />
    </View>
  )
}

export default Home