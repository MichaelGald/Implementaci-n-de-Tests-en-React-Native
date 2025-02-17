import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { useTemporizador } from "@/hooks/UseTemporisador";
import TemporizadorApp from "../app/index";

// Mockeamos el hook para pruebas
jest.mock("@/hooks/UseTemporisador", () => ({
    useTemporizador: jest.fn(),
}));

describe("TemporizadorApp", () => {
    let mockHookValues: any;

    beforeEach(() => {
        mockHookValues = {
            timeLeft: 10,
            isRunning: false,
            startTimer: jest.fn(),
            pauseTimer: jest.fn(),
            resetTimer: jest.fn(),
            customTime: 10,
            setCustomTime: jest.fn(),
            barWidth: 100,
        };

        (useTemporizador as jest.Mock).mockReturnValue(mockHookValues);
    });

    it("Renderiza correctamente los componentes principales", () => {
        const { getByText, getByPlaceholderText } = render(<TemporizadorApp />);

        expect(getByPlaceholderText("Tiempo (s)")).toBeTruthy();
        expect(getByText("Tiempo: 10 s")).toBeTruthy();
        expect(getByText("Iniciar")).toBeTruthy();
        expect(getByText("Reiniciar")).toBeTruthy();
    });

    it("Cambia el texto del botón de inicio cuando el temporizador está corriendo", () => {
        mockHookValues.isRunning = true;
        const { getByText } = render(<TemporizadorApp />);

        expect(getByText("Pausar")).toBeTruthy();
    });

    it("Llama a `startTimer` cuando se presiona el botón de inicio", () => {
        const { getByText } = render(<TemporizadorApp />);
        fireEvent.press(getByText("Iniciar"));

        expect(mockHookValues.startTimer).toHaveBeenCalled();
    });

    it("Llama a `pauseTimer` cuando se presiona el botón de pausa", () => {
        mockHookValues.isRunning = true;
        const { getByText } = render(<TemporizadorApp />);
        fireEvent.press(getByText("Pausar"));

        expect(mockHookValues.pauseTimer).toHaveBeenCalled();
    });

    it("Llama a `resetTimer` cuando se presiona el botón de reinicio", () => {
        const { getByText } = render(<TemporizadorApp />);
        fireEvent.press(getByText("Reiniciar"));

        expect(mockHookValues.resetTimer).toHaveBeenCalled();
    });

    it("Permite modificar el tiempo ingresando un número en la caja de texto", () => {
        const { getByPlaceholderText } = render(<TemporizadorApp />);
        const input = getByPlaceholderText("Tiempo (s)");

        fireEvent.changeText(input, "15");

        expect(mockHookValues.setCustomTime).toHaveBeenCalledWith(15);
    });
});
