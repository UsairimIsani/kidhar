import React, { Component } from 'react';
import { View, Text, TextInput ,Button} from 'react-native';
export default class CreateCircle  extends Component {
    constructor(props){
        super(props)
        this.state = {
            circle:'',
            type:''
        }
    }
    static navigationOptions = {
        title: 'Create A Circle!',
      };
      createCircle(){
          let circle = {
              circle : this.state.circle,
              type:this.state.type
          }
          this.props.createCircle(circle);
          this.props.navigation.navigate('ViewCircle')
      }
    render(){
        return (
            <View>
                <Text style={{fontSize:20}}>
                    Circle
                </Text>
                <TextInput onChangeText={(circle)=>this.setState({circle})}>

                </TextInput> 
                <Text style={{fontSize:20}}>
                  Type
                </Text>  
                <TextInput onChangeText={(type)=>this.setState({type})} >

                </TextInput>   
                <Button title ="Create Circle" style = {{padding:5}} onPress={()=>this.createCircle()}>
                </Button>
            </View>
        )
    }
}