import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Button,
    AsyncStorage,
    Alert
} from 'react-native';
import {Input, Label} from "native-base";
import {auth, db} from '../Firebase'
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    static navigationOptions = {
        title: 'Sign In'
    };

    componentWillMount() {}
    signIn() {
        let {email, password} = this.state,
            user = {
                email,
                password
            }
        // this     .props     .signIn(user)
        auth
            .signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                navigator
                    .geolocation
                    .watchPosition((position) => {
                        db
                            .ref(`users/${auth.currentUser.uid}`)
                            .update({coords: position.coords})
                            .then((res) => {})

                    }, (err) => {}, {useSignificantChanges: true})
                navigator
                    .geolocation
                    .getCurrentPosition((position) => {
                        db
                            .ref(`users/${auth.currentUser.uid}`)
                            .update({coords: position.coords})
                            .then((res) => {
                                this
                                    .props
                                    .signIn(res)
                                this
                                    .props
                                    .navigation
                                    .navigate('Circle')
                                this.setState({email: '', password: ''})
                            })
                    }, (err) => {}, {
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
            <View style={{
                justifyContent: 'space-around'
            }}>
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
                <Button title='Sign In' onPress={() => this.signIn()}></Button>

                <View
                    style={{
                    padding: 5,
                    margin: 5
                }}>
                    <Text style={{
                        fontSize: 20
                    }}>
                        Don't Have An Account

                    </Text>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text
                            style={{
                            fontWeight: 'bold'
                        }}>
                            Create One!
                        </Text>
                    </TouchableHighlight>
                </View>

            </View>
        )
    }
}