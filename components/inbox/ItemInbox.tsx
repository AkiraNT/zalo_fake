import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Text, View } from '../Themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatBox from "./Form";
import styles from './style';
const InboxItem = (props:any) => {
    return (
        <TouchableOpacity key={props.id} onPress={() => {
            props.navigation.navigate('Chatbox', {id: props.id, title: props.name});
          }}>
            <View style={styles.item}>
                <Image style={styles.avatar} source={require('../../assets/images/avt.jpg')}></Image>
                <View style={styles.content}>
                    <Text style={styles.title}>{props.name}</Text>
                    <View style={styles.wrapContent}>
                        <Text style={styles.shortContent} numberOfLines={1}>{props.about}</Text>
                    </View>
                </View>
                <Text style={styles.time}>1 giờ</Text>
            </View>
        </TouchableOpacity>
    );
};
export default InboxItem;