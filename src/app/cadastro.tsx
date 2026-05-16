import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { THEME } from "../styles/constants"
import { Button } from "../components/Buttons"
import { Input } from "../components/Input"
import { ButtonGroupColors } from "../components/ButtonGroupColors"

export default function CadastroScreen(){
    return(
        <SafeAreaView>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>
                            Cadastro
                        </Text>
                        <Text style={styles.subtitle}>
                            Preencha seus dados de dev
                        </Text>
                    </View>
                    <View style={{height: 700}}>
                        <View style={{gap :  8, marginBottom: 12}}>
                            <Input label="Nome Completo" placeholder="João Andrade"/>
                            <Input label="Cargo" placeholder="Desenvolvedor Mobile"/>
                            <Input label="Empresa" placeholder="Univag"/>
                            <Input label="Anos de experiência" placeholder="4"/>
                            <Input label="Tecnologia Favorita" placeholder="React Native"/>
                        </View>
                    
                    
                    <ButtonGroupColors
                        group={[
                            {    
                                id: "c1",
                                name: "Azul",
                                colorCode: "#3851cd",
                            },
                            {    
                                id: "c2",
                                name: "Verde",
                                colorCode: "#0ab026",
                            },
                            {    
                                id: "c3",
                                name: "Roxo",
                                colorCode: "#6f05ba",
                            }
                        ]}
                    />
                    </View>
                    <View style={styles.footerContainer}>
                        <Button label="Cadastrar Cartão" variant="primary"/>
                    </View>
                
                </View>
            </KeyboardAvoidingView>
            
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
        gap: 2,
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
    },
    footerContainer:{
        gap: 10,
    },
})