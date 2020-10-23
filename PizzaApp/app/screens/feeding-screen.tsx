import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TextInput, } from "react-native"
import { Button } from "../components"
import { NavigationScreenProps } from "react-navigation"
import CollapsibleList from "react-native-collapsible-list";

export interface FeedingScreenProps extends NavigationScreenProps<{}> {
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
		backgroundColor: 'orange',
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    color: 'red'
  }
});


export const FeedingScreen: React.FunctionComponent<FeedingScreenProps> = observer(() => {
  // const { someStore } = useStores()
   // const { someStore } = useStores()
   const [buttonText, setButtonText] = useState<string>('Show More');
   const [foodType, onChangeText] = useState('');
   const [time, onChangeText1] = useState('');
   const [amount, onChangeText2] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerView}>
        <Text>Feeding</Text>
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
              <Text>Type Food Eaten</Text>
            </View>
            <View style={styles.collapsibleItem}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={foodType}
                />
                <View>
                <Button style = {{backgroundColor: 'orange'}}>
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
               
            </View>
            <View style={styles.collapsibleItem}>
              <Text>Time Eaten</Text>
            </View>
            <View style={styles.collapsibleItem}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText1(text)}
                value={time}
                />
                <View>
                <Button style = {{backgroundColor: 'orange'}}>
                  <View>
                    <Text>
                      Save
                    </Text>
                  </View>
                </Button>
                </View>
            </View>
            <View style={styles.collapsibleItem}>
              <Text>Amount Eaten (oz / mL)</Text>
            </View>
            <View style={styles.collapsibleItem}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText2(text)}
                value={amount}
                />
                <View>
                <Button style = {{backgroundColor: 'orange'}}>
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
