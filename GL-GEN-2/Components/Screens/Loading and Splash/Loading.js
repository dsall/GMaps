import React from "react";

import {StyleSheet, View, Image, Animated, Easing } from 'react-native';


const gmapslogo = require("../../../Assets/Images/gmapslogo.png");

class FadeInView extends React.Component {
    state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
  
    componentDidMount() {
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 10000,              // Make it take a while
          easing: Easing.bounce,
        }
      ).start();                        // Starts the animation

    }
  
    render() {
      let { fadeAnim } = this.state;
  
      return (
        <Animated.View                 // Special animatable View
          style={{
            ...this.props.style,
            opacity: fadeAnim,         // Bind opacity to animated value
          }}
        >
          {this.props.children}
        </Animated.View>
      );
    }
  }


export default class Loading extends React.Component {
  

  render() {
    return (
  
        <View style={styles.logoContainer}>
        <FadeInView>
            <Image 
            style={styles.logo}
            source={gmapslogo}
            />         
        </FadeInView>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',

  },
  logo:{
    width:100,
    height:100,
  },
  

});