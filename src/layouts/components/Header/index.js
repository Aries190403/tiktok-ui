import classNames from 'classnames/bind';
import {
    faArrowRightToBracket,
    faBookmark,
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faLightbulb,
    faMoon,
    faPlus,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Styles from './Header.module.scss';
import Button from '~/layouts/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, NotificationIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from '~/layouts/components/Search';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(Styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo Live',
        to: '/live',
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
        to: '/help',
    }, {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    }, {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/profile',
    }, {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Yêu thích',
        to: '/favorite',
    }, {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận Xu',
        to: '/claim-coin',
    }, {
        icon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/studio',
    }, {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sang tạo LIVE',
        to: '/live',
    }, {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEMS.slice(1, MENU_ITEMS.length)
    , {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Đăng xuất',
        href: '/logout',
        separate: true,
    },
];

function Header() {

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = false;
    return (<header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <Image src={images.logo} alt='TikTok' />
                    </Link>
                </div>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ?
                        (
                            <>
                                <Button text>
                                    <FontAwesomeIcon className={cx('iconplus')} icon={faPlus} />Tải lên
                                </Button>
                                <Tip content='Tin nhắn' placement='bottom'>
                                    <button className={cx('icon-btn-user')}>
                                        <MessageIcon />
                                    </button>
                                </Tip>
                                <Tip content='Hộp thư' placement='bottom'>

                                    <button className={cx('icon-btn-user2')}>
                                        <NotificationIcon />
                                        <sup className={cx('sup-badge')}>24</sup>
                                    </button>
                                </Tip>
                            </>
                        ) : (
                            <><Button text>
                                <FontAwesomeIcon className={cx('iconplus')} icon={faPlus} />
                                Tải lên
                            </Button>
                                <Button primary to="/">Đăng nhập</Button>
                            </>
                        )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {
                            currentUser ? (
                                <Image className={cx('current-user-avatar')}
                                       src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6bb1278dbf803840a3dba02d8da33136.jpeg?lk3s=a5d48078&x-expires=1706702400&x-signature=WMmKVvN3Qq7w0YLvuDDitO78u8k%3D'
                                       alt='avatar'
                                       fallback='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png'
                                />
                            ) : (
                                <button className={cx('more')}><FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;