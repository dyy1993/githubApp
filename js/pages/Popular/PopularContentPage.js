/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import HttpUtils from '../../utils/HttpUtils';
import PopularCell from './PopularCell';
const URL = 'https://api.github.com/search/repositories?q='
const QUERY_STR = '&sort=starts'
type Props = {};
const DATAS = [{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'},{key: 'a'}, {key: 'b'}];
export default class PopularContentPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            dataArray : [],
        };
    }
    
    componentDidMount() {
        var url = URL + this.props.tabLabel + QUERY_STR;
        HttpUtils.get(url)
            .then(result=>{
                this.setState({
                    dataArray : result.items,
                });
            })
            .catch(error=>{
                console.log(error);
            });

    }

    _renderItem = ({item}) => (
        <PopularCell item={item}/>

    );
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    // data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'},]}
                    // renderItem={({item}) => <Text>{item.key}</Text>}
                />


            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },

});
