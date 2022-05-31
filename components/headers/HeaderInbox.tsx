import React from "react";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from '../../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
const searchBox = () =>{
    console.log("saerch");
}
const HeaderInbox = (props: any) => {
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
                    <FontAwesome name="qrcode" size={23} color='#ffffff' style={{ fontWeight: '100' }} />
                </View>
                <View style={{ backgroundColor: 'unset', marginLeft: 10 }}>
                    <FontAwesome name="plus" size={23} color='#ffffff' style={{ fontWeight: '100' }} />
                </View>
            </View>
        </View>
    );
};
export default HeaderInbox;
const styles = StyleSheet.create({
    header: {
        position: 'relative',
        top: 0,
        backgroundColor: 'rgba(162, 162, 162, 0.77)',
        height: 40,
        padding: 10,
        flexDirection:'row'
      },
      iconSearch:{
        backgroundColor:'unset'
      },
      inputSearch:{
        marginLeft:10,
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        color:'#ffffff',
        placeholderTextColor: '#ffffff'
      },
      groupIcon:{
        marginLeft:10,
        flexDirection:'row',
        backgroundColor:'unset'
      },
});