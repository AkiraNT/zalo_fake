import { SafeAreaView, ScrollView, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import HeaderInbox from '../components/headers/HeaderInbox';
import InboxItem from '../components/inbox/ItemInbox';
const arrayData = require('../assets/data/inbox.json');
const InboxScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderInbox />
      <ScrollView>
        <View style={styles.itemList}>
          {
            arrayData.map((prop: { id: any; name: any; about: any; }, key: any) => {
              return (
                <InboxItem key={key} id={prop.id} name={prop.name} about={prop.about} navigation={props.navigation}/>
              );
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: StatusBar.currentHeight,
  },
  itemList: {
    width: '100%',
    paddingLeft: 10,
    marginTop: 10
  },
});