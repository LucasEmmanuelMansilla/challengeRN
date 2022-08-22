import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationConstant from './NavigationConstant';
import Login from '../ui/views/login/Login';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName={NavigationConstant.LOGIN_STACK.LOGIN}>
      <Stack.Screen
        name={NavigationConstant.LOGIN_STACK.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
