import { createStackNavigator } from "react-navigation-stack"
import { PrimaryNavigator } from "./primary-navigator"
import {  
  FeedingScreen,
  SleepScreen,
  ToiletScreen,
  HealthScreen,
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    toiletScreen: { screen: ToiletScreen },
    sleepScreen: { screen: SleepScreen },
    feedingScreen: { screen: FeedingScreen },
	healthScreen: { screen: HealthScreen },
    primaryStack: { screen: PrimaryNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
