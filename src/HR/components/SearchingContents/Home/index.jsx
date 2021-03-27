import React, {Component} from 'react';
import {Row, Col, Card, Divider} from 'antd';

import p1 from './1.jpg'
import p2 from './2.jpg'
import p3 from './3.jpg'

import './index.css'

const { Meta } = Card;

class Home extends Component {
    render() {
        return (
            <div className="site-card-wrapper">
                <h1 className='home-title'>与今目标-员工查合作的优秀企业</h1>
                <h3 className='home-subtitle'>多家国内优质企业与我们有合作，在这里您可以随意的查询这些企业的员工信息......</h3>
                <Divider/>
                <Row gutter={[16, 48]}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 360 }}
                            cover={<img alt="example" src={p1} />}
                            title="D公司"
                        >
                            <Meta title="D公司介绍......x" description="www.baidu.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 360 }}
                            cover={<img alt="example" src={p3} />}
                            title="C公司"
                        >
                            <Meta title="C公司介绍......x" description="www.bilibili.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 360 }}
                            cover={<img alt="example" src={p2} />}
                            title="B公司"
                        >
                            <Meta title="B公司介绍......x" description="www.douyu.tv" />
                        </Card>
                    </Col>
                </Row>
                <Divider/>
                <p className='home-detail'>本系统致力于帮助企业低成本便捷的进行背景调查，招到匹配的员工。企业hr在本系统中既是信息获取者，也是信息提供者。Hr可以为员工创建人才档案，人才档案会储存在系统数据库中。当员工求职时，hr可以在系统中调取出人才档案，了解员工此前工作情况。人才档案中包括：员工基本信息、员工绩效情况、员工考勤情况、员工培训情况、主观评价</p>
            </div>
        );
    }
}

export default Home;
