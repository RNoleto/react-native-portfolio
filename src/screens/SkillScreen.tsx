import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Photo } from "../components/Photo";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome } from '@expo/vector-icons'

export default function SkillScreen({ navigation }: any){
    
    return(
        <View style={styles.container}>
            <Photo />
            <View style={styles.mainContent}>
                <View style={styles.skillCard}>
                    <Text style={styles.skillTitle}>VueJs</Text>
                    <View style={styles.skillLevel}>
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star-half-empty" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                    </View>
                </View>
                <View style={styles.skillCard}>
                    <Text style={styles.skillTitle}>Laravel</Text>
                    <View style={styles.skillLevel}>
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star-half-empty" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                    </View>
                </View>
                <View style={styles.skillCard}>
                    <Text style={styles.skillTitle}>PostgreSQL</Text>
                    <View style={styles.skillLevel}>
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                    </View>
                </View>
                <View style={styles.skillCard}>
                    <Text style={styles.skillTitle}>Figma</Text>
                    <View style={styles.skillLevel}>
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star" size={12} color='white' />
                        <FontAwesome name="star-half-empty" size={12} color='white' />
                        <FontAwesome name="star-o" size={12} color='white' />
                    </View>
                </View>
            </View>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        alignItems:'center',
        padding: 22,
    },
    mainContent:{
        gap:10,
        textAlign: 'center',
    },
    skillCard:{
        backgroundColor: '#577ae4',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 10,
    },
    skillLevel:{
        flexDirection: 'row',
        gap:6,
    },
    skillTitle:{
        color: 'white',
        fontSize: 16,
        fontWeight:'bold',
    }
})