import config from '~/config';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import { DiscoverIcon, FollowingIcon, FriendIcon, HomeIcon, ProfileIcon } from '~/components/Icon';
import SuggestedAccount from '~/layouts/components/SuggestedAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (<aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title='Dành cho bạn' to={config.routes.home} icon={<HomeIcon/>} />
            <MenuItem title='Đang Follow' to={config.routes.following} icon={<FollowingIcon/>} />
            <MenuItem title='Bạn bè' to={config.routes.friend} icon={<FriendIcon/>} />
            <MenuItem title='Khám phá' to={config.routes.discover} icon={<DiscoverIcon/>} />
            <MenuItem title='Hồ sơ' to={config.routes.me} icon={<ProfileIcon/>} />
        </Menu>
        <SuggestedAccount title="Các tài khoản đang follow"/>
        <p>Giới thiệu Bảng tin Liên hệ Sự nghiệp
            TikTok for Good Quảng cáo TikTok LIVE Creator NetworksDevelopers Minh bạch TikTok Rewards TikTok Embeds
            Trợ giúp An toàn Điều khoản Chính sách Quyền riêng tư Trung tâm quyền riêng tư Cổng thông tin Tác giả Hướng dẫn Cộng đồng
            Thêm</p>
    </aside>);
}

export default Sidebar;