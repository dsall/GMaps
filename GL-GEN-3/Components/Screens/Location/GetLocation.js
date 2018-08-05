import React, { Component } from 'react';
import {  Location, MapView } from 'expo';
const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };


export const GetLocation = () => {
    let location = Location.watchPositionAsync(GEOLOCATION_OPTIONS);
    console.log(location);
    return location;
}