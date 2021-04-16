import React, {Component} from 'react';
import {Row, Col, Button, Descriptions, Divider, PageHeader, message} from "antd";
import axios from "axios";
import EditJudge from "./EditJudge";
import AddJudge from "./AddJudge";

class Judge extends Component {

    state = {judge:[]}

    componentDidMount() {
        axios.get(`http://localhost:3000/judge?id=${this.props.id}`)
            .then(response => {
                this.setState({judge:response.data})
            })
    }

    delete = (record) => () => {
        axios.post(`http://localhost:3000/judge/delete?user=${this.props.user}&id=${this.props.id}`, record)
            .then(response => {
                message.warning('删除成功')
                this.setState({judge:response.data})
            })
    }

    add = (record) => {
        axios.post(`http://localhost:3000/judge/add?user=${this.props.user}&id=${this.props.id}`, record)
            .then(response => {
                message.success('添加成功')
                this.setState({judge:response.data})
            })
    }

    edit = (record) => {
        axios.post(`http://localhost:3000/judge/edit?user=${this.props.user}&id=${this.props.id}`, record)
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
                    judge.map(item => {
                        console.log(item)
                        return (
                            <>
                                <Row justify="end" gutter={[48, 8]}>
                                    <Col>
                                        <EditJudge edit={this.edit} record={item}/>
                                    </Col>
                                    <Col>
                                        <Button onClick={this.delete(item)} type="dashed" danger>删除</Button>
                                    </Col>
                                </Row>
                                <Descriptions title={"评价编号："+item.id} bordered>
                                    <Descriptions.Item  label="公司">{item.company}</Descriptions.Item>
                                    <Descriptions.Item  label="HR姓名">{item.hrName}</Descriptions.Item>
                                    <Descriptions.Item  label="HR ID">{item.hrID}</Descriptions.Item>
                                    <Descriptions.Item label="评价">{item.statement}</Descriptions.Item>
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
