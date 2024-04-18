import style from './DataTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from '../../dataTableSource'
import {Link} from "react-router-dom";


 export const DataTable = () => {

    return (
        <div className={style.dataTable}>
            <div className={style.title}>
                List of users
                <Link to='/users/new' className={style.link}>Add New User</Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[9, 10]}
                checkboxSelection
            />
        </div>
    );
};

