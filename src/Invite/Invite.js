import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Button,
    Alert
} from 'react-native';
import {Form, Item, Picker} from 'native-base'
export default class Invite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            circle: '',
            key: ''
        }
    }
    static navigationOptions = {
        title: 'Invite People'
    };

    invite() {
        let {email, circle} = this.state
        console.log("Email and Circle", {email, circle})
        this
            .props
            .invite(
                {circle, member: 
                    {
                    email
                }
            }
        )
        
        this.props.navigation.navigate('Circle')
    }
    // handleSelected(key){     this.setState({key})  console.log("Key in
    // handle",this.state.key)  console.log("=================",key) }

    render() {
        return (
            <View>
                <View>
                    <Text>
                        Email :
                    </Text>
                    <TextInput
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}></TextInput>
                </View>
                <View>
                    <Text>
                        Circle
                    </Text>
                    <View>
                        <TextInput
                            onChangeText={(circle) => this.setState({circle})}
                            value={this.state.circle}></TextInput>
                    </View>
                    <Button title={"invite To Your Circle!"} onPress= { () => this.invite() }></Button>
                </View>
            </View>
        )
    }
}
// <Form> <Picker mode="dropdown" placeholder="Select One"
// selectedValue={this.state.key}
// onValueChange={(key)=>this.handleSelected(key)}/ >
// {this.props.circle.circle.circles[0]  ?
// (this.props.circle.circle.circles.map((circle, i) => { return (<Item key={i}
// label={circle.circle}  value={circle.key}
// onChange={(value)=>this.handleSelected(value)} />) })) : (<Item key={i}
// label="None Exist" value="None Exit"/>) } </Picker> </Form>