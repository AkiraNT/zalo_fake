import React, {useEffect,useState} from "react";
import { SafeAreaView } from "react-native";
import { Text, View } from '../Themed';
// const[post,setPost] = useState([]);
//  const[isLoading,setLoading] = useState(true);

//  useEffect(() => {
//     const url = 'http://api.duckduckgo.com/?q=simpsons+characters&format=json';
//     fetch(url).then((res) => res.json())
//     .then((resp) => {
//         setPost(resp.RelatedTopics);
//         setLoading(false);
//         console.log(resp);
//     }).catch((err) => alert(err));
//  },[]);
const FormChat =(props :any) =>{
    return (
        <SafeAreaView>
            <View>
                <Text>Nội dung {props.id}</Text>
            </View>
        </SafeAreaView>
    )
}
export default FormChat;