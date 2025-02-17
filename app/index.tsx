// TemporizadorApp.tsx
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from "@/styles/global-styles";
import { useTemporizador } from '@/hooks/UseTemporisador';
import TimeInput from '@/Components/TimeInput';
import ProgressBar from '@/Components/Progressbar';
import TimerButtons from '@/Components/TimerBottons';

const TemporizadorApp = () => {
  const {
    timeLeft,
    startTimer,
    pauseTimer,
    resetTimer,
    isRunning,
    customTime,
    setCustomTime,
    barWidth,
  } = useTemporizador(10); // 10 es el tiempo inicial en segundos

  return (
    <View style={globalStyles.container}>
      {/* Componente para ingresar el tiempo */}
      <TimeInput customTime={customTime} setCustomTime={setCustomTime} />

      {/* Mostrar el tiempo restante */}
      <Text style={globalStyles.timeText}>Tiempo: {timeLeft} s</Text>

      {/* Componente para ver barra de tiempo*/}
      <ProgressBar barWidth={barWidth} />

      {/* Componente para los controles */}
      <TimerButtons
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        resetTimer={resetTimer}
      />
    </View>
  );
};

export default TemporizadorApp;
