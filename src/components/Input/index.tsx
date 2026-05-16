import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles"

type Props = TextInputProps & {
    label : string,
    errorMessage?: string,
}

export function Input({label, errorMessage, ...TextInputProps} : Props) {
    return(
        <View style={styles.formGroup}>
            <Text style={styles.formlabel}> {label} </Text>
            <TextInput style={styles.formInput} placeholderTextColor={"#0000003b"}{...TextInputProps} />
            {!!errorMessage && (
                <Text style={styles.formError}>{errorMessage}</Text>
            )}
        </View>
    )
}