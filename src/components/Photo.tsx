import React from "react";
import photo from '../assets/RamonNoletoGhibli.png';
import { Image, Text, View } from "react-native";

export function Photo(){
    return(
            <View style={{
                alignItems:'center',
                marginBottom: 20,
            }}>
                <Image
                    source={photo}
                    style={{
                        backgroundColor: 'red',
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        resizeMode: 'cover',
                    }}
                />
                <Text
                    style={{
                        marginTop:10,
                        textAlign:'center',
                        fontWeight: 'bold',
                        fontSize: 30,
                        color:'#577ae4'
                    }}
                >Ramon Noleto</Text>
            </View>
    )
}