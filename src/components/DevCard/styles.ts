import { StyleSheet } from "react-native";
import { THEME } from "../../styles/constants";

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#3783f6",
        borderRadius: THEME.radius.xl,
        padding: 32,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    cardAvatarContainer: {
        backgroundColor: "#9fc5f8",
        padding: 4,
        borderRadius: "100%",
    },
    cardAvatarSubContainer: {
        backgroundColor: "#f8fbff",
        borderRadius: "100%",
        height: 90,
        width: 90,
        justifyContent: "center",
        alignItems: "center",
    },
    cardAvatarLetter: {
        color: "#3783f6",
        fontSize: THEME.text.heading.h1,
        fontWeight: "bold",
    },
    cardTitle: {
        color: THEME.colors.foreground,
        fontSize: THEME.text.heading.h1,
        fontWeight: "bold",
    },
    cardText: {
        color: "#ffffffce",
        fontWeight: "300",
        fontSize: 16, 
    },
    cardCompany: {
        color: "#ffffffad",
        fontWeight: "300",
        fontSize: 14, 
    },
    cardSeparator: {
        height: 1,
        width: 250,
        backgroundColor: "#ffffff69",
        marginVertical: 16,
    },
    cardSubtitle: {
        color: "#ffffffce",
        fontWeight: "300",
        fontSize: 14, 
    },
    cardRole: {
        color: "#ffffffce",
        fontWeight: "600",
        fontSize: 26, 
    },
    cardbadgeContainer: {
        backgroundColor: "#ffd016",
        borderRadius: THEME.radius.xl,
        paddingHorizontal: 17,
        paddingVertical: 6,
    },
    cardBadgeText: {
        color: "#7d5101",
        fontWeight: "700",
        fontSize: 15,
        letterSpacing: 1,
    },
    cardTextGroup:{
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
    }
})