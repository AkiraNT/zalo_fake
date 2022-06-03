import { SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';
import HeaderUser from '../components/headers/HeaderUser';
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
const UserScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderUser></HeaderUser>
      <ScrollView>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={require('../assets/images/avt.jpg')}></Image>
          <View style={styles.content}>
            <Text style={styles.title}>Nguyễn Trường</Text>
            <View style={styles.wrapContent}>
              <Text style={styles.shortContent} numberOfLines={1}>Xem trang cá nhân</Text>
            </View>
          </View>
          <Text style={styles.time}>
            <FontAwesome name="user-o" size={23} color='#ffffff' style={{ fontWeight: '100' }} />
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};
export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 50,
    marginRight: 10,
    flexBasis: 50
  },
  profile: {
    position: 'relative',
    margin: 10,
    paddingBottom: 2,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(162, 162, 162, 0.9)'
  },
  content: {
    paddingTop: 5,
    flexBasis: 'auto',
    flexShrink: 1
  },
  time: {
    position: 'absolute',
    right: 10,
    top: 5,
    fontSize: 12,
    fontStyle: 'italic'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  wrapContent: {
    flexDirection: 'row'
  },
  shortContent: {
    fontSize: 13,
    fontStyle: 'italic',
    flex: 1
  }
});
