import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { withFormik } from 'formik';


const teste = (props) => (
  <View style={styles.container}>
    <TextInput
      value={props.values.email}
      onChangeText={text => props.setFieldValue('email', text)}
    />

    <TextInput
      value={props.values.password}
      onChangeText={text => props.setFieldValue('password', text)}
    />

    <Button
      onPress={() => navigation.navigate('Login') }
      title="Login"
    />
  </View>
);

teste.navigationOptions = {
  title: 'Teste',
}

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  handleSubmit: (values) => {
    console.log(values);
  }
})(Form);