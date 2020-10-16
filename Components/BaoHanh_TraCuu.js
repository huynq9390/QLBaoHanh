import React, { Component } from 'react'
import styles from './Styles';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class BaoHanh_TraCuu extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewcontent}>
                    <Text style={styles.textHeader}>TRA CỨU BẢO HÀNH</Text>
                </View>

                <View style={{ flex: 1, marginTop: 20 }}>
                    <Text style={styles.label}>Số serial (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Số serial" />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff' }}>Kích hoạt</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
