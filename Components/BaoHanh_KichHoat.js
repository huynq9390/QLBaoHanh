import React, { Component } from 'react'
import styles from './Styles';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BaoHanh_KichHoat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serialNum: '',
            cusName: '',
            phoneNum: '',
            address: '',
            email: ''
        }
    }

    validate_fileds = () => {
        const { serialNum, cusName, phoneNum, address } = this.state
        if (serialNum == '') {
            alert('Vui long nhap Serial number.');
            return false;
        }
        if (cusName == '') {
            alert('Vui long nhap ten kh');
            return false;
        }
        if (phoneNum == '') {
            alert('Vui long nhap so dien thoai.');
            return false;
        }
        if (address == '') {
            alert('Vui long nhap dia chi.');
            return false;
        }
        return true;
    }

    active_quantity = () => {
        if (this.validate_fileds()) {
            alert('Kich hoat thanh cong.');
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewcontent}>
                    <Text style={styles.textHeader}>KÍCH HOẠT BẢO HÀNH</Text>
                </View>

                <View style={{ flex: 1, marginTop: 20 }}>
                    <Text style={styles.label}>Số serial (*)</Text>
                    <View style={styles.searchSection}>
                        <Icon style={styles.searchIcon} name="barcode-scan" size={20} color="#000" onPress={() => alert('abc')} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Số serial"
                            onChange={(value) => this.setState({ serialNum: value })}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <Text style={styles.label}>Tên khách hàng (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Tên khách hàng" onChange={(value) => this.setState({ cusName: value })} />
                    <Text style={styles.label}>Số điện thoại (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Số điện thoại" onChange={(value) => this.setState({ phoneNum: value })} />
                    <Text style={styles.label}>Địa chỉ (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Địa chỉ" onChange={(value) => this.setState({ address: value })} />
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.textbox} placeholder="Email" onChange={(value) => this.setState({ email: value })} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => this.active_quantity()}>
                    <Text style={{ color: '#fff' }} >Kích hoạt</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
