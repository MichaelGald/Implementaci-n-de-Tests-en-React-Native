import { useState, useEffect } from 'react';
import { Vibration } from 'react-native';

export const useTemporizador = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [customTime, setCustomTime] = useState(initialTime); // Tiempo personalizado ingresado
  const [barWidth, setBarWidth] = useState(100); // Para controlar el tamaño de la barra

  let intervalId: NodeJS.Timeout | null = null;

  useEffect(() => {
    // Solo actualizamos la barra cuando el temporizador esté en ejecución
    if (isRunning) {
      setBarWidth((timeLeft / customTime) * 100);
    }

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId!);
            setIsRunning(false);
            Vibration.vibrate(1000); // Vibracion al terminar
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId!);
    }

    return () => clearInterval(intervalId!);
  }, [isRunning, timeLeft, customTime]);

  const startTimer = () => {
    if (timeLeft === 0) setTimeLeft(customTime); // Restablecer si el tiempo se ha agotado
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(customTime);
  };

  const handleCustomTimeChange = (value: number) => {
    setCustomTime(value);
    if (!isRunning) { // Evitar que la barra cambie si el temporizador está corriendo
      setTimeLeft(value); // Restablecer el tiempo restante
      setBarWidth(100); 
    }
  };

  return {
    timeLeft,
    startTimer,
    pauseTimer,
    resetTimer,
    isRunning,
    customTime,
    setCustomTime: handleCustomTimeChange, // Usamos la funcion mejorada para manejar cambios de tiempo
    barWidth, // Para usarlo en la barra de progreso
  };
};
