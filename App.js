import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import { Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [result,setResult] =useState("")
  const buttonOnClick=(text)=>{
  setResult(result + text)
  if(text == "C"){
    setResult("")
  }else
    if(text=="="){
  try{
    setResult( eval(result))
  }catch{
    setResult("error")
  }
}
}
  return (
    
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.text}>Calculator App</Text>
      <Text style={styles.display}>{result}</Text>
      <View style={styles.view}>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("1")}}>
        <Text style={styles.btn}>1</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("2")}}>
        <Text style={styles.btn}>2</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("3")}}>
        <Text style={styles.btn}>3</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("4")}}>
        <Text style={styles.btn}>4</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("5")}}>
        <Text style={styles.btn}>5</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("6")}}>
        <Text style={styles.btn}>6</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("7")}}>
        <Text style={styles.btn}>7</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("8")}}>
        <Text style={styles.btn}>8</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("9")}}>
        <Text style={styles.btn}>9</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("0")}}>
        <Text style={styles.btn}>0</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("+")}}>
        <Text style={styles.btntool}>+</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("-")}}>
        <Text style={styles.btntool}>-</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("*")}}>
        <Text style={styles.btntool}>x</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("/")}}>
        <Text style={styles.btntool}>/</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("%")}}>
        <Text style={styles.btntool}>%</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("=")}}>
        <Text style={styles.btntool}>=</Text>
        </Pressable>
        <Pressable style={styles.press} onPress={()=>{buttonOnClick("C")}}>
        <Text style={styles.btntool}>C</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center'
  },
  text: {
    color:'black',
    marginLeft:20,
    marginTop:50,
    fontSize:30,
  },
  display:{
    paddingLeft:10,
    borderColor:'brown',
    borderRadius:10,
    marginTop:20,
    width:350,
    height:100,
    backgroundColor:'gray',
    fontSize:30,
    color:'white'
  },
  view:{
    flex:1,
    flexDirection:'row',
    marginTop:10,
    flexWrap:'wrap',
    width:300,
    justifyContent:'space-around',
  },
  press:{
    width:60,
    height:60,
    backgroundColor:'gray',
    marginLeft:10,
    marginTop:20,
  },
  btn:{
    flex:1,
    color:'white',
    textAlign:'center',
    fontSize:50,
    marginTop:-5
  },
  btntool:{
    flex:1,
    color:'black',
    textAlign:'center',
    fontSize:50,
    marginTop:-5
  }
});
