import React, {Component} from 'react';
import {Text, TextInput, View, TouchableHighlight, Button,Alert} from 'react-native';
export default class Invite extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            circle:''
        }
    }
    static navigationOptions = {
        title: 'Invite People',
      };
    
    
    invite(){
        
        // let circle = this.props.circle.circles.find((circle)=>{
        //     return circle.circle == this.state.circle
        // })
        // let user = this.props.user.users.find((user)=>{
        //     return user.email == this.state.email
        // // })
        // if(user && circle){
        //     console.log("User : ",user);
        //     console.log("Circle : ",circle);
        let {email,circle} = this.state
            this.props.invite({circle,member:{email}})
        // }else{
        //     Alert.alert("No User OR Circle Found!");
        //     console.log('====================================');
        //     console.log("User : ",user);
        //     console.log("Circle : ",circle);
        //     console.log('====================================');
        // }

     
    }
    
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Email :
                    </Text>
                    <TextInput>

                    </TextInput>
                </View>
                <View>
                    <Text>
                        Circle

                    </Text>
                    <TextInput>
                    </TextInput>
                <Button title={"invite To Your Circle!"} onPress={()=>this.invite()}>

                </Button>
                </View>
            </View>
        )
    }
}