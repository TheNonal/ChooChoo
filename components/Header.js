import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Header() {
    return (
      <View>
        <Text style={styles.containerForHeader}>IKIGAi</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  containerForHeader: { 
  width: 200,
  fontSize: 30,
  alignSelf: "center",
  textAlign: 'center',
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  fontWeight: 600,
}
})
