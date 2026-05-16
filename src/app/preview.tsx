import { Text, View, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { THEME } from "../styles/constants"
import { Button } from "../components/Buttons"
import { DevCard } from "../components/DevCard"

export default function PreviewScreen(){
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>
                        Seu Cartão
                    </Text>
                </View>
                
                <DevCard/>
                
                <View style={styles.footerContainer}>
                    <Button label="Editar dados" variant="outline"/>
                    <Button label="Finalizar" variant="primary"/>
                </View>
                
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",        
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 12,
    },
    headerContainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 10,
    },
    title:{
        color: THEME.colors.title,
        fontWeight: "bold",
        fontSize: THEME.text.heading.h1,
        textAlign: "center",
    },
    subtitle:{
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: THEME.text.heading.h2,
        width: 270,
        textAlign: "center",
    },
    footerContainer:{
        gap: 10,
    },
    imgConfirm:{
        height: 200,
        resizeMode: "contain",
    },
})