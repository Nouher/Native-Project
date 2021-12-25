import React from 'react'
import { View,Image,Text } from 'react-native'

const NotificationItem = (props) => {
    return (
        <View style={{
            paddingHorizontal:10,
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'transparent',
            width: '100%',
            paddingVertical:20,
            borderBottomWidth:1,
            borderBottomColor:'#aaa'
          }}>
            <View style={{
                flex: 1,
            }}>
      
              <Image source={{uri:props.profile}} style={{
                width: 50,
                height: 50,
                borderRadius:50,
              }}/>
            </View>
                <View style={{
                  flex:5,
                  flexDirection:'row',
                  justifyContent:'flex-start',
                  alignItems:'center'
                  
                }}>
      
                  <Text style={{
                    paddingHorizontal:5,
                    color:'#fff',
                    fontSize:20,
                    fontWeight:'bold',
                    
                    }}>
                      <Text>
                      {props.username}
                      </Text>
                      <Text>{' '}</Text>
                      <Text style={{
                        color:'#fff',
                        fontSize:12,
                        fontWeight:'400',
                        lineHeight:20
                      }}>{props.action}</Text>
                    </Text>
                       
                      
      
                 
                  </View>
      
                  <View style={{
                      flex: 1,
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
      
                  }}>
                    <Image 
                      source={{uri:props.post}} 
                      style={{
                        width:40,
                        height:40,
                        borderRadius:10,
                      }}/>
                  <View style={{
                    display:props.new ? 'flex' : 'none',
                    backgroundColor:'#73CDFF',
                    height:10,
                    width:10,
                    borderRadius:10,
                    }}/>
                    </View>
      
          </View>
    )
}

export default NotificationItem
