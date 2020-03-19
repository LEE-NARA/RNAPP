import React from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, StatusBar} from 'react-native'
import * as firebase from 'firebase'


export default class LoginScreen extends React.Component{
    
    state={
        email:"",
        password:"",
        errorMessage:null
    };

    handleLogin=()=>{
        const {email, password}=this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error=>this.setState({errorMessage:error.message}))
    }


    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Text style={styles.greeting}>{'Hello again.\nWelcome back.'}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                
                <View style={styles.form}>
                    <View>
                        <TextInput 
                            style={styles.input} 
                            placeholder={'Email id'}
                            autoCapitalize="none" 
                            onChangeText={email=>this.setState({email})}
                            value={this.state.email}>
                        </TextInput>
                    </View>

                    <View style={{marginTop:32}}>
                        <TextInput 
                            style={styles.input} 
                            placeholder={'Password'}
                            secureTextEntry autoCapitalize="none"
                            onChangeText={password=>this.setState({password})}
                            value={this.state.password}>
                        </TextInput>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:"#fff", fontWeight:"500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf:"center",marginTop:25}}
                    onPress={()=>this.props.navigation.navigate("Register")}>
                    <Text style={{color:"#414959", fontSize:13}}>
                        New to SocialApp? <Text style={{color:"#E9446A", fontWeight:"500"}}>Sign Up</Text>    
                    </Text> 
                </TouchableOpacity>
                
                <Text style={{textAlign:"center",margin:25}}>or</Text>
            
                <Button 
                    title="Google"
                    onPress={()=>alert('구글 로그인')}>
                </Button>
                <Button 
                    title="NAVER"
                    onPress={()=>alert('네이버 로그인')}>
                </Button>
                <Button 
                    title="KAKAO"
                    onPress={()=>alert('카카오 로그인')}>
                </Button>

            </View>
        )
    }
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    greeting:{
        marginTop:22,
        fontSize:18,
        fontWeight:"400",
        textAlign:"center"
    },
    error:{
        color:"#E9446A",
        fontSize:13,
        fontWeight:"600",
        textAlign:"center"
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    form:{
        marginBottom:48,
        marginHorizontal:30
    },
    inputTitle:{
        color:"#8A8F9E",
        fontSize:10,
        textTransform:"uppercase"
    },
    input:{
        borderBottomColor:"#8A8F9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"    
    },
    button:{
        marginHorizontal:30,
        backgroundColor:"#E9446A",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center"
    },
/*    wrapper:{
        display:'flex',
        padding:15,
        borderRadius:40,
        borderWidth:1,
        backgroundColor:'white'
    },
    buttonText:{
        fontSize:17,
        width:'100%',
        textAlign:'center'
    }*/
});