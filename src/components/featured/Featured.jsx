import style from './Featured.module.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Featured = () => {
    return (
        <div className={style.featured}>
            <div className={style.top}>
                <h1 className={style.title}>Total Revenue</h1>
                <MoreVertIcon className={style.icon}/>
            </div>
            <div className={style.bottom}>
                <div className={style.featuredChart}>
                    <CircularProgressbar value={70}
                                         text="70%"
                                         strokeWidth={5}/>
                </div>
                <p className={style.title}>Total sales made today</p>
                <p className={style.amount}>$420</p>
                <p className={style.description}>
                    Previous translations processing. last payments may not be included.</p>
                <div className={style.summary}>
                    <div className={style.item}>
                        <div className={style.itemTitle}>Target</div>
                        <div className={`${style.itemResult} ${style.negative}`}>
                            <KeyboardArrowDownIcon className={style.icon}/>
                            <div>$12.4k</div>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.itemTitle}>Last Week</div>
                        <div className={`${style.itemResult} ${style.positive}`}>
                            <KeyboardArrowUpIcon className={style.icon} />
                            <div>$12.4k</div>
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.itemTitle}>Last Month</div>
                        <div className={`${style.itemResult} ${style.positive}`}>
                            <KeyboardArrowUpIcon className={style.icon}/>
                            <div>$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

