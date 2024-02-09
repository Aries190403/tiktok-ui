import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return <NavLink to={to} className={(nav)=>cx('menu-items',{active:nav.isActive})}>
        <div className={cx('icon')}>{icon}</div>
        <span className={cx('title')} >{title}</span>
    </NavLink>;
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
};

export default MenuItem;