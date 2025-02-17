
import { useTemporizador } from '@/hooks/UseTemporisador';
import { act, renderHook } from '@testing-library/react-native';

jest.useFakeTimers();

describe('useTemporizador Hook', () => {
  it('debe iniciar y decrementar el tiempo correctamente', () => {
    const { result } = renderHook(() => useTemporizador(10));

    act(() => {
      result.current.startTimer();
    });

    expect(result.current.isRunning).toBe(true);

    act(() => {
      jest.advanceTimersByTime(3000); // Avanza 3 segundos
    });

    expect(result.current.timeLeft).toBe(7);
  });

  it('debe pausar correctamente', () => {
    const { result } = renderHook(() => useTemporizador(10));

    act(() => {
      result.current.startTimer();
    });

    act(() => {
      jest.advanceTimersByTime(2000); // Avanza 2 segundos
      result.current.pauseTimer();
    });

    expect(result.current.isRunning).toBe(false);
    expect(result.current.timeLeft).toBe(8);
  });

  it('debe reiniciar el temporizador', () => {
    const { result } = renderHook(() => useTemporizador(10));

    act(() => {
      result.current.startTimer();
      jest.advanceTimersByTime(5000); // Avanza 5 segundos
      result.current.resetTimer();
    });

    expect(result.current.isRunning).toBe(false);
    expect(result.current.timeLeft).toBe(10);
  });

  it('debe permitir cambiar el tiempo personalizado', () => {
    const { result } = renderHook(() => useTemporizador(10));

    act(() => {
      result.current.setCustomTime(20);
    });

    expect(result.current.customTime).toBe(20);
  });
});
