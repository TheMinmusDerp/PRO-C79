import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview'

export default class StarMap extends Component {
  constructor(){
    super()
    this.state={
      latitude:'',
      longitude:''
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <WebView 
          scalesPageToFit={true}
          source={uri: `https://virtualsky.lco.global/embed/index.html?longitude=this.state.longitude&latitude=$this.state.latitude&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`}
          style={marginTop:20,marginBottom:20}/>
        <TextInput
          style={{height:40, borderColor:'gray', borderWidth:1}}
          placeholder="Enter your latitude"
          placeholderTextColor='#ffff#000000'
          onChangeText={(text)=>{
            this.setState({
              latitude:text
            })
          }}/>
        <TextInput
          style={{height:40, borderColor:'gray', borderWidth:1}}
          placeholder="Enter your longitude"
          placeholderTextColor='#ffff#000000'
          onChangeText={(text)=>{
            this.setState({
              longitude:text
            })
          }}/>
      </View>
    )
  }
}