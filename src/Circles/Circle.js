import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
    Button
} from 'react-native';

export default class Circle extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = (props) => {
        return {title: 'Your Circles', headerRight: <Button
            title="Add A Circle"
            onPress={() => props.navigation.navigate('CreateCircle')}/>
            }
    };
    openCircle(circle) {
        this
            .props
            .navigation
            .navigate('ViewCircle', circle)
    }
    componentWillMount() {
        this.props.getCircles();
        console.log('====================================');
        console.log("This props ",this.props);
        console.log('====================================');
        // if(this.props.user.currentUser){
            
        // }else{
        //     this.props.navigation.navigate('Home')
        // }

    }
    render() {
        return (
            <View>
                <View></View>

                {this.props.circle.circles
                    ? (this.props.circle.circles.map((circle) => {
                        return (
                            <View>
                                <TouchableHighlight onPress={(circle) => this.openCircle(circle)}>
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

                <View></View>
            </View>
        )
    }
}
