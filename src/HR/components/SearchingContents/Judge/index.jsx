import React, {Component} from 'react';
import {Button, Descriptions, Divider, PageHeader} from "antd";
import axios from "axios";

class Judge extends Component {

    state = {judge:[]}

    componentDidMount() {
        axios.get('http://localhost:3000/judge')
            .then(response => {
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
                <Divider/>
                {
                    judge.map(item => {
                        console.log(item)
                        return (
                            <>
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
