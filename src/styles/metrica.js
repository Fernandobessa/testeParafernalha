import { Plataform } from 'react-native';

export default {

    padding: 15,
    ...Plataform.select({
        ios: {headerHeight:64, HeaderPadding:20},
        android: { headerHeight:44, HeaderPadding:0 },
    }),
    tabBarHeight: 50,
};