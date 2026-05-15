import { StyleSheet } from "react-native"
import { THEME } from "../../styles/constants"

export const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:"row",   
        backgroundColor : THEME.colors.primary,  
        justifyContent: "center",
        marginHorizontal: "auto",
        alignSelf: "flex-start",
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: THEME.radius.md,
    },
    buttonText:{
        color: THEME.colors.foreground,
        backgroundColor : THEME.colors.primary,
        fontWeight: "500",
        fontSize: 18,
        textAlign: "center",
    },
})