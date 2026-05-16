import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create ({
    formGroup: {
        flexDirection: "column",
        gap: 4,
    },
    formlabel: {
        color: THEME.colors.title,
        fontWeight: "bold",
    },
    formInput: {
        borderRadius: THEME.radius.md,
        borderColor: THEME.colors.border,
        backgroundColor: THEME.colors.foreground,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        height: 45,
    },
    formError: {
        color: THEME.colors.error,
        fontWeight: "bold",
    },
})