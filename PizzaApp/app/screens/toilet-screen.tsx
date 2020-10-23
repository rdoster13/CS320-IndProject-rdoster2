import React, { Component, useState } from "react"
import { observer, isUsingStaticRendering } from "mobx-react-lite"
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, } from "react-native"
import { Button, Header, Screen, Wallpaper } from "../components"
// import { useStores } from "../models/root-store"
import { color } from "../theme"
import { NavigationScreenProps } from "react-navigation"
import CollapsibleList from "react-native-collapsible-list"

export interface ToiletScreenProps extends NavigationScreenProps<{}> {
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 20,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  button: {
    padding: 10,
    backgroundColor: '#c2185b',
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CCC',
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
  },
  headerView: {
		height: 50, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'palegoldenrod',
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    color: 'red'
  }
});

export const ToiletScreen: React.FunctionComponent<ToiletScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  const [buttonText, setButtonText] = useState<string>('Show More');
  const [poop, onChangeText] = useState('');
  const [pee, onChangeText1] = useState('');
  const [diar, onChangeText2] = useState('');
  const [cons, onChangeText3] = useState('');

 return (
   <>
     <StatusBar barStyle="dark-content" />
     <View style={styles.headerView}>
       <Text>Toiletting</Text>
     </View>
     <SafeAreaView style={styles.container}>
       <ScrollView style={{flex: 1, padding: 10}}>
         <CollapsibleList
           numberOfVisibleItems={2}
           wrapperStyle={styles.wrapperCollapsibleList}
           onToggle={collapsed =>
             collapsed
               ? setButtonText('Show Less')
               : setButtonText('Show More')
           }
           buttonContent={
             <View style={styles.button}>
               <Text style={styles.buttonText}>{buttonText}</Text>
             </View>
           }>
           <View style={styles.collapsibleItem}>
             <Text>Feces: Time / Degrees F</Text>
           </View>
           <View style={styles.collapsibleItem}>
           <TextInput
               style={styles.textInput}
               onChangeText={text => onChangeText(text)}
               value={poop}
               />
               <View>
                <Button style = {{backgroundColor: 'palegoldenrod'}}>
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
           </View>
           <View style={styles.collapsibleItem}>
             <Text>Urine: Time / Amount</Text>
           </View>
           <View style={styles.collapsibleItem}>
           <TextInput
               style={styles.textInput}
               onChangeText={text => onChangeText1(text)}
               value={pee}
               />
               <View>
                <Button style = {{backgroundColor: 'palegoldenrod'}}>
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
           </View>
           <View style={styles.collapsibleItem}>
             <Text>Diarhhea: Time / Amount</Text>
           </View>
           <View style={styles.collapsibleItem}>
           <TextInput
               style={styles.textInput}
               onChangeText={text => onChangeText2(text)}
               value={diar}
               />
               <View>
                <Button style = {{backgroundColor: 'palegoldenrod'}}>
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
           </View>
           <View style={styles.collapsibleItem}>
             <Text>Constipation: Time / Amount</Text>
           </View>
           <View style={styles.collapsibleItem}>
           <TextInput
               style={styles.textInput}
               onChangeText={text => onChangeText3(text)}
               value={cons}
               />
               <View>
                <Button style = {{backgroundColor: 'palegoldenrod'}}> 
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
           </View>
           
         </CollapsibleList>
       </ScrollView>
     </SafeAreaView>
   </>
 )
})
