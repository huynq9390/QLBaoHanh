import React, { Component } from 'react'
import { ScrollViewComponent, TextInput, View, StyleSheet } from 'react-native'

export default class KichHoatBH extends Component {
    render() {
        return (
            <ScrollViewComponent>
                <View style={styles.inputView}>
            <TextInput style={styles.input}/>
        </View>
            </ScrollViewComponent>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputView: {
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute', 
        top: 0,
        left: 5,
        right: 5
    },
    input: {
        height: 36,
        padding: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
    }
  });



