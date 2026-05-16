import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    nome: string;
    cargo: string;
    empresa?: string;
    tecnologia: string;
    cor: string;
    nivelLabel: string;
    nivelBackground: string;
    nivelTextColor: string;
    anos: string;
};

export function DevCard({ nome, cargo, empresa, tecnologia, cor, nivelLabel, nivelBackground, nivelTextColor, anos }: Props) {
    const initial = nome.trim().charAt(0).toUpperCase() || "D";
    const subtitle = empresa ? `${cargo} • ${empresa}` : cargo;

    return (
        <View style={[styles.cardContainer, { backgroundColor: cor }]}> 
            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    <Text style={styles.cardAvatarLetter}>{initial}</Text>
                </View>
            </View>
            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}>{nome}</Text>
                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>{subtitle}</Text>
                </View>
            </View>
            <View style={styles.cardSeparator} />
            <View>
                <Text style={styles.cardSubtitle}>Especialista em</Text>
                <Text style={styles.cardRole}>{tecnologia}</Text>
            </View>
            <View style={[styles.cardbadgeContainer, { backgroundColor: nivelBackground }]}> 
                <Text style={[styles.cardBadgeText, { color: nivelTextColor }]}>{nivelLabel}</Text>
            </View>
            <Text style={styles.cardSubtitle}>{anos} anos de experiência</Text>
        </View>
    );
}
