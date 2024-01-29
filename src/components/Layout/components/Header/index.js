import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { faCircleXmark, faSearch, faSpinner, faPlus, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import images from '~/assets/images';
import Styles from './Header.module.scss';
import Wrapper from '~/components/Popper/Wrapper';
import AccountItem from '~/components/Layout/components/AccountItem';
import Button from '~/components/Layout/components/Button';

const cx = classNames.bind(Styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);
    return (<header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='TikTok' />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                            <Wrapper>
                                <h4 className={cx('search-tittle')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
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
                    <Button text>
                        <FontAwesomeIcon className={cx('iconplus')} icon={faPlus}/>
                            Tải lên
                    </Button>
                    <Button round>Đăng nhập</Button>
                    <Button primary>Đăng nhập</Button>
                    <Button outline small>Đăng nhập</Button>
                    <Button outline large>Đăng nhập</Button>
                    <Button primary scroll><FontAwesomeIcon icon={faForwardStep}/></Button>
                </div>
            </div>
        </header>
    );
}

export default Header;