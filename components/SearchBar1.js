import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Modal, Image, Pressable, } from 'react-native';

const listTab = [
    {
        id: 1,
        category: 'all',
        image: require('../assets/icons/homeForFilter.png')
    },
    {
        id: 2,
        category: 'keyboards',
        image: require('../assets/icons/keyboard.png')
    },
    {
        id: 3,
        category: 'mouses',
        image: require('../assets/icons/mouse.png')
    },
    {
        id: 4,
        category: 'pcs',
        image: require('../assets/icons/pc.png')
    },
    {
        id: 5,
        category: 'screens',
        image: require('../assets/icons/screen.png')
    },
    {
        id: 6,
        category: 'headphones',
        image: require('../assets/icons/headphone.png')
    }
]

const data = [
    {
        id: 1,
        title: 'Наушники Razer Barracuda X белый',
        image: 'https://static.razer.ru/public/TWEqr7KdqkpSx3zp5GfF5Q/barracuda-mercury.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'headphones',
        price: '5599'
    },
    {
        id: 2,
        title: 'Монитор AOC Q27G2S/EU черный',
        image: 'https://c.dns-shop.ru/thumb/st4/fit/760/600/e013e3dab04b116317b709ccfb1f8b9b/q93_fd53fce4d5b526a4411087df5ff1a2e4a5b572f6143fbfe904721d4b45f5057d.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'screens',
        price: '29899'
    },
    {
        id: 3,
        title: 'Мышь ARDOR Gaming черная',
        image: 'https://ae01.alicdn.com/kf/A335f638b430d47ae89486555a90774a6A/Mouse-wireless-Wired-ardor-gaming-Phantom-Pro-ardw-ph3395-bk-Black.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'mouses',
        price: '6999'
    },
    {
        id: 4,
        title: 'ПК ZET GAMING WARD H285',
        image: 'https://overclockers.ru/st/legacy/blog/281867/343978_O.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'pcs',
        price: '86999'
    },
    {
        id: 5,
        title: 'Мышь беспроводная LAMZU Atlantis белый',
        image: 'https://ae04.alicdn.com/kf/A2cb74668fef3436a82a056c1457191d91.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'mouses',
        price: '5999'
    },
    {
        id: 6,
        title: 'Монитор ASUS ROG Strix XG249CM',
        image: 'https://content2.rozetka.com.ua/goods/images/original/298120498.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'screens',
        price: '3199'
    },
    {
        id: 7,
        title: 'Клавиатура Keychron Q1',
        image: 'https://static.tildacdn.com/stor3637-3139-4365-b233-313535323962/54478387.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'keyboards',
        price: '6999'
    },
    {
        id: 8,
        title: 'Клавиатура Nuphy AIR75',
        image: 'https://fragstore.ru/images/detailed/211/Hdfa92f41118447c59a2272695ea5cf6aA.jpeg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'keyboards',
        price: '3199'
    },{
        id: 9,
        title: 'Клавиатура Dark Project KD83A',
        image: 'https://www.clife.ru/upload/ammina.optimizer/jpg-webp/q80/upload/himg_cache/detail-middle/48b/48b8c7eb12ddb3b4dc192dd273d9ab86/dark_project_kd87a_ltd_3.webp',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        category: 'keyboards',
        price: '9199'
    },
]

