/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {NavigationActions} from 'react-navigation';
// const resetAction = NavigationActions.reset({
//     actions: [
//         NavigationActions.navigate('tabNav'),
//     ],
//     index: 0,
// });

type Props = {};
export default class WelcomePage extends Component<Props> {

    componentDidMount() {
        const {navigation} = this.props;

        this.timer = setInterval(()=>{
            navigation.navigate('tabNav');
            // navigation.dispatch(resetAction);

        },2000);
    }

    componentWillUnmount() {
        this.timer&&clearInterval(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>初始化页面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
