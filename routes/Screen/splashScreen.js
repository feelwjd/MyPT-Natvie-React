import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { getItemFromAsync, setItemToAsync } from '../module/getItem';
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
      var nav = 0;
      var sessionCode = getItemFromAsync('email');
      sessionCode.then(result => ServerConnect('session/SessionCheck',{'cookie':result},function(err,result){
        if(err){
          console.log(err);
          AsyncStorage.clear()
        }else{
          if(result.status === 201){
            console.log("세션 확인 되었습니다.");
            nav = 1;
          }else{
            console.log(result.status , result.msg);
            AsyncStorage.clear()
          }
        }
      })).then(
        navigation.replace(
          nav === 0 ? 'Auth' : 'Main'
          )
      )

      // AsyncStorage.getItem('email').then(async function(value){
      //   console.log(value);
      //   ServerConnect('session/SessionCheck',{'cookie':value} ,async function(err, result){
      //     if (err){
      //       console.log(err);
      //       await AsyncStorage.clear().then(async function(){
      //         navigation.replace('Auth');
      //       });
      //     }else{
      //       if(result.status === 201){
      //         console.log("세션 확인 되었습니다.");
      //         navigation.replace('Main');
      //       }else{
      //         console.log(result.status);
      //         console.log(result.msg);
      //         await AsyncStorage.clear().then(async function(){
      //           navigation.replace('Auth');
      //         });
      //       }
      //     }
      //   });
      // });
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