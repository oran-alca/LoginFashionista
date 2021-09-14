import React, { Component } from "react";
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "../styles";
import colors from "../colors";

const image__fondo = require('../Imgs/two-young-pretty-girls-looking-at-dresses-and-try-on-it-while-choosing-at-shop.jpg')
const { height, width } = Dimensions.get("window")

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
        }
    }

    render_login() {
        return (
            <View>
                <View style={{ paddingVertical: 15 }}>
                    <Text style={styles.text_header} >Welcome Fashionista!</Text>
                    <Text style={styles.text_subheader}>Sign in continue</Text>
                </View>
                <View style={styles.container_inputsButtons}>
                    <View style={styles.container_inputs}>
                        <View style={styles.container_iconInputs}>
                            <View style={{ marginLeft: 10 }}>
                                <MaterialCommunityIcons name={"email-outline"} size={20} color={colors.black} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.text_titleInput}>EMAIL</Text>
                                <TextInput 
                                    style={[{ width: width * 0.7 }, styles.text_inputLogin]}
                                    placeholderTextColor={colors.dark_gray_two}
                                    placeholder={"oran.alca@gmail.com"}/>
                            </View>
                        </View>
                    </View>

                    <View style={[{marginVertical: 25}, styles.container_inputs]}>
                        <View style={styles.container_iconInputs}>
                            <View style={{ marginLeft: 10 }}>
                                <MaterialCommunityIcons name={"lock-outline"} size={20} color={colors.black} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.text_titleInput}>PASSWORD</Text>
                                <TextInput 
                                    style={[{ width: width * 0.7, paddingRight: 20 }, styles.text_inputLogin]}
                                    placeholderTextColor={colors.dark_gray_two}
                                    placeholder={"••••••"}
                                    secureTextEntry={true}/>
                            </View>
                            <View style={styles.icon_right}>
                                <MaterialCommunityIcons name={"eye"} size={20} color={colors.dark_gray} />
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity>
                        <View style={styles.btn_login}>
                            <Text style={[{color: colors.background_color}, styles.text_button]}>Log In</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.container_forgot}>
                        <Text style={[{fontWeight: '500'}, styles.text_subheader]}>Forgot password?</Text>
                    </View>
                    
                    <TouchableOpacity onPress={() => this.setState({ login: !this.state.login })}>
                        <View style={styles.btn_signup_outline}>
                            <Text style={styles.text_subheader}>Sign up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
    render_signup() {
        return (
            <View>
                <View style={{ paddingVertical: 15 }}>
                    <Text style={styles.text_header} >Create an account</Text>
                    <Text style={styles.text_subheader}>Start you career with us</Text>
                </View>
                <View style={styles.container_inputsButtons}>
                    <View style={styles.container_inputs}>
                        <View style={styles.container_iconInputs}>
                            <View style={{ marginLeft: 10 }}>
                                <MaterialCommunityIcons name={"account-outline"} size={20} color={colors.black} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.text_titleInput}>NAME</Text>
                                <TextInput 
                                    style={[{ width: width * 0.7 }, styles.text_inputLogin]}
                                    placeholderTextColor={colors.dark_gray_two}
                                    placeholder={"Your name"}/>
                            </View>
                        </View>
                    </View>

                    <View style={[{marginVertical: 25}, styles.container_inputs]}>
                        <View style={styles.container_iconInputs}>
                            <View style={{ marginLeft: 10 }}>
                                <MaterialCommunityIcons name={"email-outline"} size={20} color={colors.black} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.text_titleInput}>EMAIL</Text>
                                <TextInput 
                                    style={[{ width: width * 0.7, paddingRight: 20 }, styles.text_inputLogin]}
                                    placeholderTextColor={colors.dark_gray_two}
                                    placeholder={"oran.alca@gmail.com"}/>
                            </View>
                            <View style={styles.icon_right}>
                                <MaterialCommunityIcons name={"eye"} size={20} color={colors.dark_gray} />
                            </View>
                        </View>
                    </View>

                    <View style={[{marginBottom: 25}, styles.container_inputs]}>
                        <View style={styles.container_iconInputs}>
                            <View style={{ marginLeft: 10 }}>
                                <MaterialCommunityIcons name={"lock-outline"} size={20} color={colors.black} />
                            </View>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={styles.text_titleInput}>PASSWORD</Text>
                                <TextInput 
                                    style={[{ width: width * 0.7, paddingRight: 20 }, styles.text_inputLogin]}
                                    placeholderTextColor={colors.dark_gray_two}
                                    placeholder={"••••••"}
                                    secureTextEntry={true}/>
                            </View>
                            <View style={styles.icon_right}>
                                <MaterialCommunityIcons name={"eye"} size={20} color={colors.dark_gray} />
                            </View>
                        </View>
                    </View>


                    <TouchableOpacity>
                        <View style={styles.btn_login}>
                            <Text style={[{color: colors.background_color}, styles.text_button]}>Sign up</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.container_iconInputs}>
                        <View style={[{marginRight: 20, marginTop: 15}, styles.container_forgot]}>
                            <Text style={[{fontWeight: '500'}, styles.text_subheader]}>Already have an account?</Text>
                        </View>
                        
                        <View style={{ width: width * 0.33 }}>
                            <TouchableOpacity onPress={() => this.setState({ login: !this.state.login })}>
                                <View style={styles.btn_signup_outline}>
                                    <Text style={styles.text_subheader}>Login</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image__fondo} style={styles.image_background}>
                    <View style={styles.background_Modal}/>
                    <Animatable.View 
                        animation="fadeInUpBig"
                        style={[styles.footer, { backgroundColor: colors.background_color, marginTop: this.state.login ? '80%' : '70%' }]} >
                        
                        {
                            this.state.login ? this.render_login() : this.render_signup()
                        }

                    </Animatable.View>
                </ImageBackground>
            </View>
        )
    }
}