import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { SizeClass, SizeWeigh } from './constants';
import styles from './Text.module.scss';
export const Text = (props) => {
    const { children, className, color = 'white', align = 'left', size = 's', weigh = '400', as: Tag = 'p' } = props;
    const additionalClasses = [
        SizeClass[size],
        SizeWeigh[weigh],
        styles[color],
        styles[align],
        className,
    ];
    return (_jsx(Tag, { className: classNames(styles.text, additionalClasses), children: children }));
};
