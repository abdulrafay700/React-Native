import React, {Component} from 'react';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger,} from "react-native-popup-menu";
import {Platform, StyleSheet, Text, View, TextInput,Image,Button,TouchableOpacity,ImageBackground, Picker, Alert } from 'react-native';

// import bgImage from './Src/Images/bgImage.jpg'




export default class SignUP extends Component  { 

    constructor(){
        super();
        this.state={
          PickerSelectedVal : ''
        }
      }
   
      getSelectedPickerValue=()=>{
         Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
       }
 
  render(){

    return(
      <ImageBackground style = {styles.backgroundImage}    source={require('./Src/Images/bgImage.jpg')} >

<View style = {styles.Container}>
        {/* <Text style = {styles.logoText}>Hurray! Become A Partner of Hotpot </Text> */}
        <Text style = {styles.logoText}>Let's Enjoy The Real Taste OF Spices</Text>
        <Text style = {styles.logoText1}> Register Your Account </Text>
        <Image style = {styles.logo}  source = {require('./Src/Images/food.png')}/>

        <TextInput style={styles.txtusrname} placeholder ="UserName" placeholderTextColor='rgba(206,208,203,1)'/>
        <TextInput style={styles.txtusrname} placeholder ="Email Address" placeholderTextColor='rgba(206,208,203,1)'/>
        <TextInput style={styles.txtusrname} placeholder ="Password" placeholderTextColor='rgba(206,208,203,1)' secureTextEntry = {true}/> 
        <TextInput style={styles.txtusrname} placeholder ="Phone Number" placeholderTextColor='rgba(206,208,203,1)'/> 


      {/* <View style={styles.container1}> */}
          <Picker style={styles.txtusrname}
        
        // Value Updater When Click
          selectedValue={this.state.PickerSelectedVal}
          onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
          <Picker.Item  label="Select Your City" value="Select Your City"  />
          <Picker.Item  label="Karachi" value="Karachi"  />
          <Picker.Item label="Lahore" value="Lahore" />
          <Picker.Item label="Islamabad" value="Islamabad" />
          <Picker.Item label="Multan" value="Multan" />
          <Picker.Item label="Peshawar" value="Peshawar" />
          <Picker.Item label="Quetta" value="Quetta" />
          
          </Picker>
      {/* </View> */}
        
        
</View>
  
  {/* <View style={styles.buttLogin}>
  <Button style={styles.buttons}
            // onPress={this._onPressButton}
            title="LOGIN"   />
</View> */}


{/* <View style={styles.buttSign}>
<Button title="SIGNUP" color = "#ff3333" />
</View> */}


 </ImageBackground>

      
    );
  }

}

const styles = StyleSheet.create({
  backgroundImage : {
    flex : 1,
    width: '100%',
    height: '100%',
    opacity: 50,
    
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    margin :30
  },

  Container : {
    marginTop : 40,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  logo :{
    width : 120,
    height:  120,
    
  
  },

  logoText : {
    color : '#ffeed2',
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 5,
    // opacity: 0.5,
  },
  logoText1 : {
    color : "rgba(206,208,203,1)",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  txtusrname:{
    backgroundColor: 'rgba(285,225,225,0.2)',
    padding: 10,
    color: '#ffeed2',
    fontSize: 15,
    height:40,
    width:330,
    fontWeight: "bold",
    marginTop: 5,
    borderColor: "#000000",
    borderWidth: 1,
  },

  // txtname:{

  //   backgroundColor: 'rgba(225,225,225,0.2)',
  //   padding: 10,
  //   color: '#ffeed2',
  //   height:40,
  //   width:330,
  //   fontWeight: "bold",
  //   marginTop: -50,
  // },
  // txtpass:{
  //   height: 40,
  //   backgroundColor: 'rgba(225,225,225,0.2)',
  //   padding: 10,
  //   color : '#ffeed2',
  //   height:40,
  //   width:330,
  //   fontWeight: "bold",
  //   marginTop: 15,
  //   marginBottom : 15,
  // },  
  buttons: {
    height : 5,
    width: 5,
    color: '#ffeed2',
    marginTop : 30,
marginBottom:30,
    paddingTop: 50,
  },

buttSign:{
  width: "50%", margin: 10, backgroundColor: "#ff3333",
},

buttLogin:{
  width: "50%", margin: 10, 
},
 });