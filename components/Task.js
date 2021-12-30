import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Task = ({text}) => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var taskAddedTime = hours + ':' + minutes + ' ' + ampm;

    return (
        <View style={styles.items}>
        <View style={styles.leftContainer}>
        <Text style={{fontWeight: "470", fontSize: 14 }}>{text}</Text>
        </View>
        <View style={styles.rightContainer}>
            <Text style={{fontWeight: "500", fontSize: 15}}>{taskAddedTime}</Text>
            <TouchableOpacity>
            <View style={styles.circular}></View>
            </TouchableOpacity>
        </View>


        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    items: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        justifyContent: "space-between",
    },
    leftContainer: {},
    rightContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },  
    circular: {
        marginLeft: 10,
        borderColor: "#4b9e93",
        width: 19, 
        height: 19,
        borderWidth: 2,
        borderRadius: 9,
    },
})
