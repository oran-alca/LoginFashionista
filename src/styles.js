const React = require('react');
const { StyleSheet } = React;

import colors from './colors';

export default {
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background_color
    },
    image_background: {  
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_header: {
        fontFamily: 'Uni Sans Heavy', 
        fontSize: 16,
        paddingVertical: 5
    },
    text_subheader: {
        color: colors.dark_gray,
        fontSize: 14,
    },
    text_inputLogin:{ 
        fontWeight: '600',
        paddingVertical: 0,
        paddingLeft: 0,
        color: colors.black,
    },
    container_inputs: {
        borderBottomWidth: 1, 
        borderBottomColor: colors.dark_gray, 
        paddingVertical: 5
    },
    container_iconInputs: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    text_titleInput: {
        fontFamily: 'Uni Sans Heavy', 
        fontSize: 12
    },
    icon_right: {
        position: 'absolute', 
        right: 0,
        top: 10
    },
    btn_login: {        
        backgroundColor: colors.yellow_medium,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    btn_signup_outline: {
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: colors.dark_gray
    },
    text_button: {
        fontWeight: 'bold',
    },
    container_forgot: {
        alignItems: 'center', 
        paddingTop: 20, 
        paddingBottom: 40
    },
    container_inputsButtons: {
        paddingBottom: 20, 
        paddingTop: 10
    },
    background_Modal: {        
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000',
        opacity: 0.4
    }
}
