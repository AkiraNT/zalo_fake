import { SafeAreaView, ScrollView, StyleSheet, Image, StatusBar, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import HeaderInbox from '../components/headers/HeaderInbox';
import InboxItem from '../components/inbox/ItemInbox';
import axios from 'axios';
import { useEffect, useState  } from 'react';

const InboxScreen = (props: any) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchUsers = async () => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        setList(response.data);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('Data fetching cancelled');
        }else{
         // Handle error
        }
      }
    };
    fetchUsers();
    return () => source.cancel("Data fetching cancelled");
  },[props, useState]);
  return (
    <SafeAreaView style={styles.container}>
      <HeaderInbox />
      <ScrollView>
        <View style={styles.itemList}>
          {
            list.map((item : any, key: any) =>{
              console.log(item);
              return (<InboxItem key={key} id={item.id} name={item.name} about={item.company.catchPhrase} navigation={props.navigation} ></InboxItem>);
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