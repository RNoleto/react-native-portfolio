import { NavigationContainer } from "@react-navigation/native"

import { BottonTabsRoutes} from "./botom-tabs.route"

export function Routes(){
    return(
        <NavigationContainer>
            <BottonTabsRoutes />
        </NavigationContainer>
    )
}