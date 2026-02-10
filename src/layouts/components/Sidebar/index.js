import config from '~/config';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import { DiscoverIcon, FollowingIcon, FriendIcon, HomeIcon, ProfileIcon } from '~/components/Icon';
import SuggestedAccount from '~/layouts/components/SuggestedAccount';
import Button from '~/layouts/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='Dành cho bạn' to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title='Đang Follow' to={config.routes.following} icon={<FollowingIcon />} />
                <MenuItem title='Bạn bè' to={config.routes.friend} icon={<FriendIcon />} />
                <MenuItem title='Khám phá' to={config.routes.discover} icon={<DiscoverIcon />} />
                <MenuItem title='Hồ sơ' to={config.routes.me} icon={<ProfileIcon />} />
            </Menu>

            <div className={cx('login-box')}>
                <p>Đăng nhập để follow các nhà sáng tạo, thích video và xem bình luận.</p>
                <Button outline className={cx('login-btn')}>
                    Đăng nhập
                </Button>
            </div>

            <SuggestedAccount title='Tài khoản được đề xuất' />
            <SuggestedAccount title='Các tài khoản đang follow' />

            <footer className={cx('footer')}>
                <p>Giới thiệu · Bảng tin · Liên hệ · Sự nghiệp</p>
                <p>Trợ giúp · An toàn · Điều khoản · Quyền riêng tư</p>
                <span>© 2026 TikTok Clone UI</span>
            </footer>
        </aside>
    );
}

export default Sidebar;
