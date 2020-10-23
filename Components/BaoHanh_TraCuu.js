import React, { Component } from 'react'
import styles from './Styles';
import { StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { color } from 'react-native-reanimated';

export default class BaoHanh_TraCuu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serialNum: '',
            isLoading: true,
            id: '',
            title: '',
            release: '',
            color: 'red'
        }
    }

    validateSerial = () => {
        const { serialNum } = this.state;
        if (serialNum == '') {
            alert('Vui long nhap Serial number.');
            return false;
        }
        return true;
    }

    searchSerial = () => {
        //debugger;
        const { dataSource } = this.state;
        var id = '';
        if (this.validateSerial()) {
            id = dataSource[0].id + "\n" + dataSource[0].title + "\n" + dataSource[0].releaseYear;
            this.setState({ id: id });
            if (id != '')
                this.setState({ color: 'white' });
        }
    }

    componentDidMount() {
        return fetch('https://reactnative.dev/movies.json')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.movies,
                    },
                    function () { }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <ScrollView style={styles.container}>
                <View style={styles.viewcontent}>
                    <Text style={styles.textHeader}>TRA CỨU BẢO HÀNH</Text>
                </View>

                <View style={{ flex: 1, marginTop: 20 }}>
                    <Text style={styles.label}>Số serial (*)</Text>
                    <TextInput style={styles.textbox} placeholder="Số serial" onChange={(value) => this.setState({ serialNum: value })} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => this.searchSerial()}>
                    <Text style={{ color: '#fff' }} >Tra cuu</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 30, backgroundColor: this.state.color, marginLeft: 10, marginRight: 10 }}>
                    <TextInput numberOfLines={10} multiline={true} value={this.state.id}></TextInput>
                    {/* <Text > {this.state.id}</Text> */}
                </View>

                
            </ScrollView>
        )
    }
}
