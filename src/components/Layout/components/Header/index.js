import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import {
    faCircleQuestion,
    faCircleXmark,
    faEllipsisVertical,
    faKeyboard,
    faLanguage,
    faLightbulb,
    faMoon,
    faPlus,
    faSearch,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images';
import Styles from './Header.module.scss';
import Wrapper from '~/components/Popper/Wrapper';
import AccountItem from '~/components/Layout/components/AccountItem';
import Button from '~/components/Layout/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(Styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo Live',
        to: '/',
    }, {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    }, {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/',
    }, {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    }, {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = false;
    return (<header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='TikTok' />
                </div>
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                            <Wrapper>
                                <h4 className={cx('search-tittle')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                            </Wrapper>
                        </div>
                    )}>

                    <div className={cx('search')}>
                        <input type='text' placeholder='Tìm kiếm' spellCheck='false' />
                        <button className={cx('clear')}><FontAwesomeIcon icon={faCircleXmark} /></button>
                        <FontAwesomeIcon className={cx('load')} icon={faSpinner} />
                        <button className={cx('search-btn')}><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    {currentUser ?
                        (
                            <>
                                <Button text>
                                    <FontAwesomeIcon className={cx('iconplus')} icon={faPlus} />
                                    Tải lên
                                </Button>
                                <button className={cx('icon-btn-user')}>
                                    <span><svg width='1em' data-e2e=''
                                               height='1em' viewBox='0 0 48 48' fill='currentColor'
                                               xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd'
                                                                                        clipRule='evenodd'
                                                                                        d='M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z'></path></svg></span>
                                </button>
                                <button className={cx('icon-btn-user2')}>
                                    <span><svg width='1em' data-e2e=''
                                               height='1em' viewBox='0 0 48 48' fill='currentColor'
                                               xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd'
                                                                                        clipRule='evenodd'
                                                                                        d='M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z'></path></svg></span>
                                </button>
                            </>
                        ) : (
                            <><Button text>
                                <FontAwesomeIcon className={cx('iconplus')} icon={faPlus} />
                                Tải lên
                            </Button>
                                <Button primary>Đăng nhập</Button>
                            </>
                        )}
                    {
                        currentUser ? (
                            <img className={cx('current-user-avatar')}
                                 src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6bb1278dbf803840a3dba02d8da33136.jpeg?lk3s=a5d48078&x-expires=1706702400&x-signature=WMmKVvN3Qq7w0YLvuDDitO78u8k%3D'
                                 alt='avatar' />

                        ) : (
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more')}><FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;