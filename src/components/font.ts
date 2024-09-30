type FontPropsType = {
    Fmin: number
    Fmax: number
}

export const font = ({Fmin, Fmax}: FontPropsType) => `
        font-size: calc( (100vw - 425px) / (1440 - 425) * (${Fmax} - ${Fmin}) + ${Fmin}px) ;
`

