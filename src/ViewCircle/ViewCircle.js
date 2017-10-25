import React, {Component} from 'react';
import {View, Text, Dimensions , Platform} from 'react-native';
import MapView from 'react-native-maps';

export default class ViewCircle extends Component {
    render() {
        return (
            <View>
                <View>

                </View>
                <View style={{width:Dimensions.get('innerWidth'),height:Dimensions.get('innerHeight')}}>
                    <MapView>
            
                    </MapView>
                </View>
                <View></View>
                <View></View>
            </View>
        )
    }
}