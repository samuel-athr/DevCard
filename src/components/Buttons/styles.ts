import { StyleSheet } from "react-native"
import { THEME } from "../../styles/constants"

export const stylePrimary = StyleSheet.create({
    buttonContainer:{
        flexDirection:"row",   
        backgroundColor : THEME.colors.primary,  
        justifyContent: "center",
        paddingVertical: 15,
        paddingHorizontal: 0,
        borderRadius: THEME.radius.md,
    },
    buttonText:{
        color: THEME.colors.foreground,
        fontWeight: "500",
        fontSize: 18,
        textAlign: "center",
    },
})

export const styleSecondary = StyleSheet.create({
    buttonContainer:{
        ...stylePrimary.buttonContainer,
        backgroundColor: "transparent"
    },
    buttonText:{
        ...stylePrimary.buttonText,
        color: THEME.colors.primary
    },
})

export const styleOutline = StyleSheet.create({
    buttonContainer:{
        ...stylePrimary.buttonContainer,
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor:THEME.colors.primary,
    },
    buttonText:{
        ...stylePrimary.buttonText,
        color: THEME.colors.primary,
    },
})

export const styles = {
    primary: stylePrimary,
    secondary: styleSecondary,
    outline: styleOutline,
} as const