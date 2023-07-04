import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Page() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
alert("Username: "+username+ "\nPassword: "+password);
};

return (
<View style={styles.container}>
<View style={styles.main}>
<Text style={styles.title}>Welcome, Enter Credentials below</Text>
<TextInput
style={styles.input}
placeholder="Username"
onChangeText={(text) => setUsername(text)}
/>
<TextInput
style={styles.input}
placeholder="Password"
secureTextEntry
onChangeText={(text) => setPassword(text)}
/>
<Button
       style={styles.Button}
       title="LOGIN"
       onPress={handleLogin}
     />
<Text style={styles.subtitle}>Don't have an account? <Text style={styles.signupLink}>Sign Up</Text></Text>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: "center",
padding: 24,
},
main: {
flex: 1,
justifyContent: "center",
maxWidth: 960,
marginHorizontal: "auto",
},
title: {
fontSize: 32,
fontWeight: "bold",
marginBottom: 20,
},
input: {
borderWidth: 1,
padding: 10,
marginBottom: 10,
},
Button: {
marginBottom: 20,
},
subtitle: {
fontSize: 16,
color: "#38434D",
},
signupLink: {
color: "blue",
textDecorationLine: "underline",
},
});