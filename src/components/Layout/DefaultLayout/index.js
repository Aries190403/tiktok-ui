import classNames from 'classnames/bind';
import Header from 'src/components/Layout/components/Header';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';
import style from './DefaultLayout.module.scss';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (<div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>
            <Sidebar />

            <div className={cx('content')}>{children}</div>
        </div>
    </div>);
}

export default DefaultLayout;