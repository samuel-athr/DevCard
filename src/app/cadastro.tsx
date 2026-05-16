import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import { THEME } from "../styles/constants";
import { Button } from "../components/Buttons";
import { Input } from "../components/Input";
import { ButtonGroupColors, GroupItem } from "../components/ButtonGroupColors";

const colorOptions: GroupItem[] = [
    { id: "c1", name: "Azul", colorCode: "#3851cd" },
    { id: "c2", name: "Verde", colorCode: "#0ab026" },
    { id: "c3", name: "Roxo", colorCode: "#6f05ba" },
];

export default function CadastroScreen() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [anos, setAnos] = useState("");
    const [tecnologia, setTecnologia] = useState("");
    const [selectedColorId, setSelectedColorId] = useState<string | null>(null);
    const [errors, setErrors] = useState({
        nome: "",
        cargo: "",
        anos: "",
        tecnologia: "",
        cor: "",
    });

    function validateFields() {
        const nextErrors = {
            nome: "",
            cargo: "",
            anos: "",
            tecnologia: "",
            cor: "",
        };

        if (!nome.trim()) {
            nextErrors.nome = "Nome completo é obrigatório.";
        } else if (nome.trim().length < 3) {
            nextErrors.nome = "Informe pelo menos 3 caracteres.";
        }

        if (!cargo.trim()) {
            nextErrors.cargo = "Cargo é obrigatório.";
        }

        if (!anos.trim()) {
            nextErrors.anos = "Anos de experiência é obrigatório.";
        } else {
            const anosNumber = Number(anos);
            if (Number.isNaN(anosNumber) || anosNumber <= 0) {
                nextErrors.anos = "Informe um número maior que zero.";
            }
        }

        if (!tecnologia.trim()) {
            nextErrors.tecnologia = "Tecnologia favorita é obrigatória.";
        }

        if (!selectedColorId) {
            nextErrors.cor = "Escolha uma cor para o cartão.";
        }

        setErrors(nextErrors);
        return Object.values(nextErrors).every((value) => value === "");
    }

    function handleGenerateCard() {
        if (!validateFields()) {
            return;
        }

        const selectedColor = colorOptions.find((item) => item.id === selectedColorId)?.name ?? "Azul";

        router.push({
            pathname: "/preview",
            params: {
                nome: nome.trim(),
                cargo: cargo.trim(),
                empresa: empresa.trim(),
                anos: anos.trim(),
                tecnologia: tecnologia.trim(),
                cor: selectedColor,
            },
        });
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <KeyboardAvoidingView style={styles.avoider} behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Cadastro</Text>
                        <Text style={styles.subtitle}>Preencha seus dados de dev</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <Input
                            label="Nome completo"
                            placeholder="João Andrade"
                            value={nome}
                            onChangeText={setNome}
                            errorMessage={errors.nome}
                        />
                        <Input
                            label="Cargo"
                            placeholder="Desenvolvedor Mobile"
                            value={cargo}
                            onChangeText={setCargo}
                            errorMessage={errors.cargo}
                        />
                        <Input label="Empresa" placeholder="Univag" value={empresa} onChangeText={setEmpresa} />
                        <Input
                            label="Anos de experiência"
                            placeholder="4"
                            value={anos}
                            onChangeText={setAnos}
                            keyboardType="numeric"
                            errorMessage={errors.anos}
                        />
                        <Input
                            label="Tecnologia favorita"
                            placeholder="React Native"
                            value={tecnologia}
                            onChangeText={setTecnologia}
                            errorMessage={errors.tecnologia}
                        />
                    </View>

                    <Text style={styles.sectionLabel}>Cor do cartão</Text>
                    <ButtonGroupColors group={colorOptions} selectedId={selectedColorId} onSelect={setSelectedColorId} />
                    {!!errors.cor && <Text style={styles.errorText}>{errors.cor}</Text>}

                    <View style={styles.footerContainer}>
                        <Button label="Gerar Cartão" onPress={handleGenerateCard} variant="primary" />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: THEME.colors.foreground,
    },
    avoider: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 40,
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
    subtitle: {
        color: THEME.colors.subtitle,
        fontWeight: "400",
        fontSize: THEME.text.heading.h2,
        maxWidth: 320,
    },
    formContainer: {
        gap: 12,
    },
    sectionLabel: {
        color: THEME.colors.title,
        fontWeight: "700",
        marginTop: 8,
        marginBottom: 8,
    },
    errorText: {
        color: THEME.colors.error,
        fontWeight: "700",
    },
    footerContainer: {
        marginTop: 20,
    },
});