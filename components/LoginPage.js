import React from "react"
import { Stylesheet, View, Text, TextInput, Image, ScrollView, TouchableOpacity } from "react-native"

export default class LoginPage extends React.Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View>
                    <View style={{marginTop: 80, alignItems: "center", justifyContent: "center"}}>
                        <Image source={require('../assets/main_logo.png')}></Image>
                        <Text style={[styles.text, {marginTop: 1, fontSize: 35, fontWeight: "800" }]}>T R A C K E R</Text>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: "#D8D8D8"}}></View>

                    <View style={{ marginTop: 20, marginBottom: 8, alignItems: "center", justifyContent: "center" }}>
                        <TextInput placeholder="Username" style={styles.inputTitle}></TextInput>
                        <TextInput placeholder="Password" secureTextEntry={true} style={styles.inputTitle}></TextInput>
                    </View>
                    
                    <TouchableOpacity style={styles.submitContainer}>
                        <Text styles={[styles.text, {color: "#fff", fontSize: 34, fontWeight: "600" }]}>
                        Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 30
    },
    text: {
      fontFamily: "Roboto",
      color: "#000"
    },
    submitContainer: {
      backgroundColor: "#109E92",
      fontSize: 16,
      borderRadius: 20,
      paddingVertical: 12,
      marginTop: 32,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "rgba(255,22,84, 0.24)",
      shadowOffset: {width: 0, height: 9},
      shadowOpacity: 1,
      shadowRadius: 20
    },
    inputTitle: {
      fontSize: 14,
      color: "#000",
      paddingVertical: 12,
      alignItems: "center",
      alignContent: "center",
  
    }
  });