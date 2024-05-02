import { View, Text, Button, Modal, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextField from './TextField'
import { ScrollView } from 'react-native-gesture-handler'
import Constants from 'expo-constants'
import { Picker } from '@react-native-picker/picker'

// type errors = {
//   name: string,
//   email: string,
//   password: string,
// }

const AddActivityForm = (params: { modalVisible: boolean, setModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const [activityType, setActivityType] = useState('')
  const [activitySubType, setActivitySubType] = useState('')
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [activityComment, setActivityComment] = useState('');
  const [isFixedExpense, setIsFixedExpense] = useState('')
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    validateForm()
  }, [activityType, activitySubType, name, amount]);

  const validateForm = () => {
    let errors: any = {};

    if (!name) {
      errors.name = 'Name is required.';
    }

    if (!amount) {
      errors.amount = 'Amount is required.';
    } else if (!/^-?\d+(.\d{3})*(\,\d{1,2})?$/.test(amount)) {
      errors.amount = 'Amount must be a number.';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      setShowErrors(false);
      console.log('Form submitted successfully');
    } else {
      setShowErrors(true);
      console.log('Form has errors. Please correct them.');
    }
  }

  return (
    <View>
      <Text>Add activity</Text>
      <Modal animationType='slide' visible={params.modalVisible}>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Text style={styles.headerText}>Add Activity</Text>
          <View style={styles.pickerStyle}>
            <Picker
              mode='dropdown'
              selectedValue={activityType}
              onValueChange={(itemValue, itemIndex) => setActivityType(itemValue)}
            >
              <Picker.Item label='Choose type' value='' />
              <Picker.Item label='Enjoyment' value='enjoyment' />
              <Picker.Item label='Fixed expenses' value='fixedExpenses' />
              <Picker.Item label='Necessity' value='necessity' />
              <Picker.Item label='Income' value='income' />
            </Picker>
          </View>

          {activityType &&
            <>
              <View style={styles.pickerStyle}>
              {(() => {
                switch (activityType) {
                  case 'enjoyment':
                    return (
                      <>
                        <Picker
                          mode='dropdown'
                          selectedValue={activitySubType}
                          onValueChange={(itemValue, itemIndex) => setActivitySubType(itemValue)}
                          >
                          <Picker.Item label='Choose type' value='' />
                          <Picker.Item label='Clothes' value='clothes' />
                          <Picker.Item label='Food' value='food' />
                        </Picker>
                      </>
                    )
                    case 'fixedExpenses':
                      return (
                      <>
                        <Picker
                          mode='dropdown'
                          selectedValue={activitySubType}
                          onValueChange={(itemValue, itemIndex) => setActivitySubType(itemValue)}
                          >
                          <Picker.Item label='Choose type' value='' />
                          <Picker.Item label='Rent/mortgage' value='rent' />
                          <Picker.Item label='Water/heating' value='waterHeating' />
                        </Picker>
                      </>
                    )
                  case 'necessity':
                    return (
                      <>
                        <Picker
                          mode='dropdown'
                          selectedValue={activitySubType}
                          onValueChange={(itemValue, itemIndex) => setActivitySubType(itemValue)}
                          >
                          <Picker.Item label='Choose type' value='' />
                          <Picker.Item label='Clothes' value='clothes' />
                          <Picker.Item label='Groceries' value='groceries' />
                        </Picker>
                      </>
                    )
                  case 'income':
                    return (
                      <>
                        <Picker
                          mode='dropdown'
                          selectedValue={activitySubType}
                          onValueChange={(itemValue, itemIndex) => setActivitySubType(itemValue)}
                          >
                          <Picker.Item label='Choose type' value='' />
                          <Picker.Item label='Miscellaneous' value='misc' />
                          <Picker.Item label='Salary' value='salary' />
                        </Picker>
                      </>
                    )
                  }
                })()}
                </View>

              <TextField
                style={styles.textField}
                label='Name your activity'
                value={name}
                onChangeText={setName}
                maxLength={31}
              />

              <TextField
                style={styles.textField}
                label='Amount'
                value={amount}
                onChangeText={setAmount}
                inputMode='numeric'
                maxLength={15}
              />

              <TextField
                style={styles.textField}
                label='Comment'
                value={activityComment}
                onChangeText={setActivityComment}
                multiline={true}
                maxLength={127}
              />

              <Switch />

              <TouchableOpacity
                style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
                // disabled={!isFormValid}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </>
          }

          {/* Display error messages */}
          {showErrors && Object.values(errors).map((error, index): any => (
            //console.log(index, error)

            <Text key={index} style={styles.error}>
              {error as string}
            </Text>
          ))}
        </KeyboardAvoidingView>
      </Modal>
    </View>
  )
}

export default AddActivityForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
  // input: {
  //   height: 60,
  //   borderColor: '#ccc',
  //   borderWidth: 1,
  //   marginBottom: 12,
  //   paddingHorizontal: 10,
  //   borderRadius: 8,
  //   fontSize: 16,
  // },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 5,
  },
  textField: {
    // flex: 1,
    marginTop: 24,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pickerStyle: {
    borderColor: '#B9C4CA',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 6,
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginBottom: 12,
  },
}); 