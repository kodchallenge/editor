import { editor } from 'monaco-editor';

export const OneDark: editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    rules: [
        {
            token: "comment",
            foreground: '#5c6370',
            fontStyle: "italic",
        },
        {
             foreground: "#e5c07b",
             fontStyle: "bold",
             token: "constant"
          },
          {
             foreground: "#e5c07b",
             token: "entity"
          },
          {
             foreground: "#c678dd",
             token: "keyword"
          },
          {
             foreground: "a71d5d",
             fontStyle: "italic",
             token: "storage"
          },
          {
             foreground: "#98c379",
             token: "string | punctuation.definition.string"
          },
          {
             foreground: "691c97",
             token: "support"
          },
          {
             foreground: "#e06c75",
             token: "variable"
          },
          {
             foreground: "794938",
             token: "punctuation.separator"
          },
          {
             foreground: "b52a1d",
             fontStyle: "bold italic underline",
             token: "invalid.deprecated"
          },
          {
             foreground: "f8f8f8",
             background: "b52a1d",
             fontStyle: "italic underline",
             token: "invalid.illegal"
          },
          {
             foreground: "#98c379",
             background: "6f8bba26",
             token: "string source"
          },
          {
             foreground: "#98c379",
             fontStyle: "bold",
             token: "string constant"
          },
          {
             foreground: "#98c379",
             token: "string variable"
          },
          {
             foreground: "#98c379",
             token: "string.regexp"
          },
          {
             foreground: "cf5628",
             fontStyle: "bold italic",
             token: "string.regexp.character-class"
          },
          {
             foreground: "cf5628",
             fontStyle: "bold italic",
             token: "string.regexp constant.character.escaped"
          },
          {
             foreground: "cf5628",
             fontStyle: "bold italic",
             token: "string.regexp source.ruby.embedded"
          },
          {
             foreground: "cf5628",
             fontStyle: "bold italic",
             token: "string.regexp string.regexp.arbitrary-repitition"
          },
          {
             foreground: "811f24",
             fontStyle: "bold",
             token: "string.regexp constant.character.escape"
          },
          {
             background: "6f8bba26",
             token: "text source"
          },
          {
             foreground: "693a17",
             token: "support.function"
          },
          {
             foreground: "b4371f",
             token: "support.constant"
          },
          {
             foreground: "234a97",
             token: "support.variable"
          },
          {
             foreground: "693a17",
             token: "markup.list"
          },
          {
             foreground: "19356d",
             fontStyle: "bold",
             token: "markup.heading | markup.heading entity.name"
          },
          {
             foreground: "0b6125",
             background: "bbbbbb30",
             fontStyle: "italic",
             token: "markup.quote"
          },
          {
             foreground: "080808",
             fontStyle: "italic",
             token: "markup.italic"
          },
          {
             foreground: "080808",
             fontStyle: "bold",
             token: "markup.bold"
          },
          {
             foreground: "080808",
             fontStyle: "underline",
             token: "markup.underline"
          },
          {
             foreground: "234a97",
             fontStyle: "italic underline",
             token: "markup.link"
          },
          {
             foreground: "234a97",
             background: "bbbbbb30",
             token: "markup.raw"
          },
          {
             foreground: "b52a1d",
             token: "markup.deleted"
          },
          {
             foreground: "19356d",
             background: "dcdcdc",
             fontStyle: "bold",
             token: "meta.separator"
          }
    ],
    colors: {
         "editor.background": "#282c34",
         "editor.findMatchBackground": "#42557b",
         "editor.findMatchBorder": "#457dff",
         "editor.findMatchHighlightBackground": "#6199ff2f",
         "editor.foreground": "#e06c75",
         "editorBracketHighlight.foreground1": "#d19a66",
         "editorBracketHighlight.foreground2": "#c678dd",
         "editorBracketHighlight.foreground3": "#56b6c2",
         "editorHoverWidget.highlightForeground": "#61afef",
         "editorInlayHint.foreground": "#e5c07b",
         "editorInlayHint.background": "#2c313c",
         "editor.lineHighlightBackground": "#2c313c",
         "editorLineNumber.activeForeground": "#e06c75",
         "editorGutter.addedBackground": "#109868",
         "editorGutter.deletedBackground": "#9A353D",
         "editorGutter.modifiedBackground": "#948B60",
         "editorOverviewRuler.addedBackground": "#109868",
         "editorOverviewRuler.deletedBackground": "#9A353D",
         "editorOverviewRuler.modifiedBackground": "#948B60",
         "editor.selectionBackground": "#67769660",
         "editor.selectionHighlightBackground": "#ffffff10",
         "editor.selectionHighlightBorder": "#dddddd",
         "editor.wordHighlightBackground": "#d2e0ff2f",
         "editor.wordHighlightBorder": "#7f848e",
         "editor.wordHighlightStrongBackground": "#abb2bf26",
         "editor.wordHighlightStrongBorder": "#7f848e",
         "editorBracketMatch.background": "#515a6b",
         "editorBracketMatch.border": "#515a6b",
         "editorCursor.background": "#ffffffc9",
         "editorCursor.foreground": "#528bff",
         "editorError.foreground": "#c24038",
         "editorGroup.background": "#181a1f",
         "editorGroup.border": "#181a1f",
         "editorGroupHeader.tabsBackground": "#21252b",
         "editorHoverWidget.background": "#21252b",
         "editorHoverWidget.border": "#181a1f",
         "editorIndentGuide.activeBackground": "#c8c8c859",
         "editorIndentGuide.background": "#3b4048",
         "editorLineNumber.foreground": "#495162",
         "editorMarkerNavigation.background": "#21252b",
         "editorRuler.foreground": "#abb2bf26",
         "editorSuggestWidget.background": "#21252b",
         "editorSuggestWidget.border": "#181a1f",
         "editorSuggestWidget.selectedBackground": "#2c313a",
         "editorWarning.foreground": "#d19a66",
         "editorWhitespace.foreground": "#ffffff1d",
         "editorWidget.background": "#21252b",
    },
}