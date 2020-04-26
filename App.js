import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import NavPage from "./src/screens/NavPage";
import Images from "./src/screens/Images";
import ColorScreen from "./src/screens/ColorScreen";
import TextInput from "./src/screens/TextInput";
import FlexBoxes from "./src/screens/FlexBoxes";
import BackGroundImage from "./src/screens/BackGroundImage";
import Album from "./src/screens/Album";
import Map from "./src/screens/Map";

let navigatorOption = {navigationOptions: {
  headerShown: false,
}}
const navigator = createStackNavigator(
  {
    HomePage: HomeScreen,
    ListPage: ComponentScreen,
    NavPage: NavPage,
    ColorScreen: ColorScreen,
    Images: Images,
    TextInput: TextInput,
    FlexBoxes: FlexBoxes,
    BackGroundImage: {
      screen: BackGroundImage, 
        ...navigatorOption
    },
    Map: {
      screen: Map, 
        ...navigatorOption
    },
    Album: {
      screen: Album, 
        ...navigatorOption
    },
  },
  {
    initialRouteName: 'BackGroundImage',
    navigationOptions: {
      headerVisible: false,
  }
    // defaultNavigationOptions: {
    //   title: "App"
    // }
  }
);

export default createAppContainer(navigator);
