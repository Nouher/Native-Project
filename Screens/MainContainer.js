import React from 'react';
import { SafeAreaView,Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import NotificationItem from '../components/NotificationItem';
import { NotificationItemList } from '../data';
const image = require('../assets/image-1.jpg')
import arrow from '../assets/arrow.png'

export default function MainContainer() {
  return (
    <SafeAreaView style={{
      flex:1,
    }}>
        <ImageBackground source={image} style={styles.container} >
        <View style={{
          flex: 1,
          alignItems:'center',
          color:'#fff',
          width:'100%',
          backgroundColor:'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            paddingTop:StatusBar.currentHeight,
            width:'100%',
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            padding:10,
            }}>
            <Text style={styles.text}>Notification</Text>
            <TouchableOpacity>
              <Image source={arrow} style={{width:40,height:40,color:'white'}}/>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            height:60,
            width:'94%',
            backgroundColor:'#191A1B',
            paddingLeft:20,
            borderRadius:14,
            borderColor:'#3F3F3F',
            borderWidth:1,
            }}>
            <Text style={{
              color:'#fff',
              fontSize:20,
              fontWeight:'400',
              }}>My tournament</Text>

            <View style={{
              width:25,
              height: 25,
              marginRight:10,
              borderWidth:2,
              borderColor:'red',
              borderRadius:25,
              paddingHorizontal:2,
            }}>
              <Text style={{
                fontSize:13,
                color:'#fff',
                fontWeight:'400',
                
                
                
              }}>+9</Text>
            </View>
          </View>
          <ScrollView style={{width:'100%'}}>
          {NotificationItemList.map(item=>(

          <NotificationItem
            profile={item.profile}
            username={item.username}
            action={item.action}
            post={item.post}
            new={item.new}
            statutpost={item.statutpost}
            />
            
            ))}
            </ScrollView>
          
        </View>
        </ImageBackground>
    </SafeAreaView>
  );
}


const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    color:'#fff',
    width:'100%',
    
    
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  
  },
})