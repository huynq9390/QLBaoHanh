import { StyleSheet, } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#FF0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    viewcontent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 25,
    },
    label: {
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
    },
    textbox: {
        height: 40,
        padding: 10,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
    },
    button: {
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        backgroundColor: 'hsla(0, 100%, 30%, 0.5)',
        padding: 10
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginStart: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
    },
    searchIcon: {
        padding: 10,
    },
    searchInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: 'black',
        marginRight: 10
    },
});
export default styles;