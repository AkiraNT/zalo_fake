import { StyleSheet, StatusBar } from "react-native";
import { Dimensions } from "react-native";
var width_w = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    avatar: {
      width:50,
      height:50,
      resizeMode: 'cover',
      borderRadius: 50,
      marginRight:10,
      flexBasis: 50
    },
    itemList: {
      padding: 10,
      marginTop: 10
    },
    item: {
      position: 'relative',
      margin: 10,
      paddingBottom: 2,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(162, 162, 162, 0.9)'
    },
    content: {
      paddingTop: 5,
      flexBasis:'auto',
      flexShrink: 1
    },
    time: {
      position: 'absolute',
      right: 10,
      top: 5,
      fontSize:12,
      fontStyle:'italic'
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    wrapContent:{
      flexDirection:'row'
    },
    shortContent: {
      fontSize: 13,
      fontStyle: 'italic',
      flex: 1
    }
  });
export default styles;  