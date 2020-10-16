import React, { Component } from 'react'
import styles from './Styles';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class BaoHanh_KichHoat extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewcontent}>
                    <Text style={styles.textHeader}>KÍCH HOẠT BẢO HÀNH</Text>
                </View>

                <View style={{ flex: 1, marginTop: 20 }}>
                    <Text style={styles.label}>Số serial (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Số serial" />
                    <Text style={styles.label}>Tên khách hàng (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Tên khách hàng" />
                    <Text style={styles.label}>Số điện thoại (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Số điện thoại" />
                    <Text style={styles.label}>Địa chỉ (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Địa chỉ" />
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.textbox} placeholder="Email" />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff' }}>Kích hoạt</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
