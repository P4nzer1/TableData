import { ReactNode } from 'react';

export type TextColor = 'white' | 'black' | 'grey';

export type TextAlign = 'center' | 'right' | 'left';

export type TextSize = 'xs'| 's' | 'm' | 'l' | 'xl';

export type HeaderTagType = 'p' | 'h1' | 'span' | 'td' | 'th';

export type TextWeigh = '300' | '400' | '500' | '700'

export interface TextProps {
    children?: ReactNode;
    weigh?: TextWeigh;
    className?: string;
    color?: TextColor;
    align?: TextAlign;
    size?: TextSize;
    as?: HeaderTagType;
}