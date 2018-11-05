/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import NavigatorUtil from '../../utils/NavigatorUtil'


type Props = {};
export default class MinePage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    // NavigatorUtil.goToMenuPage(...this.props,'CustomKeyPage');
                    this.props.navigation.navigate('CustomKeyPage',{'isRemoveKey':false});

                }}>
                    <Text style={styles.welcome}>自定义key</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    // NavigatorUtil.goToMenuPage(...this.props,'CustomKeyPage');
                    this.props.navigation.navigate('SortKeyPage');

                }}>
                    <Text style={styles.welcome}>key排序</Text>
                </TouchableOpacity>
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
