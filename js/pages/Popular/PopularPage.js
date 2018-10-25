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
import LanguageDao, {FLAG_LANGUAGE} from '../../dao/LanguageDao';
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
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state = {
            languages : [],
        };
    }
    componentDidMount() {
        this.loadData()
    }
    loadData(){
        this.languageDao.fetch().then(result => {
            this.setState({
                languages : result,
            });
        }).catch(error => {
            console.log(error);
        })
    }
    render() {
        let pageViews = this.state.languages.length > 0 ?  < ScrollableTableView
            tabBarBackgroundColor = '#2196F3'
            tabBarActiveTextColor = 'mintcream'
            tabBarInactiveTextColor = 'white'
            tabBarUnderlineStyle = {{backgroundColor : '#e7e7e7',height:2}}
            // renderTabBar = {()=><ScrollableTabBar/>}
        >
            {/*< PopularContentPage tabLabel = 'ios' />*/}
            {/*< PopularContentPage tabLabel = 'js' />*/}
            {/*< PopularContentPage tabLabel = 'java' />*/}
            {this.state.languages.map((result, i, array) => {
                let lan = array[i];
                return lan.checked ? < PopularContentPage key={i} tabLabel={lan.name} > java</PopularContentPage> : null;

            })}

        </ScrollableTableView> : null;
        return (

            <View style={styles.container}>
                {pageViews}

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
