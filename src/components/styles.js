const React = require("react-native");
const { StyleSheet } = React;

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default {

    container: {
        backgroundColor: "#FFF",
        flex: 4
    },
    button: {
        margin: 15,
        marginTop: 42,
        backgroundColor: '#1d71b8'
    },
    header: {
        alignItems: 'center',
        width: wp('100%'),
        height: hp('39%'),
        backgroundColor: '#1d71b8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contents: {
        marginTop: hp('4%'),

    },
    logo: {
        width: wp('45%'),
        height: hp('45%'),
        resizeMode: 'contain'
    },

    input: {
        width: wp('80%'),
        marginTop: hp('2%'),
        borderWidth: 0
    },

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    floatingLabelFocusStyle: {
        color: "blue"
    },

    formInput: {
        borderBottomWidth: 0.5,
        marginLeft: 20,
        borderColor: 'grey',

    },
    SectionStyle: {
        flex: 1, flexDirection: 'row'
    },
    listVideo: {
        flex: 1, flexDirection: 'row', marginLeft: wp('3%'),
        width:wp('80%')
    },

    ImageStyle: {
        marginTop: hp('6%'),
    },
    TextNote: {
        marginLeft: wp('3%'), marginTop:wp('2%')
    },
    Thumbnail: {
        marginTop:wp('2%')
    }

    

};