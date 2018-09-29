/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  RepositoryDao from '../../dao/RepositoryDao'


type Props = {};
export default class FavoritePage extends Component<Props> {
    constructor(props) {
      super(props);
      this.state = {
          data : '',
      };
    }
    componentDidMount() {
        RepositoryDao().fetchNetRepository('')
            .then(result => {
            this.setState({
                date : result,
            });
        })
        //网路请求失败
            .catch(e=> {
                reject(e);
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{this.state.data}</Text>
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
