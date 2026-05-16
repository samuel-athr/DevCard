import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export type GroupItem = {
    id: string,
    name: string,
    colorCode: string,
}

type Props = {
    group: Array<GroupItem>
}

export function ButtonGroupColors({ group } : Props){
    const [selected, setSelected] = useState<GroupItem | null> (null)

    function hanldeSelect(item: GroupItem){
        setSelected(Item)
    }

    return (
        <View style={styles.buttonGroupContainer}>
            {group.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => {
                    hanldeSelect(item)
                }} style={styles.buttonGroupButtonContainer}>
                    <View style={[styles.buttonGroupButtonColorIndicator, {backgroundColor: item.colorCode}]} />
                    <Text style={styles.buttonGroupButtonText}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}