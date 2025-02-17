import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import globalStyles from "@/styles/global-styles";

interface TimerButtonsProps {
  isRunning: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const TimerButtons: React.FC<TimerButtonsProps> = ({
  isRunning,
  startTimer,
  pauseTimer,
  resetTimer,
}) => {
  return (    <>
      {/* Botón de inicio/pausa */}
      <TouchableOpacity
        onPress={isRunning ? pauseTimer : startTimer}
        style={[globalStyles.button, { backgroundColor: isRunning ? 'red' : 'green' }]}
      >
        <Text style={globalStyles.textButton}>
          {isRunning ? 'Pausar' : 'Iniciar'}
        </Text>
      </TouchableOpacity>

      {/* Botón de reinicio */}
      <TouchableOpacity
        onPress={resetTimer}
        style={[globalStyles.button, { backgroundColor: 'blue' }]}
      >
        <Text style={globalStyles.textButton}>Reiniciar</Text>
      </TouchableOpacity>
    </>
  );
};

export default TimerButtons;
