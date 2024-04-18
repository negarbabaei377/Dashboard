import style from './NewUser.module.scss';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import {useState} from "react";

export const NewUser = ({inputs, title}) => {
    const [file, setFile] = useState();

    return (
        <>
            <div className={style.top}>
                <h1>{title}</h1>
            </div>
            <div className={style.bottom}>
                <div className={style.left}>
                    <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                         alt="no image"/>
                </div>
                <div className={style.right}>
                    <form>
                        <div className={style.formInput}>
                            <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className={style.icon}/></label>
                            <input type="file"
                                   id="file"
                                   onChange={e=>setFile(e.target.files[0])}
                                   style={{display: 'none'}}/>
                        </div>
                        {inputs?.map(item => {
                            return(
                                <div className={style.formInput} key={item.id}>
                                    <label>{item.label}</label>
                                    <input type={item.type}
                                           placeholder={item.placeholder}/>
                                </div>
                            )
                        })}
                        <button className={style.buttonStyle}>Send</button>
                    </form>
                </div>
            </div>
        </>
    );
}

