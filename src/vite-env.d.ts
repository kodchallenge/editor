/// <reference types="vite/client" />
import {Theme as KodTheme} from './components/UI/themes/theme'

declare module '@emotion/react' {
    export interface Theme extends KodTheme {}
}