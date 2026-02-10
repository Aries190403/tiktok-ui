import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const videos = [
    {
        id: 1,
        name: 'tiktok_vietnam',
        nickname: 'TikTok Việt Nam',
        description: 'Trend dance cuối tuần 🔥 #fyp #dance #tiktokvn',
        music: 'nhạc nền - TikTok Việt Nam',
        avatar:
            'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/2d4e36a99a4c90f5e5e4ec2f5f190023~tplv-tiktokx-cropcenter:100:100.jpeg',
        video:
            'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        likes: '127.5K',
        comments: '1,204',
        saves: '8,930',
        shares: '2,100',
    },
    {
        id: 2,
        name: 'daily.foodie',
        nickname: 'Daily Foodie',
        description: 'Bữa sáng 5 phút cho dân văn phòng 🍳 #food #easyrecipe',
        music: 'original sound - daily.foodie',
        avatar: 'https://i.pravatar.cc/120?img=11',
        video:
            'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: '89.2K',
        comments: '862',
        saves: '5,201',
        shares: '1,744',
    },
    {
        id: 3,
        name: 'city.walker',
        nickname: 'City Walker',
        description: 'Một vòng Sài Gòn buổi tối ✨ #saigon #travel',
        music: 'Night Walk - city.walker',
        avatar: 'https://i.pravatar.cc/120?img=33',
        video:
            'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: '210.7K',
        comments: '3,510',
        saves: '13.5K',
        shares: '4,329',
    },
];

function Home() {
    return (
        <div className={cx('wrapper')}>
            {videos.map((item) => (
                <article className={cx('feed-item')} key={item.id}>
                    <img className={cx('avatar')} src={item.avatar} alt={item.name} />
                    <div className={cx('content')}>
                        <header className={cx('meta')}>
                            <strong>{item.name}</strong>
                            <span>{item.nickname}</span>
                        </header>
                        <p className={cx('description')}>{item.description}</p>
                        <p className={cx('music')}>♪ {item.music}</p>

                        <div className={cx('video-group')}>
                            <video className={cx('video')} controls loop muted playsInline>
                                <source src={item.video} type='video/mp4' />
                            </video>
                            <div className={cx('actions')}>
                                <button>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                                <span>{item.likes}</span>

                                <button>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </button>
                                <span>{item.comments}</span>

                                <button>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </button>
                                <span>{item.saves}</span>

                                <button>
                                    <FontAwesomeIcon icon={faShare} />
                                </button>
                                <span>{item.shares}</span>
                            </div>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Home;
