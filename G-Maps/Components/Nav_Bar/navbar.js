import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Color from 'react-native-material-color';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DirectionsScreen from '../Screens/DirectionsScreen';
import FavoriteScreen from '../Screens/FavoritesScreen';
import AddScreen from '../Screens/AddScreen';
import SettingsScreen from '../Screens/SettingsScreen';


export default createMaterialBottomTabNavigator({

Directions: {
            screen: DirectionsScreen,
            navigationOptions: {
        tabBarLabel: 'Directions',
        tabBarIcon: (<Icon name = "directions"
                    color = "white"
                    size = { 24 }/>
                    )
        }
    },
    Favorites: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ( < Icon name = "favorite"
                color = "white"
                size = { 24 }
                />)
            }
        },
    AddNew: {
        screen: AddScreen,
        navigationOptions: {
            tabBarLabel: 'Add',
            tabBarIcon: ( < Icon name = "add"
                color = "white"
                size = { 24 }
                />)
            }
        },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ( < Icon color = "white"
                name = "settings"
                size = { 24 }
                />)
            }
        },

        },
        {

        initialRouteName: 'Directions',
        shifting: true,
        activeTintColor: 'black',
        pressColor: Color.BLUE[500],
        barStyle: { backgroundColor: Color.BLUE[500], },

        }

    )