import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SkillScreen({ navigation }: any){
    
    return(
        <View>
            <Text>
                Skill Screen!
            </Text>
            <StatusBar style='auto'/>
        </View>
    )
}