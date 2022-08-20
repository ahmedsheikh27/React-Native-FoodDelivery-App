import { StyleSheet, View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import Colors from '../contants/Colors'
import Images from '../contants/Images'
import Fonts from '../contants/Fonts'

const SplashScreen = () => {
  return (
    <View style={[styles.container]}>
        <StatusBar 
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
        />
        <Image 
        source={Images.PLATE}
        style={styles.image}
        />
<Text style={[styles.title]}>FooDelivery</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.DEFAULT_GREEN
    },
    image: {
        height: 150,
        width: 150
    },
    title: {
        color: Colors.DEFAULT_WHITE,
        fontSize:32,
        fontFamily: Fonts.POPPINS_LIGHT
    }
})