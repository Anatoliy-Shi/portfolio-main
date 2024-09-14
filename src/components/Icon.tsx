import React from 'react';
import sprite from "../assets/image/sprite.svg";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string

}

export const Icon = (props:IconPropsType) => {
    const {width, height, viewBox, fill, stroke, iconId} = props

    return (
        <svg width={width || '36'}
             height={height || '36'}
             viewBox={viewBox || '0 0 36 36'}
             fill={fill || 'none'}
             stroke={stroke || 'none'}
             xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref={`${sprite}#${iconId}`} />
        </svg>
    );
};

