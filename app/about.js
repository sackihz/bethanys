import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

const About = () => {
    const router = useRouter();

    return(
        <>
            <View style={styles.mapContainer}>
                <MapView 
                    style={styles.map}
                    initialRegion={{
                        latitude: 28.37758134250054,
                        longitude: -81.57088227450068,
                        latitudeDelta: 0.0422,
                        longitudeDelta: 0.0421,
                    }}
                    provider={PROVIDER_GOOGLE}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>The Greatest Pies in the World</Text>
                <Text style={styles.content}>Welcome to Bethanys Pie Shop where we bake the best pies in the world.</Text>
                <Text style={styles.address}>Located At 1313 Mockingbird Lane, Suite B</Text>    
                <Text 
                    style={styles.back}
                    onPress={() => {
                        router.replace('/');
                    }}
                >
                    GO HOME
                </Text>
            </View>    
        </>    
    )    
};

const styles = StyleSheet.create({
    mapContainer: {
        flex: 8    
    },
    map: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flex: 5,
        paddingTop: 10
    },
    heading: {
        fontSize: 15,
        fontFamily: 'RobotoCondensed-Regular',
        paddingLeft: 3
    },
    content:{
        paddingTop: 8,
        paddingLeft: 3,
        fontFamily: 'RobotoCondensed-Regular'
    },
    address:{
        paddingTop: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Regular'
    },
    back:{
        paddingTop: 80,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontFamily: 'RobotoCondensed-Regular',
        textDecorationLine: 'underline'
    }
});

export default About;