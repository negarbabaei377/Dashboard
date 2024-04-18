import style from './Sidebar.module.scss';
import {Link} from "react-router-dom";
import {
    Dashboard,
    PersonOutlineOutlined,
    Category,
    ViewStreamRounded,
    LocalShippingRounded,
    QueryStatsRounded,
    NotificationsActiveOutlined,
    HealthAndSafetyOutlined,
    PsychologyAltOutlined,
    SettingsRounded,
    AccountCircleOutlined,
    LogoutOutlined
} from '@mui/icons-material';


export const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.top}>
                <Link to="/"
                      className={style.noStyle}>
                    <span className={style.logo}>ADMIN PANEL</span>
                </Link>
            </div>
            <hr/>
            <div className={style.center}>
                <ul>
                    <p className={style.title}>MAIN</p>
                    <Link to="/" className={style.noStyle}>
                        <li>
                            <Dashboard className={style.icon}/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className={style.title}>LISTS</p>
                    <Link to="/users"
                          className={style.noStyle}>
                        <li>
                            <PersonOutlineOutlined className={style.icon}/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products"
                          className={style.noStyle}>
                        <li>
                            <Category className={style.icon}/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <ViewStreamRounded className={style.icon}/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingRounded className={style.icon}/>
                        <span>Delivery</span>
                    </li>
                    <p className={style.title}>USEFUL</p>
                    <li>
                        <QueryStatsRounded className={style.icon}/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlined className={style.icon}/>
                        <span>Notifications</span>
                    </li>
                    <p className={style.title}>SERVICE</p>
                    <li>
                        <HealthAndSafetyOutlined className={style.icon}/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyAltOutlined className={style.icon}/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsRounded className={style.icon}/>
                        <span>Setting</span>
                    </li>
                    <p className={style.title}>USER</p>
                    <li>
                        <AccountCircleOutlined className={style.icon}/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlined className={style.icon}/>
                        <span>logout</span>
                    </li>
                </ul>
            </div>
            <div className={style.bottom}>
                <div className={style.colorOption}></div>
                <div className={style.colorOption}></div>
            </div>
        </div>
    );
};

