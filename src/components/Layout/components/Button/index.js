import classNames from 'classnames/bind';
import Styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function Button({
                    to,
                    href,
                    children,
                    primary = false,
                    outline = false,
                    text = false,
                    round = false,
                    small = false,
                    scroll = false,
                    large = false,
                    onClick,
                    ...passProps
                }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, outline, text, round, small, large, scroll });
    return <Comp className={classes} {...props}>
        <span>{children}</span>
    </Comp>;
}

export default Button;