import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ServerConnect from "../module/ServerConnect"

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      let value = AsyncStorage.getItem('email')
      console.log(value);
      if(value === null){
        navigation.replace(
          value === null||value === 'undefined' ? 'Auth' : 'Main'
        );
      }else{
        ServerConnect('api/SessionCheck',{'cookie':value} ,function(err, result){
          if (err){
            console.log(err);
            AsyncStorage.clear();
            navigation.replace(
              value === null||value === 'undefined' ? 'Auth' : 'Main'
            );
          }else{
            if(result.status === 201){
              navigation.replace(
                value === null||value === 'undefined' ? 'Auth' : 'Main'
              );
            }else{
              console.log(result.msg);
              AsyncStorage.clear();
              navigation.replace(
                value === null||value === 'undefined' ? 'Auth' : 'Main'
              );
            }
          }
        });
      }
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});