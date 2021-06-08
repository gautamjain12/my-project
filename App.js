import * as React from 'react';
import { Text, View,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import{Header} from 'react-native-elements';
import AssetExample from './components/AssetExample'
export default class App extends React.Component{
   constructor(){
    super();
    this.state={
      text:"",
      displayText:''
    }
  }
 getWord=(word)=>{
   var searchKeyWord=word.toLowerCase()
   var url="  https://rupinwhitehatjr.github.io/dictionary/"+searchKeyWord+".json"
   return fetch (url)
   .then((data)=>{
     if(data.status===200){
       return data.json()
     }
     else{
       return null
     }
   })
   .then((response)=>{
     var responseObject=response
     if(responseObject){
       var wordData=responseObject.definitions[0]
       var definition=wordData.description
       var lexicalCategory=wordData.wordtype

       this.setState({
         "word":this.state.text,
         "definition":definition,
         "lexicalCategory":lexicalCategory
       })
     }
     else{
       this.setState({
         "word":this.state.text,
         "definition":"Not Found"
       })
     }
    })
 }
  
  
  render(){
    return(
<View>
<AssetExample/>
 <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchedPressed: false,
              word: 'Loading....',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ isSearchedPressed: true });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.text1}> Search </Text>
        </TouchableOpacity>
<View>
<TouchableOpacity>
<Text> Word:{""}</Text>
        <Text style={styles.text}>{this.state.word}</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
        <Text>
        Definition:{""}
        </Text>
       <Text style={styles.text}>{this.state.definition}</Text>

        </TouchableOpacity>
        </View>

        <View>
        <Text>
        Type:{""}
        </Text>
        <Text>{this.state.lexicalCategory}</Text>
        </View>


        </View>
    );
  }
}
const styles=StyleSheet.create({
inputBox:{
    marginTop:200,
    width:'80%',
    alignSelf:"center",
    height:40,
    textAlign:"center",
    borderWidth:4,
    outline:'red',

},

});








