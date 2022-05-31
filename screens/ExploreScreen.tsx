import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const ExploreScreen = (props : any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Khám phá </Text>
      <Text style={styles.separator} numberOfLines={1}>Logs for your project will appear below. Press Ctrl+C to exit.</Text>
    </View>
  );
};
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    flex:1
  },
});
