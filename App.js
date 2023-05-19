import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProductsScreen from './screens/ProductsScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.containerForAll}>
      <ProductsScreen />
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  containerForAll: {
    alignItems: 'center',
  }
})
