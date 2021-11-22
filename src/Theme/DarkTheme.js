import { lightTheme } from "./LightTheme";

export const DarkTheme = {
    ...lightTheme,
    colors: {
        header: "#1F2933",
        footer: "#1F2933",
        bodyBackground: "#323F4B",
        mainBackground: "#3E4C59",
        cardBackground: "#52606D",
        text: "#E4E7Eb",
        textHover: "#F5F7FA",
        boxShadowHover: `rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
        border: "1px solid #EFC9A4",
        borderBottom: "1px solid #616E7C",
        borderTop: "1px solid #616E7C",
        btnBackground: "#EFC9A4",
        btnBackgroundHover: "#02DAC4",
        btnBackgroundShadow: `rgba(0, 0, 0, 0.4) 0px 2px 4px,
            rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
            rgba(0, 0, 0, 0.2) 0px -3px 0px inset`,
    },
};
