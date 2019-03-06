import { createStackNavigator, createAppContainer, CardStackStyleInterpolator } from "react-navigation";
import { fromLeft, fromRight } from 'react-navigation-transitions';
import ReactCalculator from './components/ReactCalculator.js';

const AppNavigator = createStackNavigator(
  {
    ReactCalculator : ReactCalculator,
  },
  {
    initialRouteName: "ReactCalculator",
    transitionConfig: () => fromRight(),
  },
);
export default createAppContainer(AppNavigator);