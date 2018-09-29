/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
type Props = {};
export default class PopularCell extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {


    }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.cellContainer}>
                    <Text style={styles.title}>{this.props.item.full_name}</Text>
                    <Text style={styles.content}>{this.props.item.description}</Text>
                    <View  style={styles.bottomView}>
                        <View style={styles.ownerView}>
                            <Image style={styles.image} source={{uri:this.props.item.owner.avatar_url}}/>
                            <Text style={styles.ownerName}>{this.props.item.owner.login}</Text>
                        </View>
                        <Text  style={{fontSize:12,color: '#333333'}} >stars: {this.props.item.stargazers_count}</Text>
                        <Image style={styles.image} source={{uri:this.props.item.owner.avatar_url}}/>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    cellContainer: {
        marginTop:10,
        padding: 10,
        backgroundColor: '#FAFAFA',
    },
    title: {
        fontSize: 15,
        // textAlign: 'center',
        // margin: 10,
    },
    content: {
        fontSize: 12,
        color: '#333333',
        marginBottom: 10,
        marginTop: 10,
    },
    image: {
        width : 20,
        height: 20,
    },
    bottomView: {
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ownerView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ownerName: {
        fontSize: 11,
        color: '#333333',
        marginLeft: 5,
    }
});
