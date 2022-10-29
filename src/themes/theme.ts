export interface Theme {
    colors: {
        // General Colors
        primary: string;
        secondary: string;
        danger: string;
        success: string;
        info: string;
        dark: string;
        light: string;

        //Special colors
        "app.background": string;
        "app.foreground": string;
        "editorHeader.background": string;
        "editorHeader.foreground": string;
        "editorHeader.active.background": string;
        "editorHeader.active.foreground": string;
        "tab.foreground": string;
        "header.background": string;
        "header.foreground": string;
        "gutter": string;
    }
}