import React from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native'
import Task from './Task';

const Today = ({taskItems}) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var today = mm + ' ' + dd + ' ' + yyyy;

    
    return (
        <View style={styles.taskWrapper}>
        <View style={styles.sectionTitle}>
                <Text style={{fontWeight: "500"}}> {today}</Text>
            </View>
            <View style={styles.todaysTask}>
                <View style={styles.colorBar}></View>
                <View style={styles.tasksContainer}>
                    {/* All Tasks */}
                    {taskItems.map((item, index) => {
                        <Task key={index} text={item}/>
                    })}
                </View>
            </View>
        </View>
    )
}

export default Today

const styles = StyleSheet.create({
    taskWrapper:{
        paddingTop: 10,
        paddingHorizontal: 10,
  },
  sectionTitle: {
    fontWeight: '800',
  },
  todaysTask: {
      flex: 1,
      backgroundColor: "#fff",
      marginVertical: 10,
      shadowColor:"gray",
      shadowRadius: 3,
      borderRadius: 3,
      alignItems: 'center',
      flexDirection: "row",
  },
  colorBar: {
      backgroundColor: "red",
      width: 4,
      height: "50%",
  },
  tasksContainer: {
      flex: 1,
      marginLeft: 20,
      marginHorizontal: 20,
      marginVertical: 15,
  },
  items: {},
 
})
