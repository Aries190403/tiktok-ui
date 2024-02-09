import classNames from 'classnames/bind';
import Style from'./SuggestedAccount.module.scss';
import PropTypes from 'prop-types';
import AccountItem from '~/layouts/components/SuggestedAccount/AccountItem';

const cx=classNames.bind(Style);
function SuggestedAccount({title}){
    return <div className={cx('wrapper')}>
        <p className={cx('title')} >{title}</p>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <AccountItem/>
        <p className={cx('load-more')}>Xem thêm</p>
    </div>;
}

SuggestedAccount.propTypes={
title:PropTypes.string.isRequired,
}

export default SuggestedAccount;