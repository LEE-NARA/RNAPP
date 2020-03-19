import React, { Component } from 'react'
import {View, Text, StyleSheet, LayoutAnimation, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component{
    state={
        email:"",
        displayName:""
    };

    componentDidMount(){
        const{email, displayName}=firebase.auth().currentUser;
        this.setState({email, displayName});
    }
    
    signOutUser=()=>{
        firebase.auth().signOut();
    };

    render(){
        LayoutAnimation.easeInEaseOut();

        return(
            <View style={styles.container}>
                <Text>안녕하세요! {this.state.email}님</Text>

                <TouchableOpacity 
                        style={{marginTop:32}} 
                        onPress={this.signOutUser}>
                    <Text>로그아웃</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});
