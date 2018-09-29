/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HttpUtils from '../../utils/HttpUtils';
import PopularContentPage from './PopularContentPage';
import ScrollableTableView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
const URL = 'https://api.github.com/search/repositories?q=ios&sort=starts'
const QUERY_STR = '&sort=starts'

type Props = {};
export default class PopularPage extends Component<Props> {
    // static navigationOptions = {
    //     headerTitle : '首页',
    //     backgroundColor : '#2196F3',
    // };



    constructor(props) {
        super(props);
        this.state = {
            dataInfo : '',
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={styles.container}>
                < ScrollableTableView
                    tabBarBackgroundColor = '#2196F3'
                    tabBarActiveTextColor = 'mintcream'
                    tabBarInactiveTextColor = 'white'
                    tabBarUnderlineStyle = {{backgroundColor : '#e7e7e7',height:2}}
                    // renderTabBar = {()=><ScrollableTabBar/>}
                >
                    < PopularContentPage tabLabel = 'ios' />
                    < PopularContentPage tabLabel = 'js' />
                    < PopularContentPage tabLabel = 'java' />
                 </ScrollableTableView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});
