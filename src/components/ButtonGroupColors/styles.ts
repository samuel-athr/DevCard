import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create({
        buttonGroupContainer : {
        flexDirection: "row",
        gap:8,
        alignItems: "center",
    },
    buttonGroupButtonContainer : {
        borderRadius: THEME.radius.md,
        borderWidth: 2,
        borderColor: "#3851cd",
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        flex: 1,
    },
    button : {},
    buttonGroupButtonColorIndicator : {
        height: 16,
        width: 16,
        borderRadius: "100%",
        backgroundColor: "#3851cd",
    },
    buttonGroupButtonText : {
        color: "#3851cd",
        fontWeight: "bold",
    },
})