import {Result} from "antd";
import NewDocument from "../NewDocument";

function SuccessCreate(props) {
    if (props.isSuccess === true) return (
        <div>
            <Result
                status="success"
                title="录入成功"
                subTitle={"姓名："+props.info.name+"、身份证号："+props.info.id+"的员工信息已成功录入，具体信息如下"}
            />
            <NewDocument info={props.info}/>
        </div>
    )
    else return (
        <div>
            <Result
                status="info"
                title="点击上方按钮录入员工信息"
                subTitle="内容示例如下"
            />
            <NewDocument info={props.info}/>
        </div>
    )
}

export default SuccessCreate