export default function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visible, setVisible] = useState(false);
    const [category, setStatus] = useState('all')
    const [datalist, setDatalist] = useState(data)

    {/* Хотел реализовать корзину товаров, но я пока хз как сделать его так, чтобы товары попадали на страницу корзины :( */}
    const [cart, setCart] = useState([])


    const filteredProducts = data.filter(data =>
        data.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    {/* Для фильтра по категориям */}

    const setStatusFilter = category => {
        if (category !== 'all') {
            setDatalist([...data.filter(item => item.category === category)])
        } else {
            setDatalist(data)
        }
        setStatus(category)
    }


    const handlePress = data => {
        setSelectedProduct(data);
        setModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.descTitle}>Описание</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <View style={{flexDirection: 'row',}}>
                <Text style={styles.price}>{item.price} ₽</Text>
                {cart.includes(item) ? (
                    <Pressable onPress={() => setCart(cart.filter((x) => x.id !== item.id))}>
                    <Text style={styles.add}>-</Text>
                    </Pressable>
                ) : (
                    <Pressable onPress={() => setCart([...cart, item])}>
                <Text style={styles.add}>+</Text>
                </Pressable>
                )}
            </View>
        </TouchableOpacity>
    );
    const closeModal = () => {
        setSelectedProduct(null);
        setModalVisible(false);
    };

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center'}}>
                <TextInput
                    style={styles.searchBar}
                    onChangeText={(text) => setSearchQuery(text)}
                    value={searchQuery}
                    placeholder="Найти"
                />

                <TouchableOpacity style={{ marginRight: 15, }} onPress={() => { setVisible(true); }}>
                    <Image source={require('../assets/icons/filter.png')} style={{width: 24, height: 24}} />
                </TouchableOpacity>
            </View>
            
            
            {/* Отрисовка товаров при нажатии на определённую категорию */}

            <View style={styles.view} >
                {
                    listTab.map(item => (
                        <TouchableOpacity
                        style={[styles.containerForFilter, category === item.category && styles.containerForFilterActive]}
                        onPress={() => setStatusFilter(item.category)}>
                            <Image key={item.id} source={item.image} style={styles.imageForFilter}/>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <Modal animationType='slide' transparent={true} visible={visible}>
                <View style={styles.forFilter}>
                    <View style={styles.forFilterBack}>
                        <TouchableOpacity style={styles.forFilterSelect}
                        onPress={() => {
                            data.sort((a, b) => a.title > b.title ? 1 : -1);
                            setVisible(false);
                        }}>
                            <Text style={{fontSize: 18, color: '#000'}}>От А до Я</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forFilterSelect}
                        onPress={() => {
                            data.sort((a, b) => a.title > b.title ? -1 : 1);
                            setVisible(false);
                        }}>
                            <Text style={{fontSize: 18, color: '#000'}}>От Я до А</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forFilterSelect}
                        onPress={() => {
                            data.sort((a, b) => a.price - b.price);
                            setVisible(false);
                        }}>
                            <Text style={{fontSize: 18, color: '#000'}}>Сначала недорогие</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forFilterSelect}
                        onPress={() => {
                            data.sort((a, b) => b.price - a.price);
                            setVisible(false);
                        }}>
                            <Text style={{fontSize: 18, color: '#000'}}>Сначала дорогие</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


{/*
            <FlatList
                data={sortProducts()}
                renderItem={renderItem}
                ref={listRef}
                keyExtractor={item => item.id.toString()}
            />
                
*/}



        {/* По сути поиск перестал работать как раз таки потому что я в data поставил datalist? Но я хз как связать фильтр по категориям и поиск */}



            <FlatList
                data={datalist}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />

            {selectedProduct && (
                <Modal animationType="slide" transparent={false} visible={modalVisible}>
                    <View key={selectedProduct.id} style={styles.modalContainer}>
                        <Image style={styles.modalImage} source={{ uri: selectedProduct.image }} />
                        <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                        <Text style={styles.modalDescriptioncTitle}>Описание</Text>
                        <Text style={styles.modalDescription}>{selectedProduct.desc}</Text>
                        <Text style={styles.modalPrice}>{selectedProduct.price} ₽</Text>
                        
                        <View style={styles.sortingOptions}>
                            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                                <Text style={styles.modalButtonText}>Закрыть</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton1} onPress={closeModal}>
                                <Text style={styles.modalButtonText}>Оплатить</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchBar: {
        height: 40,
        width: 250,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        margin: 10,
        borderRadius: 10,
        width: 330,
        backgroundColor: '#ffffff',
        elevation: 3,
    },
    sortingOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    descTitle: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    desc: {
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: 10,
        color: 'grey',
    },
    price: {
        fontSize: 20,
        marginTop: 10,
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'green',
    },
    image: {
        height: 220,
        width: '100%',
        borderRadius: 10,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    modalContainer: {
        flex: 1,
    },
    modalImage: {
        height: 300,
        width: '100%',
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    modalTitle: {
        fontSize: 24,
        marginVertical: 10,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    modalDescriptioncTitle: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    modalDescription: {
        fontSize: 18,
        marginHorizontal: 10,
        marginBottom: 10,
        color: 'grey',
    },
    modalPrice: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: 'green',
        marginHorizontal: 10,
    }, 
    modalButton: {
        marginEnd: 20,
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    modalButton1: {

        backgroundColor: '#4bb34b',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    modalButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    view: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 7,
    },
    containerForFilter: {
        height: 40,
        justifyContent: 'center',
        paddingRight: 3,
        paddingLeft: 5,
    },
    imageForFilter: {
        height: 50,
        width: 50,
    },
    forFilter: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, .5)', 
    },
    forFilterBack: { 
        width: '80%', 
        height: 200, 
        borderRadius: 10, 
        backgroundColor: '#fff', 
    },
    forFilterSelect: { 
        width: '100%', 
        height: 50, 
        borderBottomWidth: 0.5, 
        justifyContent: 'center', 
        paddingLeft: 20, 
    },
    add: {
        fontSize: 25,
        width: 40, 
        height: 40, 
        borderRadius: 10,
        paddingLeft: 13,
        paddingTop: 3,
        marginLeft: 190,
        marginBottom: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'green',
    }
});