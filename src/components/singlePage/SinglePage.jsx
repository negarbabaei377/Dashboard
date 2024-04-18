import style from './SinglePage.module.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Chart, TableList} from "../index";

export const SinglePage = () => {
    return (
        <>
            <div className={style.top}>
                <div className={style.left}>
                    <div className={style.editButton}><MoreVertIcon/></div>
                    <h1 className={style.title}>Information</h1>
                    <div className={style.item}>
                        <img src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
                             alt="avatar"
                             className={style.itemImg}
                        />
                        <div className={style.details}>
                            <h1 className={style.itemTitle}>Jane Doe</h1>
                            <div className={style.itemDetail}>
                                <span className={style.itemKey}>Email:</span>
                                <span className={style.itemValue}>janedoe@gmail.com</span>
                            </div>
                            <div className={style.itemDetail}>
                                <span className={style.itemKey}>Phone:</span>
                                <span className={style.itemValue}>+1 2312 12 14</span>
                            </div>
                            <div className={style.itemDetail}>
                                <span className={style.itemKey}>Address:</span>
                                <span className={style.itemValue}>E1ton St. 234 garden Yd. NewYork</span>
                            </div>
                            <div className={style.itemDetail}>
                                <span className={style.itemKey}>Country:</span>
                                <span className={style.itemValue}>USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.right}>
                    <Chart aspect={3.5} title={'User Spending (Last 6 Month)'}/>
                </div>
            </div>
            <div className={style.bottom}>
                <h1 className={style.title}>Last Transactions</h1>
                <TableList/>
            </div>
        </>

    );
};

