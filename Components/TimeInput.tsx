import React from 'react';
import { TextInput } from 'react-native';
import globalStyles from "@/styles/global-styles";

interface TimeInputProps {
    customTime: number;
    setCustomTime: (value: number) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ customTime, setCustomTime }) => {
    return (
        <TextInput
            style={globalStyles.input}
            keyboardType="numeric"
            value={customTime.toString()}
            onChangeText={(text) => setCustomTime(Number(text) || 0)}
            placeholder="Tiempo (s)"
            placeholderTextColor="gray"
        />
    );
};

export default TimeInput;
