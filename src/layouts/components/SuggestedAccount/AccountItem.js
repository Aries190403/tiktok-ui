import classNames from 'classnames/bind';
import Style from './SuggestedAccount.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Popper';
import AccountPreview from '~/layouts/components/SuggestedAccount/AccountPreview';

const cx = classNames.bind(Style);

function AccountItem() {

    const renderReview = (props) => {
        return (<div tabIndex="-1" {...props}>
            <Wrapper>
                <AccountPreview/>
            </Wrapper>
        </div>);
    };

    return <Tippy
        interactive
        offset={[50,0]}
        delay={[800, 0]}
        placement='bottom'
        render={renderReview}
    >
        <div className={cx('account-item')}>
            <Image className={cx('avatar')}
                   src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6bb1278dbf803840a3dba02d8da33136.jpeg?lk3s=a5d48078&x-expires=1706702400&x-signature=WMmKVvN3Qq7w0YLvuDDitO78u8k%3D'
                   alt='' />
            <div className={cx('info')}>
                <h4>
                    <span className={cx('username')}>data.nickname</span>
                    {/*{data.tick &&*/ <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('name')}>data.full_name</p>
            </div>
        </div>
    </Tippy>;
}

AccountItem.propTypes = {};

export default AccountItem;