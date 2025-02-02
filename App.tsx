import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {Poppins_500Medium,Poppins_600Semibold,Poppins_700bold,useFonts,} from "@expo-google-fonts";

export default function App() {
    let [fontsLoaded] = useFonts( 
        Poppings_500Medium, 
        Poppins_600Semibold,
        Poppins_700bold
    } );

    const onLayoutRootView = React.useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    },[fontsLoaded]);

    if(!fontsLoaded) {
        return null;
    }

    return(
        <SafeAreaProvider onLayout={onLayoutRootView}>
            <Navigation/>
        <StatusBar style="light" />
     </SafeAreaProvider>
              );
         }