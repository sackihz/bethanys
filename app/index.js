import { StyleSheet, Text, View, Image, Platform } from 'react-native';

const Home = () => {
    const pie1 = require('../assets/images/shutterstock_1528835303.jpg');

    return (
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image source={pie1} style={styles.imageStyle} />  
          </View>
          <View style={styles.titleContainer}>
            
            <Text style={styles.slogan}>The Greatest Pies in the World</Text>
          </View>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 13,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageView: {
      flex: 5
    },
    imageStyle: {
      flex: 1,
        ...Platform.select({
          android: {
            resizeMode: 'contain'
          },
          ios: {
            resizeMode: 'contain'
          },
          default: {
            resizeMode: 'cover'
          }
        }),
    },
    titleContainer: {
      flex: 3,
      alignItems: 'center'
    },
    slogan: {
      fontSize: 20,
      fontFamily: 'RobotoCondensed-Regular'
    }
  });

  export default Home;