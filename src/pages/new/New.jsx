import {Layout} from "../../layout";
import {NewUser} from "../../components";

export const New = ({inputs, title}) => {
    return (
       <Layout>
           <NewUser inputs={inputs} title={title}/>
       </Layout>
    );
};

