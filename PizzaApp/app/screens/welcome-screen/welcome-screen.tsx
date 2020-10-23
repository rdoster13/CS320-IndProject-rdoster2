import * as React from "react"
import { View, 
		Image, 
		ViewStyle, 
		TextStyle, 
		ImageStyle, 
		SafeAreaView, 
		TouchableNativeFeedback, 
		StyleSheet,
		StatusBar } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, 
		Header, 
		Screen, 
		Text, 
		Wallpaper } from "../../components"
import { color, spacing } from "../../theme"

//create a style sheet that allows for more code readbility
const styles = StyleSheet.create({
	healthSect: {
		flex: 3, 
		height: 50, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'palegreen',
	},
	feedSect: {
		flex: 3, 
		height: 50, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'orange',
	},
	sleepSect: {
		flex: 3, 
		height: 50, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'skyblue',
	},
		toiletSect: {
		flex: 3, 
		height: 50, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'palegoldenrod',
	},
});

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> {}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {
	const nextScreen = React.useMemo(() => () => props.navigation.navigate("demo"), [
		props.navigation,	
	])
	const healthScreen = React.useMemo(() => () => props.navigation.navigate("health"), [
		props.navigation,
	])
	const feedScreen = React.useMemo(() => () => props.navigation.navigate("feed"), [
		props.navigation,
	])
	const sleepScreen = React.useMemo(() => () => props.navigation.navigate("sleep"), [
		props.navigation,
	])  
	const toilScreen = React.useMemo(() => () => props.navigation.navigate("toil"), [
		props.navigation,
	])


  return (
    // May remove the 'row' portion for view preference
	// TouchableNativeFeedback *creates touchable button that uses Native Feedback from ***android OS ONLY***
	  <View	style={{flex: 1}}>
		<StatusBar hidden = {true}/>
		<View style = {{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'violet'}}>
		<Text style = {{color: 'black'}}> Pairenting </Text>
		</View>
	  
		<TouchableNativeFeedback
			onPress={healthScreen}
			background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
		  <View style={styles.healthSect}>
			<Text style = {{color: 'black'}}>Health {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
		  </View>
		</TouchableNativeFeedback>
		
		<TouchableNativeFeedback
			onPress={feedScreen}
			background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
		  <View style={styles.feedSect}>
			<Text style = {{color: 'black'}}>Feeding {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
		  </View>
		</TouchableNativeFeedback>
		
		<TouchableNativeFeedback
			onPress={sleepScreen}
			background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
		  <View style={styles.sleepSect}>
			<Text style = {{color: 'black'}}>Sleeping {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
		  </View>
		</TouchableNativeFeedback>
		
		<TouchableNativeFeedback
			onPress={toilScreen}
			background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
		  <View style={styles.toiletSect}>
			<Text style = {{color: 'black'}}>Toileting {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
		  </View>
		</TouchableNativeFeedback>
	  </View>
	);
}