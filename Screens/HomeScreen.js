import { useNavigation } from "@react-navigation/core";
import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, TextInput, Platform, Keyboard } from "react-native";
import Task from "../components/Task";
import { auth } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [task, setTask]  = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var today = mm + ' ' + dd + ' ' + yyyy;


  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login");
  //     })
  //     .catch((error) => alert(error.message));
  // };
  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
           {today}        </Text>
        <View style={styles.todaysTask}>
            {/* <View style={styles.colorBar}></View>
            <View style={styles.tasksContainer}> */}
                    {/* All Tasks */}
              {taskItems.map((item, index) => {
                <Task key={index} title={item}/>
              })}
              <Task title={"Task 1"}/>
              <Task title={"Task 2"}/>
            </View>
          {/* </View> */}
        </View>


                 {/* Write a Task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                  <TextInput style={styles.input} placeholder={"Write a task"} 
                    value={task}
                    onChangeText={text => setTask(text)}
                  />
              <TouchableOpacity
                      onPress={() => handleTask()}
              >
                  <View style={styles.addWrapper} >
                      <Text style={styles.addText} 
                      >+</Text>
                  </View>
              </TouchableOpacity>
            </KeyboardAvoidingView> 

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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
  
   writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },    
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  }, 
  addText: {
    fontSize: 30,
    position: "absolute",
    bottom: 10,
    fontWeight: "600",
  },
  
});
