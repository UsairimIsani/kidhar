import React, {Component} from 'react';
import {View, TouchableHighlight, Text, TextInput ,Button , Alert} from 'react-native';
import { auth ,db } from '../Firebase'
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

    }
    static navigationOptions = {
        title: 'Sign Up',
      };
    componentWillMount() {
        // if (this.props.user.currentUser) {
        //     this
        //         .props
        //         .navigation
        //         .navigate('Circle')
        // }

    }
    signUp() {
        let {email, password} = this.state,
        user = {
            email,
            password
        }
    // this     .props     .signIn(user)
    auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            // console.log('====================================');
            // console.log("Sign In ", res);
            // console.log('====================================');
            // navigator.geolocation.requestAuthorization();
            navigator
                .geolocation
                .getCurrentPosition((position) => {
                    // console.log('====================================');
                    // console.log("Position  ", position);
                    // console.log('====================================');

                    db
                        .ref(`users/${auth.currentUser.uid}`)
                        .update({coords: position.coords,email:{email:user.email}})
                        .then((res) => {
                            this
                                .props
                                .navigation
                                .navigate('Circle')
                                this.setState({email:'',password:''})
                        })

                }, (err) => {
                    // console.log('====================================');
                    // console.log("Error :", err.message);
                    // console.log('====================================');
                }, {
                    enableHighAccuracy: false,
                    timeout: 10000
                })
        })
        .catch((err) => {
            Alert.alert("Error Signinig In ", err.message)
        })
    }
    render() {
        return (
            <View>
                <Text
                    style={{
                    fontSize: 20,
                    color: 'blue'
                }}>
                    Email :
                </Text>
                <TextInput
                    onChangeText={(email) => {
                    this.setState({email})
                }}></TextInput>
                <Text
                    style={{
                    fontSize: 20,
                    color: 'blue'
                }}>
                    Password :
                </Text>
                <TextInput
                    onChangeText={(password) => {
                    this.setState({password})
                }}></TextInput>
                <Button title='Sign Up' onPress={() => this.signUp()}></Button>

                <View
                    style={{
                    padding: 5,
                    margin: 5
                }}>
                    <Text style={{
                        fontSize: 20
                    }}>
                        Already Have An Account

                    </Text>
                    <TouchableHighlight
                        onPress={()=> this
                        .props
                        .navigation
                        .navigate('SignUp')}>
                        <Text
                            style={{
                            fontWeight: 'bold'
                        }}>
                            Sign In!
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}