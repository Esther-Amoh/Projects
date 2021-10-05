import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import { Card, Menu } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Next from "./components/menu/Next";
import Go from "./components/menu/Go";
import Last from "./components/menu/Last";

const json_data = require('./components/taskCategory.json');

 export default function App(){
  
  
   const [data, setData] = useState([])


   const pressHandler = (/*key*/id) => {
     /*setTodos*/setData((/*prevTodos*/prevData) => {
       return prevData.filter(/*todo*/id => /*todo.key != key*/ data.id != id);
       //<NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
     })
   }

   const submitHandler = (/*text*/ name) => {

     if(name.length > 3){
       setData((prevData) => {
         return[
           {name: name, id: Math.random().toString()},
           ...prevData
         ]
       })
     } 
     else {
       Alert.alert('ooops!', 'Category must be 4 characters long', [
         {name: 'Ok', onPress: () => console.log('alert closed')}
       ])
     }
   }

   return(
    
      <TouchableWithoutFeedback onPress= {() => {
        Keyboard.dismiss();
        console.log('keyboard removed')
      }}>
      <View style={styles.container}>
        {/*header*/}
        <Header />
        <View style={styles.content}>
          {/* to do */}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
             //  data={todos}
             //  renderItem={({item}) => (
             //    <TodoItem item={item} pressHandler={pressHandler}/>
             //  )}
              data = {json_data.taskCategroy}
               keyExtractor={(x, i) => i}
               renderItem={({ item }) => (
                <Card style={{ marginTop: 10, padding: 5 }}>
                  <Text style={{ color: 'coral' }}>
                  {`${item.name}`}
                  </Text>

                  <Text style={{ color: 'coral' }}>
                  {`${item.name}`}
                  </Text>
                </Card>
              
              )}
              renderItem = {({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
 
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
      flex: 1,
    },
 
    list: {
      flex: 1,
      marginTop: 20,
    }
 
  })