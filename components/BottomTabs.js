import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function BottomTabs() {
  return (
    <View style={styles.viewForBottom}>
      <TouchableOpacity style={styles.containerForBottom}>
        <Image key={0} source={require('../assets/icons/home.png')} style={styles.imageForBottom}/>
        <Text style={styles.textForBottom}>Главная</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerForBottom}>
          <Image key={1} source={require('../assets/icons/carts.png')} style={styles.imageForBottom}/>
          <Text style={styles.textForBottom}>Корзина</Text>
      </TouchableOpacity>

      {/*
      <TouchableOpacity style={styles.container}>
          <Image key={2} source={require('../assets/icons/orders.png')} style={styles.image}/>
          <Text style={styles.text}>Покупки</Text>
      </TouchableOpacity>
      */}
      
    </View>
    
  );
}


const styles = StyleSheet.create({
  viewForBottom: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  containerForBottom: {
    height: 70,
    justifyContent: 'center',
    marginRight: 15,
    marginLeft: 15,
  },
  imageForBottom: {
    height: 30,
    resizeMode: 'contain',
  }, 
  textForBottom: {
    alignSelf: 'center',
  }
})