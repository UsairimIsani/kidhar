import React, {Component} from 'react';
import {View, TouchableHighlight, Text, TextInput ,Button} from 'react-native';
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
        this
            .props
            .signUp(user)
    }
    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(email) => {
                    this.setState({email})
                }}></TextInput>
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