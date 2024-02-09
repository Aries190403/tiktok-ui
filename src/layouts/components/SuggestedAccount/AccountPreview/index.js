import classNames from 'classnames/bind';
import Styles from './AccountPreveiew.module.scss';
import Button from '~/layouts/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')}
                      src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6bb1278dbf803840a3dba02d8da33136.jpeg?lk3s=a5d48078&x-expires=1706702400&x-signature=WMmKVvN3Qq7w0YLvuDDitO78u8k%3D'
                      alt='avtar' />
                <Button primary small >Follow</Button>
            </div>
            <div className={cx('info')}>
                <p>
                    <span className={cx('username')}>data.nickname</span>
                    {/*{data.tick &&*/ <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>data.full_name</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')} >10M</strong>
                    <span className={cx('label')} >Followers</span>
                    <strong className={cx('value')} >10M</strong>
                    <span className={cx('label')} >Likes</span>
                </p>
            </div>
        </div>
    );

}

export default AccountPreview;