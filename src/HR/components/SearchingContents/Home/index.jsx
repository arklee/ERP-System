import React, {Component} from 'react';
import {Row, Col, Card, Divider} from 'antd';

import p1 from './1.png'
import p2 from './2.png'
import p3 from './3.png'

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
                            title="建筑公司"
                        >
                            <Meta title="建筑公司介绍......" description="公司官网：www.xxx.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 360 }}
                            cover={<img alt="example" src={p3} />}
                            title="电子企业"
                        >
                            <Meta title="电子企业介绍......" description="公司官网：www.xxx.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 360 }}
                            cover={<img alt="example" src={p2} />}
                            title="能源企业"
                        >
                            <Meta title="能源企业介绍......" description="公司官网：www.xxx.com" />
                        </Card>
                    </Col>
                </Row>
                <Divider/>
                <p className='home-detail'>员工查人才内调平台是面向全国中小微企业HR的人才内调平台，为您提供实时准确的全国人才的工作信息，同时为HR提供人才信息备份服务。每天上万份的工作信息为HR提供参考。人才内调上员工查。</p>
            </div>
        );
    }
}

export default Home;
