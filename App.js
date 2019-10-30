/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { withFormik } from 'formik';

const CadastrarInst = (props) => (
  <View style={styles.container}>
    <TextInput
      value={props.values.NomeInst}
      onChangeText={text => props.setFieldValue('Nome da Instituição', text)}
    />

    <TextInput
      value={props.values.CPF_CNPJ}
      onChangeText={text => props.setFieldValue('CPF/CNPJ', text)}
    />
    <TextInput
      value={props.values.End_Rua}
      onChangeText={text => props.setFieldValue('Rua', text)}
    />

    <TextInput
      value={props.values.End_Num}
      onChangeText={text => props.setFieldValue('N°', text)}
    />

    <Button
      onPress={props.handleSubmit}
      title="Cadastrar"
    />
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ NomeInst: '', CPF_CNPJ: '',  End_Rua: '', End_Num: '' }),

  handleSubmit: (values) => {
    console.log(values);
  }
})(CadastrarIsnt);