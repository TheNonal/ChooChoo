import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';


import SearchBar1 from '../components/SearchBar1';
import BottomTabs from '../components/BottomTabs';
import Header from '../components/Header';

const ProductsScreen = () => {
    return (
        <View>
            <Header />
            <SearchBar1 />
            <Divider width={1.5} color='black' />
            <BottomTabs />
        </View>
    );
};

export default ProductsScreen;