import React, {Component} from 'react';
import {Row, Col, Descriptions, Divider, message, PageHeader} from "antd";
import axios from "axios";
import EditJudge from "./EditJudge";
import qs from "qs";

class Judge extends Component {

    state = {judge:[]}

    componentDidMount() {
        axios.get(`http://localhost:3000/default/evaluation_inquiry?id=${this.props.id}`)
            .then(response => {
                this.setState({judge:response.data})
            })
    }

    edit = (record) => {
        axios.post(`http://localhost:3000/default/postState?id=${this.props.id}`, qs.stringify({json1:record}))
            .then(response => {
                message.success('申诉成功')
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
                                    <Descriptions title={"ID为 "+item.idevaluation+" 的评价"} bordered>
                                        <Descriptions.Item  label="HR ID" span={2}>{item.idhr}</Descriptions.Item>
                                        <Descriptions.Item  label="HR 信誉分">{item.hrscore}</Descriptions.Item>
                                        <Descriptions.Item label="评价">{item.evaluationinclusion}</Descriptions.Item>
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
