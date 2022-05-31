import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import ChatDetail from '../components/inbox/Form';
const ChatBoxScreen = (props: any) => {
    React.useEffect(() => {
        props.navigation.setOptions({
            headerSearchBarOptions: {
                // search bar options
            }
        });
    }, [props.navigation]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    );
};
export default ChatBoxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
function componentDidMount() {
    throw new Error('Function not implemented.');
}

