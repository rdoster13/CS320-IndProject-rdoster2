import * as React from "react"
import { View } from "react-native"
import { useObserver } from "mobx-react-lite"
import { Text } from "../"
import { useStores } from "../../models/root-store"
import { dropDownMenuStyles as styles } from "./dropDownMenu.styles"

export interface DropDownMenuProps {}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const DropDownMenu: React.FunctionComponent<DropDownMenuProps> = props => {
  // const { someStore } = useStores()

  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <Text>Hi Func</Text>
    </View>
  ))
}
