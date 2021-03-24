import React, {Component} from 'react';
import {Descriptions, Badge, PageHeader, Divider} from 'antd';

class Document extends Component {
    render() {
        return (
            <>
                <PageHeader
                    className="site-page-header"
                    onBack={()=>this.props.history.goBack()}
                    title="人才档案管理"
                    subTitle="记录员工的个人信息、学历、重大事件"
                />
                <Divider />
                <Descriptions title="李翔用户信息" bordered>
                    <Descriptions.Item label="姓名">李大翔</Descriptions.Item>
                    <Descriptions.Item label="性别">男</Descriptions.Item>
                    <Descriptions.Item label="国籍">中国</Descriptions.Item>
                    <Descriptions.Item label="身份证号" span={2}>
                        342421199502030715
                    </Descriptions.Item>
                    <Descriptions.Item label="民族">汉</Descriptions.Item>
                    <Descriptions.Item label="当前就职状态" span={2}>
                        <Badge status="processing" text="求职中" />
                    </Descriptions.Item>
                    <Descriptions.Item label="学历">本科</Descriptions.Item>
                    <Descriptions.Item label="毕业院校">四川大学</Descriptions.Item>
                    <Descriptions.Item label="专业">工业工程</Descriptions.Item>
                    <Descriptions.Item label="毕业时间">2014-07-04</Descriptions.Item>
                    <Descriptions.Item label="重大事件">
                        20XX/7---20XX/11:在浙江锦阳⼈⼒资源发展有限公司上班，先后担任项⽬部专
                        员职务,熟悉相关业 务流程，能独⽴操作相关业务。<br/>
                        20XX/10--20XX/3：爱⼼活动|⻓期辅助孤寡⽼⼈;组织“⼼灵有约”献爱⼼活动;
                        策划并参与了“师⽣共 建哲社林”⼤型植树活动<br/>
                        20XX/6--20XX/9：毕业实习|组织实施了兰州⼤学20XX级毕业⽣社会学专业毕业
                        实习项⽬——《社 会学视⾓下的⻄北地区⾼中⽣家庭陪读现象研究》<br/>
                        20XX/5--20XX/6：市场调研|策划并组织了《兰州⼤学学⽣收⼊与消费状况调查》 项⽬<br/>
                        2006/6--2006/8：暑期实践|申请策划并具体负责实施了兰州⼤学⼤学⽣创新创业
                        项⽬计划——《⻄ 北乡村家庭中⼦代夫妻关系对⽼年⼈⽣活质量影响的研究》<br/>
                    </Descriptions.Item>
                </Descriptions>
            </>
        );
    }
}

export default Document;
