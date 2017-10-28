import React, {Component} from 'react';
import {View, Text, Dimensions, PlatformBut, Button} from 'react-native';
import {db, auth} from '../Firebase'
import MapView from 'react-native-maps';
Dimensions.get('window')
export default class ViewCircle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            markers: []
        }

    }
    componentWillReceiveProps() {
        return true
    }
    componentDidMount() {
        navigator
            .geolocation
            .getCurrentPosition(position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }
                })
            }, (err) => console.log("Error :", err), {
                enableHighAccuracy: false,
                timeout: 10000
            })
        if (this.props.navigation.state.params) {

            // console.log("Value of props in View
            // Circle",this.props.navigation.state.params.circle)
            let markers = this
                .state
                .markers
                .slice();
            db
                .ref(`users/${auth.currentUser.uid}/circles/${this.props.navigation.state.params.circle.key}/members`)
                .on('value', (snap) => {
                    // console.log("Value in View Circle",snap.val())
                    let markers = [];
                    for (let member in snap.val()) {
                        let memberObj = {
                            key: snap.val()[member].key,
                            user: snap.val()[member].user
                        }
                        markers.push(memberObj)
                    }
                    // console.log("Markers",markers)
                    this.setState({markers})
                })

        }

    }
    gotoCircles() {
        this
            .props
            .navigation
            .navigate('Circle')
    }
    invite() {
        this
            .props
            .navigation
            .navigate('Invite')
    }
    render() {

        return (
            <View >
                <View >
                    <View>
                        <Button onPress= {() => {this.gotoCircles()}} title="All Circles"></Button>
                        <Button onPress= {() => {this.invite()}} title="Invite"></Button>
                        <Text style={{color:'purple',fontSize:20,textAlign:'center',}}>{this.state.markers.length} Members On The Map</Text>
                    </View>
                </View>
                <MapView
                    initialRegion={this.state.region}
                    onRegionChange={(region) => this.setState({region})}
                    showsUserLocation={true}
                    style={{
                    width: Dimensions
                        .get('screen')
                        .width,
                    height: Dimensions
                        .get('screen')
                        .height
                }}>
                    {this.state.markers[0]
                        ? (this.state.markers.map((marker, i) => {
                            let latlng = {
                                latitude: marker.user.coords.latitude,
                                longitude: marker.user.coords.longitude
                            };
                            let title = marker.user.email.email
                            return (
                                <MapView.Marker key={i} coordinate={latlng} title={title}></MapView.Marker>
                            )
                        }))
                        : (null)}

                </MapView>
            </View>

        )
    }
}
