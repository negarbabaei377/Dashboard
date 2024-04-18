import style from './Navbar.module.scss';
import {
    SearchRounded,
    LanguageRounded,
    DarkModeOutlined,
    FullscreenExitOutlined,
    NotificationsActiveOutlined,
    ChatBubbleOutlineRounded,
    ListOutlined
} from '@mui/icons-material';

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.wrapper}>
                <div className={style.search}>
                    <input type="text"
                           placeholder="search..."/>
                    <SearchRounded/>
                </div>
                <div className={style.items}>
                    <div className={style.item}>
                        English
                        <LanguageRounded className={style.icon}/>
                    </div>
                    <div className={style.item}>
                        <DarkModeOutlined className={style.icon}/>
                    </div>
                    <div className={style.item}>
                        <FullscreenExitOutlined className={style.icon}/>
                    </div>
                    <div className={style.item}>
                        <NotificationsActiveOutlined className={style.icon}/>
                        <div className={style.counter}>1</div>
                    </div>
                    <div className={style.item}>
                        <ChatBubbleOutlineRounded className={style.icon}/>
                        <div className={style.counter}>2</div>
                    </div>
                    <div className={style.item}>
                        <ListOutlined className={style.icon}/>
                    </div>
                    <div className={style.item}>
                        <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
                             alt="admin avatar"
                             className={style.avatar}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

