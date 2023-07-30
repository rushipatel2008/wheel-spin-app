import React from "react";
import {Text,View,TextInput,TouchableOpacity,ImageBackground,StyleSheet} from 'react-native'


export default class App extends React.Component{
  constructor()
  {
    super()

  }
  render()
  {
    return(
      <View style={styles.container}>
        <View style={styles.tittleBar}>
        <Text style={styles.text}>
          Wheel Spin App
        </Text>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
container:{
  flex:1,


},
text:{
  color:'red',
  fontSize:30,
  


},
tittleBar:{
  flex:0.15,
  justifyContent:'center',
  alignItems:'center'

}
})