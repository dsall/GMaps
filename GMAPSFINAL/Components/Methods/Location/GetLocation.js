import React from 'react';


export default GetLocation = () => {
    var Data = {};
    navigator.geolocation.getCurrentPosition(
        (position) => {
            
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );

}