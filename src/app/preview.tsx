import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { THEME } from "../styles/constants";
import { Button } from "../components/Buttons";
import { DevCard } from "../components/DevCard";

type PreviewParams = {
    nome?: string;
    cargo?: string;
    empresa?: string;
    anos?: string;
    tecnologia?: string;
    cor?: string;
};

const colorMap: Record<string, string> = {
    Azul: "#3851cd",
    Verde: "#0ab026",
    Roxo: "#6f05ba",
};

export default function PreviewScreen() {
    const router = useRouter();
    const params = useLocalSearchParams<PreviewParams>();

    const nome = params.nome ?? "";
    const cargo = params.cargo ?? "";
    const empresa = params.empresa ?? "";
    const anos = params.anos ?? "0";
    const tecnologia = params.tecnologia ?? "";
    const cor = params.cor ?? "Azul";

    useEffect(() => {
        // if required params missing, go back to cadastro
        if (!params.nome || !params.cargo || !params.anos || !params.tecnologia || !params.cor) {
            router.replace("/cadastro");
        }
    }, [params, router]);

    const cardColor = colorMap[cor] ?? colorMap.Azul;
    const anosNumber = Number(anos);
    const badge = anosNumber >= 6
        ? { label: "Sênior", backgroundColor: "#ffd700", textColor: "#7d5101" }
        : anosNumber >= 3
            ? { label: "Pleno", backgroundColor: "#407bff", textColor: "#ffffff" }
            : { label: "Júnior", backgroundColor: "#808080", textColor: "#ffffff" };

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Seu Cartão</Text>
                </View>

                <DevCard
                    nome={nome}
                    cargo={cargo}
                    empresa={empresa}
                    tecnologia={tecnologia}
                    cor={cardColor}
                    nivelLabel={badge.label}
                    nivelBackground={badge.backgroundColor}
                    nivelTextColor={badge.textColor}
                    anos={anos}
                />

                <View style={styles.footerContainer}>
                    <Button label="Editar dados" variant="outline" onPress={() => router.back()} />
                    <Button label="Finalizar" variant="primary" onPress={() => router.replace("/sucesso")} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: THEME.colors.foreground,
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        gap: 20,
    },
    headerContainer: {
        gap: 6,
    },
    title: {
        color: THEME.colors.title,
        fontWeight: "bold",
        fontSize: THEME.text.heading.h1,
    },
    footerContainer: {
        marginTop: 20,
        gap: 12,
    },
});