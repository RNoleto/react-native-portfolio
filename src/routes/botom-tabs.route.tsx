import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import SkillScreen from "../screens/SkillScreen";


const {Navigator, Screen} = createBottomTabNavigator()

export function BottonTabsRoutes(){
    return(
        <Navigator>
            <Screen 
                name='main'
                component={MainScreen}
                options={{
                    title: 'Main'
                }}
            />

            <Screen 
                name='skill'
                component={SkillScreen}
                options={{
                    title: 'Skill'
                }}
            />
        </Navigator>
    )
}