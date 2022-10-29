/// <reference types="vite/client" />
import {Theme as KodTheme} from './themes/theme'

declare module '@emotion/react' {
    export interface Theme extends KodTheme {}
}