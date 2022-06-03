import React from "react";
import { TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
const searchBox = () =>{
    console.log("saerch");
}
const HeaderUser = (props: any) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={searchBox}>
            <View style={styles.iconSearch}>
                <FontAwesome name="search" size={23} color='#ffffff' style={{ fontWeight: '100' }} />
            </View>
            </TouchableOpacity>
            
            <TextInput style={styles.inputSearch} placeholder={'Nhập từ khóa...'} />
            <View style={styles.groupIcon}>
                <View style={{ backgroundColor: 'unset' }}>
                    <Image source={require('../../assets/icons/settings.png')}></Image>
                </View>
            </View>
        </View>
    );
};
export default HeaderUser;
const styles = StyleSheet.create({
    header: {
        position: 'relative',
        top: 0,
        backgroundColor: 'rgba(162, 162, 162, 0.77)',
        height: 40,
        padding: 10,
        flexDirection:'row',
      },
      iconSearch:{
        backgroundColor:'unset',
        flex:1
      },
      inputSearch:{
        marginLeft:10,
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        color:'#ffffff',
        placeholderTextColor: '#ffffff',
        flex: 13
      },
      groupIcon:{
        marginLeft:10,
        flexDirection:'row',
        backgroundColor:'unset',
        flex:2,
        justifyContent:'flex-end'
      },
});