import style from "./Home.module.scss"
import {Chart, Featured,Widget, TableList} from "../../components";
import {Layout} from "../../layout";

export const Home = () => {
    return (
        <Layout>
            <div className={style.widgets}>
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className={style.charts}>
                <Featured/>
                <Chart aspect={2.4}
                       title={'Last 6 Month (Revenue)'}/>
            </div>
            <div className={style.listContainer}>
                <div className={style.listTitle}>Latest Transactions</div>
                <TableList/>
            </div>
        </Layout>
    );
};

