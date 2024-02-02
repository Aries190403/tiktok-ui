import Button from '~/components/Layout/components/Button';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';

const cx = classNames.bind(Styles);

function MenuItem({ data, onClick }) {
    return(<Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>);
}

export default MenuItem;