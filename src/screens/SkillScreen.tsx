import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SkillScreen({ navigation }: any){
    
    return(
        <View style={styles.container}>
            <Text>Skill Screen!</Text>
            <Text>Foto</Text>
            <Text>Nome</Text>
            <Text>Lista de Habilidades e nivel em cada uma das skills</Text>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 22,
    }
})