import React, { Component, useState } from "react"
import { observer, isUsingStaticRendering } from "mobx-react-lite"
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, } from "react-native"
import { Button, Header, Screen, Wallpaper } from "../components"
// import { useStores } from "../models/root-store"
import { color } from "../theme"
import { NavigationScreenProps } from "react-navigation"
import CollapsibleList from "react-native-collapsible-list"

export interface SleepScreenProps extends NavigationScreenProps<{}> {
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
		backgroundColor: 'skyblue',
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    color: 'red'
  }
});

export const SleepScreen: React.FunctionComponent<SleepScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  const [buttonText, setButtonText] = useState<string>('Show More');
  const [start, onChangeText] = useState('');
  const [end, onChangeText1] = useState('');
  const [qual, onChangeText2] = useState('');

 return (
   <>
     <StatusBar barStyle="dark-content" />
     <View style={styles.headerView}>
       <Text>Sleeping</Text>
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
             <Text>Start Time</Text>
           </View>
           <View style={styles.collapsibleItem}>
           <TextInput
               style={styles.textInput}
               onChangeText={text => onChangeText(text)}
               value={start}
               />
               <View>
                <Button style = {{backgroundColor: 'skyblue'}}>
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
           </View>
           <View style={styles.collapsibleItem}>
             <Text>End Time</Text>
           </View>
           <View style={styles.collapsibleItem}>
           <TextInput
               style={styles.textInput}
               onChangeText={text => onChangeText1(text)}
               value={end}
               />
               <View>
                <Button style = {{backgroundColor: 'skyblue'}}>
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
           </View>
           <View style={styles.collapsibleItem}>
             <Text>Quality of Sleep</Text>
           </View>
           <View style={styles.collapsibleItem}>
           <TextInput
               style={styles.textInput}
               onChangeText={text => onChangeText2(text)}
               value={qual}
               />
               <View>
                <Button style = {{backgroundColor: 'skyblue'}}>
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
