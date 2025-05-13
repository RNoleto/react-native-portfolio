import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function MainScreen({ navigation }: any){
    
    return(
        <View>
            <Text>Main Screen!</Text>
            <Text>Foto</Text>
            <Text>Nome</Text>
            <Text>Contatos</Text>
            <StatusBar style='auto'/>
        </View>
    )
}