import { View, Image, Text, StyleSheet, Pressable, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Photo } from '../components/Photo';

export default function MainScreen({ navigation }: any){

    const openLink = async (url: string) => {
        const supported = await Linking.canOpenURL(url);
        if(supported){
            await Linking.openURL(url)
        } else {
            console.warn(`Não foi possível abrir a URL: ${url}`);
        }
    }

    const mensagem = 'Olá Ramon! Gostaria de saber mais sobre seu trabalho, acessei seu portfolio de React Native.';
    const whatsappURL = `https://wa.me/5596981403089?text=${encodeURIComponent(mensagem)}`;
    
    return(
        <View style={styles.container}>
            <Photo />
            <View style={styles.mainContent}>
                <Pressable onPress={() => openLink('https://rnoleto.vercel.app')}>
                    <Text style={styles.containerSocial}>Portfolio Web</Text>
                </Pressable>
                <Pressable onPress={() => openLink('https://www.linkedin.com/in/ramon-noleto-b0913545')}>
                    <Text style={styles.containerSocial}>Linkedin</Text>
                </Pressable>
                <Pressable onPress={() => openLink(whatsappURL)}>
                    <Text style={styles.containerSocial}>Whatsapp</Text>
                </Pressable>
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
        width: '100%',
        gap:10,
    },
    containerSocial:{
        textAlign: 'center',
        fontSize: 16,
        width: '100%',
        backgroundColor: '#577ae4',
        color:'white',
        fontWeight: 'bold',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius: 4,
    }
})