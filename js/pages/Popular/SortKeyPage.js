

import React, {Component} from 'react';
import {Platform,View, StyleSheet, Image, Text, ScrollView,TouchableHighlight} from 'react-native';
import LanguageDao , {FLAG_LANGUAGE} from '../../dao/LanguageDao';
import SortableListView from 'react-native-sortable-listview';
import ArrayUtils from '../../utils/ArrayUtils';
type Props = {};
export default class SortKeyPage extends Component<Props> {


    constructor(props) {
        super(props);

        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.originalCheckedArray = [];
        this.sortResultArray = [];
        this.dataArray = [];
        this.state = {
            checkedArray : [],
        };
    }
    componentDidMount() {
        this.loadData();
        let ageType = [];
        for (let i = 0; i < 99; i++){
            ageType.push(i+"")
        }
        this.ageType = ageType;
    }
    loadData(){
        this.languageDao.fetch().then(result => {

            this.getCheckedItems(result);
        }).catch(error => {
            console.log(error);
        })
    }

    getCheckedItems(dataArray) {
        this.dataArray = dataArray;
        let checkedArray = [];
        for (let i = 0, j = dataArray.length; i < j; i++) {
            let data = dataArray[i];
            if (data.checked)checkedArray.push(data);
        }
        this.setState({
            checkedArray: checkedArray
        })
        this.originalCheckedArray = ArrayUtils.clone(checkedArray);
    }
    getSortResult() {
        this.sortResultArray = ArrayUtils.clone(this.dataArray);
        for (let i = 0, j = this.originalCheckedArray.length; i < j; i++) {
            let item = this.originalCheckedArray[i];
            let index = this.dataArray.indexOf(item);
            this.sortResultArray.splice(index, 1, this.state.checkedArray[i]);
        }
    }
    render() {
        return (

                <SortableListView
                    style={{ flex: 1 }}
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0])
                        this.forceUpdate()
                        this.getSortResult();
                        this.languageDao.save(this.sortResultArray);

                    }}
                    renderRow={row => <RowComponent data={row} {...this.params}/>}
                />
        );
    }
}
 class RowComponent extends Component {


    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={{
                    padding: 25,
                    backgroundColor: '#F8F8F8',
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                }}
                {...this.props.sortHandlers}
            >
                <View style={{marginLeft: 10, flexDirection: 'row'}}>
                    <Image source={require('../../../res/images/ic_sort.png')} resizeMode='stretch' style={{
                        opacity: 1,
                        width: 16,
                        height: 16,
                        marginRight: 10,
                    }}/>
                    <Text>{this.props.data.name}</Text>
                </View>
            </TouchableHighlight>
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
