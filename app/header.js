import { StyleSheet, View, Image} from 'react-native';

const Header = () => {
    const logo = require('../assets/images/bethanys-pie-shop-logo_horiz-black.png');
    return(
        <View style={styles.header}>
            <Image source={logo} style={styles.logoStyle} />    
        </View>
    )    
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center'
    },
    logoStyle: {
        flex: 1,
        resizeMode: 'center'
    }
});

export default Header;