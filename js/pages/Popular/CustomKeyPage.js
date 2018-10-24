

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, ScrollView} from 'react-native';
import LanguageDao , {FLAG_LANGUAGE} from '../../dao/LanguageDao';
import CheckBox from 'react-native-check-box';
type Props = {};
export default class CustomKeyPage extends Component<Props> {


    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state = {
            dataArray : [],
        };
    }
    componentDidMount() {
        this.languageDao.fetch().then(result => {
            this.setState({
                dataArray : result,
                isChecked : false,
            });
        })
    }
    renderTagsView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0)return;
        let length = this.state.dataArray.length;
        let views = [];
        for (let i = 0,l = length - 2 ; i < l; i += 2){
           views.push(
               <View key={i} >
                   <View style={styles.cell}>
                       {this.renderCheckBox(this.state.dataArray[i])}
                       {this.renderCheckBox(this.state.dataArray[i+1])}
                   </View>
                   <View style={styles.line}></View>
               </View>
           )
        }
        views.push(
            <View key={length - 1} >
                <View style={styles.cell}>
                    {length % 2 === 0 ? this.renderCheckBox(this.state.dataArray[length-2]) : null}
                    {this.renderCheckBox(this.state.dataArray[length-1])}
                </View>
                <View style={styles.line}></View>
            </View>
        )

        return views;
    }
    renderCheckBox(data) {
        var leftText = data.name;
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                }}
                leftText={leftText}
                isChecked={this.state.isChecked}
                checkedImage={<Image source={require('../../../res/images/ic_check_box.png')} />}
                unCheckedImage={<Image source={require('../../../res/images/ic_check_box_outline_blank.png')} />}
            />);
    }
    render() {
        return (
            <ScrollView>


                    {this.renderTagsView()}


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    cell:{
        flexDirection:'row',
    },

    line:{
        height:0.3,
        color:'black',
    }

});
