import style from './Widget.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export const Widget = ({type}) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See All Users',
                icon: <PersonOutlineIcon className={style.icon}
                                         style={{
                                             color: 'crimson',
                                             backgroundColor: "rgba(255, 0, 0, 0.2)"
                                         }}
                />,
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View All Orders',
                icon: <ShoppingCartOutlinedIcon className={style.icon}
                                                style={{
                                                    color: 'goldenrod',
                                                    backgroundColor: "rgba(218, 165, 32, 0.2)"
                                                }}/>,
            };
            break;
        case 'earning':
            data = {
                title: 'EARNING',
                isMoney: true,
                link: 'View Net Earnings',
                icon: <MonetizationOnOutlinedIcon className={style.icon}
                                                  style={{
                                                      color: 'green',
                                                      backgroundColor: "rgba(0, 128, 0, 0.2)"
                                                  }}/>,
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See Deatils',
                icon: <AccountBalanceWalletOutlinedIcon className={style.icon} style={{
                    color: 'purple',
                    backgroundColor: "rgba(128, 0, 128, 0.2)"
                }}/>,
            };
            break;
        default:
            break;
    }

    return (
        <div className={style.widget}>
            <div className={style.left}>
                <span className={style.title}>{data.title}</span>
                <span className={style.counter}>{data.isMoney && '$'}{amount}</span>
                <span className={style.link}>{data.link}</span>
            </div>
            <div className={style.right}>
                <div className={`${style.percentage} ${style.positive}`}>
                    <KeyboardArrowUpIcon/>
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

