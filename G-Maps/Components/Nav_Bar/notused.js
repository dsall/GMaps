            <View  style={{flex:1}}> 
            <ScrollView
              scrollEventThrottle = {16}
            >
              <View style={{flex:1, backgroundColor: 'white', paddingTop: 20}}>
                  <Text style={{fontSize:24, fontWeight: '700', paddingHorizontal: 20,}} >
                    Recent Places
                  </Text>
                  <View style={{height:130, marginTop:20}}>
                      <ScrollView>
                          <View style={{height:130, width: 130}}>
                              <View style={{flex:2}}>
                                  <Image source={require('./xms.jpg')} 
                                  style={{flex:1, width:null, height:null, resizeMode: 'cover'}} />
                              </View>
                              <View  style={{flex:2}}>
                              <Text> First </Text>
                              </View>
                          </View>
                      </ScrollView>
                  </View>
              </View>
            </ScrollView>  
      </View>



















class DirectionsScreen extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        latitude1: null,
        longitude1: null,
        error1: null,
      };
    }
  
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude1: position.coords.latitude,
            longitude1: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }
    render() {
      return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <MapView style={styles.map}
        initialRegion={{
        latitude: 0,// this.state.latitude1,
        longitude: 0, //this.state.longitude1,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
  
        mapType="standard"
        />    
  
        <TouchableOpacity
          style={{ 
         position: 'absolute',
         bottom:150,
         borderWidth:1,
         borderColor:'green',
         alignItems:'center',
         justifyContent:'center',
         width:75,
         height:75,
         //backgroundColor:'#fff',
         borderRadius:100,
        }}
         >
  
        <Image source = {require('../Logos/DESIGN4JPG.jpg')} 
        style={{width:75, height: 75, borderRadius:75,}}
        />
  
        </TouchableOpacity>
        </View>
        
      );
    }
  }

  
  