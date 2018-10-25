

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, ScrollView} from 'react-native';
import LanguageDao , {FLAG_LANGUAGE} from '../../dao/LanguageDao';
import CheckBox from 'react-native-check-box';
import ArrayUtils from '../../utils/ArrayUtils';
type Props = {};
export default class CustomKeyPage extends Component<Props> {


    constructor(props) {
        super(props);
        this.params=this.props.navigation.state.params;

        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.isRemoveKey=this.params.isRemoveKey?true:false;
        this.changeValues = [];
        this.state = {
            dataArray : [],
        };
    }
    componentDidMount() {
        this.loadData();
    }
    loadData(){
        this.languageDao.fetch().then(result => {
            this.setState({
                dataArray : result,
            });
        }).catch(error => {
            console.log(error);
        })
    }
    onClick(data) {
        if(!this.isRemoveKey)data.checked = !data.checked;
        ArrayUtils.updateArray(this.changeValues, data);
        this.languageDao.save(this.state.dataArray);
        this.setState({
            dataArray : this.state.dataArray,
        });
        // alert('w');
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
        let leftText = data.name;
        let isChecked = this.isRemoveKey ? false : data.checked;

        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>this.onClick(data)
                }
                leftText={leftText}
                isChecked={isChecked}
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
        backgroundColor:'#222222',
    }

});
