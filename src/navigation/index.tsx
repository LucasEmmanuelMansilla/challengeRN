import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationConstant from './NavigationConstant';
import {Pressable, Text, View} from 'react-native';
import {logout} from '../redux/slices/UserSlice';
import {CommonActions} from '@react-navigation/native';

import React, {useRef} from 'react';
import LoginStack from './LoginStack';
import LandingStack from './LandingStack';
import {Styles} from '../ui/styles/Styles';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const mapStateToProps = state => {
  return {
    loggedUser: state.user.loggedUser,
  };
};

const mapDispatchToProps = {logout};

const RootNavigator = props => {
  const navigatorRef = useRef();
  return (
    <NavigationContainer ref={navigatorRef}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(242,242,242)',
            borderBottomColor: 'transparent',
            shadowColor: 'transparent',
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
        initialRouteName={NavigationConstant.NAVIGATOR.LOGIN_FLOW}
      >
        <Stack.Screen
          name={NavigationConstant.NAVIGATOR.LOGIN_FLOW}
          component={LoginStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationConstant.NAVIGATOR.LANDING_FLOW}
          component={LandingStack}
          options={{
            headerTitle: '',
            headerRight: () => (
              <Pressable
                onPress={() => {
                  props.logout();
                  navigatorRef.current?.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{name: NavigationConstant.NAVIGATOR.LOGIN_FLOW}],
                    }),
                  );
                }}
                style={Styles.iconLogout}
              >
                <Text style={[Styles.viewMoreText, Styles.text]}>Salir</Text>
              </Pressable>
            ),
            headerLeft: () => (
              <View style={Styles.welcomeTextContainer}>
                <Text style={[Styles.text, Styles.viewMoreText]}>
                  Hola {props.loggedUser.name}
                </Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
