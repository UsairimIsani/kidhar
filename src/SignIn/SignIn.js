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

    async componentWillMount() {

        try {
            let user = await AsyncStorage.getItem('currentUser')
        } catch (err) {
            console.log('====================================');
            console.log("Error : ", err);
            console.log('====================================');
        }
        // if (user) {     this         .props         .signIn(JSON.parse(user));
        //  this.props.navigation.navigate('Circle') } if (this.props.user.currentUser)
        // {     this         .props         .navigation         .navigate('Circle') }

    }
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
                console.log('====================================');
                console.log("Sign In ", res);
                console.log('====================================');
                // navigator.geolocation.requestAuthorization();
                navigator
                    .geolocation
                    .getCurrentPosition((position) => {
                        console.log('====================================');
                        console.log("Position  ", position);
                        console.log('====================================');

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
                            })

                    }, (err) => {
                        console.log('====================================');
                        console.log("Error :", err.message);
                        console.log('====================================');
                    }, {
                        enableHighAccuracy: false,
                        timeout: 10000
                    })
            })
            .catch((err) => {
                Alert.alert("Error Signinig In ", err.message)
            })

    }
    SignOut() {
        auth.signOut()
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
                {< Button title = "Sign Out" onPress = {
                    () => {
                        this.SignOut()
                    }
                } />}
            </View>
        )
    }
}