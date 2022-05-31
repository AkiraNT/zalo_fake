import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const DiaryScreen = (props : any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhật ký truy cập</Text>
    </View>
  );
};
export default DiaryScreen;

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
