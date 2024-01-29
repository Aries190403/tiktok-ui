import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')}
             src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6bb1278dbf803840a3dba02d8da33136.jpeg?lk3s=a5d48078&x-expires=1706702400&x-signature=WMmKVvN3Qq7w0YLvuDDitO78u8k%3D'
             alt='Avatar' />
        <div className={cx('info')}>
            <h4>
                <span className={cx('username')}>pun.2031224</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <p className={cx('name')}>Pun</p>
        </div>
    </div>;
}

export default AccountItem;