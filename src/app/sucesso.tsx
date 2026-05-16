import { Text, View, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import { THEME } from "../styles/constants"
import { Button } from "../components/Buttons"

export default function SucessoScreen(){
    const router = useRouter()

    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                        <Image source={require('../../assets/img/confirmIcon.png')} style={styles.imgConfirm}/>
                    <Text style={styles.title}>
                        Cartão criado com sucesso!
                        </Text>
                    <Text style={styles.subtitle}>
                        Seu cartão de visita digital está pronto.
                        </Text>
                    <Text style={styles.subtitle}>
                        Compartilhe com a galera!
                        </Text>
                </View>
            <View style={styles.footerContainer}>
                <Button label="Criar outro cartão" onPress={() => router.replace("/cadastro")} />
                <Button  label="Volta ao início" variant="secondary" onPress={() => router.replace("/")} />
            </View>
                
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",        
        height: "100%",
        justifyContent: "center",
        alignContent:"center",
        paddingHorizontal: 24,
    },
    headerContainer:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: 600,
    },
    title:{
        color: THEME.colors.title,
        fontWeight: "bold",
        fontSize: THEME.text.heading.h1,
        width: 190,
        marginBottom: 15,
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
        marginBottom: 20,
    }
})