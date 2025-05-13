import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import SkillScreen from "../screens/SkillScreen";
import { MaterialCommunityIcons } from '@expo/vector-icons'


const {Navigator, Screen} = createBottomTabNavigator()

export function BottonTabsRoutes(){
    return(
        <Navigator>
            <Screen 
                name='main'
                component={MainScreen}
                options={{
                    title: 'Main',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons 
                            name='home'
                            color='blue'
                            size={size}
                        />
                    )
                }}
            />

            <Screen 
                name='skill'
                component={SkillScreen}
                options={{
                    title: 'Skill',
                    tabBarIcon:({color, size}) => (
                        <MaterialCommunityIcons 
                            name='code-braces'
                            color='blue'
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}