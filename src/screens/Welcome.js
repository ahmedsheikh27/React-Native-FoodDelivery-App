import { StyleSheet, Text, FlatList,View, StatusBar } from 'react-native'
import React from 'react'
import Colors from '../contants/Colors'
const Welcome = () => {
  return (
    <View style={[styles.container]}>
        <StatusBar 
        barStyle="Dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
        />
        <View>
            <FlatList />
        </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:Colors.DEFAULT_WHITE
    }
})