import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export interface IWorkMaxTheme {
    colors: { 
        active: string
        lightActive: string
        error: string
        lightError: string
        warning: string
        lightWarning: string
        waiting: string
        text: string
        activeText: string
        errorText: string
        warningText: string
        activeCancelButton: string
        pressedCancelButton: string
        inactiveButton: string
        borderColor: string
        helpText: string
        gridRowBG: string
        fieldBorder: string
        altGridRowBG: string
        subTitle: string
        normalIcon: string
    }
    components: {
        searchBarShadow: string
        cardShadow: string
        pageShadow: string
    }
    font: {
        style: {
            normal: string
            emphasis: string
        }
        weight: {
            normal: string
            bold: string
        }
    }
    fontSizes: {
        small: number
        normal: number
        large: number
        x_large: number
        title: number
    }
    fonts: string[]
}

export enum ClientAreaSize {
    none,
    xSmall,
    small,
    medium,
    large,
    xLarge
};

const colors = {
    green: '#79A949',
    lightGreen: '#85B554',
    red: '#9B3E38',
    lightRed: '#B23D39',
    orange: '#F08023',
    lightOrange: '#FF9C4A',
    yellow: '#F2C94C',
    gray: {
        _4D: '#4D4D4D',
        _52: '#525252',
        _5A: '#5A5A5A',
        A1: '#A1A1A1',
        BE: '#BEBEBE',
        C1: '#C1C1C1',
        CC: '#CCCCCC',
        DB: '#DBDBDB',
        D9: '#D9D9D9',
        E9: '#E9E9E9',
        F1: '#F1F1F1',
        F2: '#F2F2F2',
        FF: '#FFFFFF',
    }
}

const shadows = {
    normal: '0 1px 4px #cccccc',
}



export const WorkMaxTheme: IWorkMaxTheme = {
    colors: { 
        active: colors.green,
        lightActive: colors.lightGreen,
        error: colors.red,
        lightError: colors.lightRed,
        warning: colors.orange,
        lightWarning: colors.lightOrange, 
        waiting: colors.yellow,
        // gray
        text: colors.gray._4D,
        activeText: colors.green, 
        errorText: colors.red,
        warningText: colors.orange,
        activeCancelButton: colors.gray._52,
        pressedCancelButton: colors.gray.A1,
        inactiveButton: colors.gray.CC,
        borderColor: colors.gray.DB,
        helpText: colors.gray.F2,
        gridRowBG: colors.gray.F2,
        fieldBorder: colors.gray.D9,
        altGridRowBG: colors.gray.FF,
        subTitle: colors.gray._52,
        normalIcon: colors.gray._5A,
    },
    components: {
        searchBarShadow: shadows.normal,
        cardShadow: shadows.normal, 
        pageShadow: shadows.normal,
    },
    font: {
        style: {
            normal: 'normal',
            emphasis: 'italic',
        },
        weight: {
            normal: 'normal',
            bold: 'bold'
        },
    },
    fontSizes: {
        small: 10,
        normal: 15,
        large: 20,
        x_large: 24,
        title: 36,
    },
    fonts: ['Open Sans', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', "Geneva", "Verdana", "sans-serif"],
}

type WorkMaxThemeProviderProps = {
    children: React.ReactChild | React.ReactChildren
}

const WorkMaxThemeProvider = ({ children }: WorkMaxThemeProviderProps) => {
    return (
        <ThemeProvider theme={WorkMaxTheme}>
            {children}
        </ThemeProvider>
    )
}

export default WorkMaxThemeProvider;