import React, {Component} from 'react';
import {Row, Col, Button, Descriptions, Divider, PageHeader, message} from "antd";
import axios from "axios";
import qs from 'qs';
import EditJudge from "./EditJudge";
import AddJudge from "./AddJudge";

class Judge extends Component {

    state = {judge:[]}

    componentDidMount() {
        axios.get(`http://localhost:3000/default/search_evaluation?id=${this.props.id}`)
            .then(response => {
                this.setState({judge:response.data})
            })
    }

    delete = (record) => () => {
        axios.post(`http://localhost:3000/default/evaluation_delete?idhr=${this.props.user}&id=${this.props.id}&idevaluation=${record.idevaluation}`)
            .then(response => {
                console.log(record.idevaluation)
                message.warning('删除成功')
                this.setState({judge:response.data})
            })
    }

    add = (record) => {
        record.id=this.props.id
        axios.post(`http://localhost:3000/default/evaluation_add`,
            qs.stringify({
                idhr:this.props.user,
                json1:JSON.stringify(record)
            })
        )
            .then(response => {
                message.success('添加成功')
                this.setState({judge:response.data})
            })
    }

    edit = (record) => {
        record.id=this.props.id
        axios.post(`http://localhost:3000/default/evaluation_modify`,
            qs.stringify({
                idhr:this.props.user,
                json1:JSON.stringify(record)
            })
        )
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
                    className="sit  e-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="评价管理"
                    subTitle="记录员工的历任HR对其评价"
                />
                <Row justify="end">
                    <Col>
                        <AddJudge add={this.add}/>
                    </Col>
                </Row>
                <Divider/>
                {
                    judge.map((item,index) => {
                        return (
                            <>
                                <Row justify="end" gutter={[48, 8]}>
                                    <Col>
                                        <EditJudge edit={this.edit} record={item} index={index}/>
                                    </Col>
                                    <Col>
                                        <Button onClick={this.delete(item)} type="dashed" danger>删除</Button>
                                    </Col>
                                </Row>
                                <Descriptions title={"评价编号："+item.idevaluation} bordered>
                                    <Descriptions.Item  label="HR ID">{item.idhr}</Descriptions.Item>
                                    <Descriptions.Item  label="评分">{item.credit}</Descriptions.Item>
                                    <Descriptions.Item  label="HR 信誉分">{item.hrscore}</Descriptions.Item>
                                    <Descriptions.Item label="评价">{item.evaluationinclusion}</Descriptions.Item>
                                </Descriptions>
                                <Divider/>
                            </>
                        )
                    })
                }
            </div>
        );
    }
}

export default Judge;
