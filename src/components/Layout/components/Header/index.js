import classNames from 'classnames/bind';
import { faCircleXmark, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(Styles);

function Header() {
    return (<header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='TikTok' />
                </div>
                <div className={cx('search')}>
                    <input type='text' placeholder='Tìm kiếm' spellCheck='false' />
                    <button className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    <FontAwesomeIcon className={cx('load')} icon={faSpinner} />
                    <button className={cx('search-btn')}><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className={cx('actions')}>

                </div>
            </div>
        </header>
    );
}

export default Header;