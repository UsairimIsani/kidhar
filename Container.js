import React, { Component } from "react";
import { Text,View,Platform,Dimensions,TouchableHighlight,Button } from 'react-native';
import { db, auth } from "./src/Firebase";
export default class Container extends Component {
    constructor(props){
        super(props);

    }
    componentWillMount(){
        // if(auth.currentUser){
        //     let uid = auth.currentUser.uid;
        //     let coord
        //     navigator.geolocation.getCurrentPosition((data)=>{
        //         coord = data;
        //         db.ref(uid).set()
        //     },{
        //         timeout:10000,
        //         enableHighAccuracy:false,
        //     })
        // }
    }
    render(){
        return(
        <View>
        <View>
            {this.props.children}
        </View>
        <View>
            <Button title="Sign Out">

            </Button>
        </View>
        </View>
        )
    }
}