import React, { Component } from 'react';
import { View, Image, Alert, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import firebase from 'react-native-firebase';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation-stack'

  


class TelaInicial extends Component {
   
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
        errorMessage: null,
    };

    login = async () => {
        const { email, password } = this.state;

        try {
            const user = await firebase.auth()
              .signInWithEmailAndPassword(email, password);
            
            this.setState({ isAuthenticated: true });  
            console.log(user);
        
        
        } catch (error) {
            console.log(error);
            Alert.alert("Email ou senha inválidos!");
            
        }
        
    }
   
    render() {
        return (
            <View style={styles.container}>
                      

            <Image
              source={require('./assets/Logo.png')}
              // não funcionou???? styles={styles.Logo}
              />
            
            <TextInput
                style={styles.inputBox}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                placeholder='Email'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.inputBox}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={this.login} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            { this.state.isAuthenticated ? <Text>Logado com sucesso</Text> : null }
            
        </View>
        );
    }
}


/*const AppNavigator = createStackNavigator (
    {
        Login:{
            screen: TelaInicial
        },
       
    }
);
*/



//const AppContainer = createAppContainer(AppNavigator);


export default class Login extends Component {  
    render() {
        return <TelaInicial/>
            
                
    }
}
      
      
      const styles = StyleSheet.create({
          container: {
              flex: 1,
              backgroundColor: '#2c3e50',
              alignItems: 'center',
              justifyContent: 'center'
          },
          inputBox: {
             marginTop: 10,
             padding: 10,
             width: 300,
             backgroundColor: '#fff',
             fontSize: 16,
             fontWeight: 'bold',
             borderRadius: 3,
             justifyContent: 'center',
          },
          button: {
              marginTop: 30,
              marginBottom: 20,
              paddingVertical: 5,
              alignItems: 'center',
              backgroundColor: '#3498db',
              borderColor: '#3498db',
              borderWidth: 1,
              borderRadius: 5,
              width: 300
          },
          buttonText: {
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff'
          },
          
      })
      
      
      //export default Login