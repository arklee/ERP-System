import React, {Component} from 'react';
import {Row, Col, Descriptions, Divider, message, PageHeader} from "antd";
import axios from "axios";
import EditJudge from "./EditJudge";

class Judge extends Component {

    state = {judge:[]}

    componentDidMount() {
        axios.get('http://localhost:3000/judge')
            .then(response => {
                this.setState({judge:response.data})
            })
    }

    edit = (record) => {
        axios.post(`http://localhost:3000/postState?id=${this.props.id}`, record)
            .then(response => {
                message.success('修改成功')
                this.setState({judge:response.data})
            })
    }

    render() {
        const {judge} = this.state
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="评价管理"
                    subTitle="记录员工的历任HR对其评价"
                />
                <Divider/>
                {
                    judge.map(item => {
                        return (
                            <Row justify="space-around" align="middle">
                                <Col span={20}>
                                    <Descriptions title={"评价编号："+item.id} bordered>
                                        <Descriptions.Item  label="公司">{item.company}</Descriptions.Item>
                                        <Descriptions.Item  label="HR姓名">{item.hrName}</Descriptions.Item>
                                        <Descriptions.Item  label="HR ID">{item.hrID}</Descriptions.Item>
                                        <Descriptions.Item label="评价">{item.statement}</Descriptions.Item>
                                    </Descriptions>
                                </Col>
                                <Col span={2}>
                                    <EditJudge edit={this.edit} record={item}/>
                                </Col>
                                <Divider/>
                            </Row>
                        )
                    })
                }
            </div>
        );
    }
}

export default Judge;
