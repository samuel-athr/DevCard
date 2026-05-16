import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export type GroupItem = {
    id: string;
    name: string;
    colorCode: string;
};

type Props = {
    group: GroupItem[];
    selectedId: string | null;
    onSelect: (id: string) => void;
};

export function ButtonGroupColors({ group, selectedId, onSelect }: Props) {
    return (
        <View style={styles.buttonGroupContainer}>
            {group.map((item) => {
                const isSelected = item.id === selectedId;
                return (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => onSelect(item.id)}
                        style={[styles.buttonGroupButtonContainer, isSelected && styles.buttonSelected]}
                    >
                        <View style={[styles.buttonGroupButtonColorIndicator, { backgroundColor: item.colorCode }]} />
                        <Text style={[styles.buttonGroupButtonText, isSelected && styles.buttonGroupButtonTextSelected]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}