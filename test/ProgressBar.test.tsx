import React from "react";
import { render } from "@testing-library/react-native";
import ProgressBar from "@/Components/Progressbar";

describe("ProgressBar", () => {
    it("Renderiza la barra de progreso con el ancho correcto", () => {
        const { getByTestId } = render(<ProgressBar barWidth={50} />);

        const progressBar = getByTestId("progress-bar");
        expect(progressBar.props.style[1].width).toBe("50%");
    });
});
