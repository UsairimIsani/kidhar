import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
    Button,
    AsyncStorage
} from 'react-native';
import {auth} from '../Firebase'

export default class Circle extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = (props) => {
        return {title: 'Your Circles', headerRight: <Button
            title="Add A Circle"
            onPress={() => props.navigation.navigate('CreateCircle')}/>}
    };
    openCircle(circle) {
        // console.log("circle open",circle)
        this
            .props
            .navigation
            .navigate('ViewCircle', {circle})
    }
    componentWillMount() {
        this
            .props
            .getCircles();
        // console.log('====================================');
        // console.log("This props ", this.props);
        // console.log('====================================');
        // if(this.props.user.currentUser){ }else{
        // this.props.navigation.navigate('Home') }
    }
    SignOut() {
        auth.signOut();
        AsyncStorage.removeItem('currentUser');
        this.props.navigation.navigate('Home')
    }
    componentWillRecieveProps(nextProps,props){
        // console.log("in component Will recieve props")
        return true
    }
    render() {
        return (
            <View style={{justifyContent:'space-between'}}>
                <View></View>

                {this.props.circle.circle.circles
                    ? (this.props.circle.circle.circles.map((circle,i) => {
                        return (
                            <View key={i} style={{padding:10,marginTop:5,marginBottom:5}}>
                                <TouchableHighlight onPress={() => this.openCircle(circle)}>
                                    <Text
                                        style={{
                                        color: 'blue',
                                        fontSize: 20
                                    }}>
                                        {circle.circle}</Text>
                                </TouchableHighlight>
                            </View>
                        )

                    }))
                    : (
                        <View>
                            <Text>
                                You Dont Have Any Circles!
                            </Text>
                        </View>
                    )}

                <View>
                    <Button title="Sign Out" onPress= { () => { this.SignOut() } }/>
                </View>
            </View>
        )
    }
}
