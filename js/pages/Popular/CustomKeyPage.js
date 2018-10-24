

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LanguageDao , {FLAG_LANGUAGE} from '../../dao/LanguageDao'
type Props = {};
export default class CustomKeyPage extends Component<Props> {


    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state = {
            resultStr : ''
        };
    }
    componentDidMount() {
        this.languageDao.fetch().then(result => {
            this.setState({
                resultStr : JSON.stringify(result)
            });
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    自定义标签
                    {this.state.resultStr}
                </Text>

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
