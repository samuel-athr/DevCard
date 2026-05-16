import {Text, View } from "react-native";
import { styles } from "./styles";

export function DevCard() {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    <Text style={styles.cardAvatarLetter}>S</Text>
                </View>
            </View>

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}>Samuel Arthur</Text>
                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>Desenvolvedor Web</Text>
                    <Text style={styles.cardCompany}>AppDev </Text>
                </View>
            </View>

            <View style={styles.cardSeparator} />

            <View>
                <Text style={styles.cardSubtitle}>Especialista em</Text>
                <Text style={styles.cardRole}>FrontEnd</Text>
            </View>

            <View style={[styles.cardbadgeContainer, { marginTop: 8 }]}>
                <Text style={styles.cardBadgeText}>Junior</Text>
            </View>

            <Text style={styles.cardSubtitle}>3 anos de experiência</Text>
        </View>
    )
}
