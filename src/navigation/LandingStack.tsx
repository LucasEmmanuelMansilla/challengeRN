import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationConstant from './NavigationConstant';
import Landing from '../ui/views/landing/Landing';
import IndividualCharacter from '../ui/views/individualCharacter/IndividualCharacter';
import Location from '../ui/views/location/Location';

const Stack = createStackNavigator();

const LandingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationConstant.LANDING_STACK.LANDING}
    >
      <Stack.Screen
        name={NavigationConstant.LANDING_STACK.LANDING}
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationConstant.LANDING_STACK.INDIVIDUAL_CHARACTER}
        component={IndividualCharacter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavigationConstant.LANDING_STACK.LOCATION}
        component={Location}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LandingStack;
