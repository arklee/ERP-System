import {Result} from "antd";
import NewDocument from "../NewDocument";

function SuccessCreate(props) {
    if (props.isSuccess === true) return (
        <div>
            <Result
                status="success"
                title="录入成功"
                subTitle="姓名：李翔、身份证号：342421199502030715的员工信息已成功录入，具体信息如下"
            />
            <NewDocument info={props.info}/>
        </div>
    )
    else return (
        <>
            待定
        </>
    )
}

export default SuccessCreate
