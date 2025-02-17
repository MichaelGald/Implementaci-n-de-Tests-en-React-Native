import React from 'react';
import { View } from 'react-native';
import globalStyles from "@/styles/global-styles";

interface ProgressBarProps {
    barWidth: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ barWidth }) => {
    return (
        <View style={globalStyles.progressBar}>
            <View style={[globalStyles.progress, { width: `${barWidth}%` }]} testID='progress-bar' />
        </View>
    );
};

export default ProgressBar;
