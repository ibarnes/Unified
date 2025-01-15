import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MatchesScreen from '../screens/MatchesScreen';
import ConnectionsScreen from '../screens/ConnectionsScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SectorsScreen from '../screens/SectorsScreen';
import GoalsScreen from '../screens/GoalsScreen';
import NeedsScreen from '../screens/NeedsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {AppProvider} from '../context/AppContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CreateScreen from '../screens/CreateScreen';
import CreateGoalScreen from '../screens/CreateGoalScreen';
import CreateNeedScreen from '../screens/CreateNeedScreen';
import CreateOpportunityScreen from '../screens/CreateOpportunityScreen';
import ReviewPostScreen from '../screens/ReviewPostScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Separate Create Button Component
const CreateButton = ({handlePresentModalPress}) => (
  <TouchableOpacity
    onPress={handlePresentModalPress}
    style={styles.createButton}>
    <Icon name="add-circle-outline" size={32} color="black" />
  </TouchableOpacity>
);

const TabNavigator = () => {
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = () => {
    console.log('Opening modal...');
    if (bottomSheetModalRef.current) {
      console.log('BottomSheetModalRef is valid');
      bottomSheetModalRef.current.present();
    } else {
      console.log('BottomSheetModalRef is null');
    }
  };

  const handleSheetChanges = index => {
    console.log('handleSheetChanges', index);
  };

  const handleDismissModal = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="home-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="MatchesStack"
              component={MatchesStack}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="people-outline" color={color} size={size} />
                ),
                title: 'My Matches',
              }}
            />
            {/* <Tab.Screen
              name="Create"
              children={() => (
                <CreateButton
                  handlePresentModalPress={handlePresentModalPress}
                />
              )}
              options={{
                tabBarIcon: ({color, size}) => (
                  <TouchableOpacity onPress={handlePresentModalPress}>
                    <Icon name="add-circle-outline" color={color} size={size} />
                  </TouchableOpacity>
                ),
              }}
            /> */}
            <Tab.Screen
              name="Create"
              component={CreateScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="add-circle-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Connections"
              component={ConnectionsScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="chatbubble-outline" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="person-outline" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>

          {/* Bottom Sheet Modal */}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={['50%', '50%']}
            backdropComponent={props => <BottomSheetBackdrop {...props} />}
            style={styles.modalStyle}
            onChange={handleSheetChanges}
            onDismiss={() => console.log('Sheet dismissed')}>
            {console.log('Rendering modal content')}
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Create New Item</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  I'm working toward a specific objective
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  I'm looking for help with something specific
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  I have something to offer to others
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="SectorsScreen" component={SectorsScreen} />
              <Stack.Screen name="GoalsScreen" component={GoalsScreen} />
              <Stack.Screen name="NeedsScreen" component={NeedsScreen} />
              <Stack.Screen name="HomeScreen" component={TabNavigator} />
              <Stack.Screen name="Matches" component={MatchesScreen} />
              <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
              <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
              <Stack.Screen name="CreateGoalScreen" component={CreateGoalScreen} />
              <Stack.Screen name="CreateNeedScreen" component={CreateNeedScreen} />
              <Stack.Screen name="CreateOpportunityScreen" component={CreateOpportunityScreen} />
              <Stack.Screen name="ReviewPostScreen" component={ReviewPostScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const MatchesStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Matches" component={MatchesScreen} />
  
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  modalStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  createButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
  },
});

export default AppNavigator;
