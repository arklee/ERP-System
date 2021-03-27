import React, {Component} from 'react';
import {Descriptions, Divider, PageHeader} from "antd";

class Judge extends Component {

    state = {judge:[
            {id:"#1231",company:'钓鱼公司', hrName:'李大象', hrID:"#3323",statement:"这位员工思想上，为人正直，稳定、谦虚。事业心、进取心强，能设身处地为他人着想，热爱集体。要做一个具有良好专业技术水平又有高尚职业道德的优秀员工，爱岗敬业、诚实守信、遵纪守法、奉献社会。"},
            {id:"#1234",company:'王老吉', hrName:'吴雪药', hrID:"#3326",statement:"良好的个⼈形象和素养，专业技能或业务⽔平优秀，为公司业务创造更多机会和效益，受公司客户及合作企业好评，为公司创造出较好的企业效益或社会效益;⼯作认真负责，⽤⼼主动，服从整体安排，爱岗敬业，乐于助⼈，与同事相处融洽，业务知识扎实，业务⽔平优秀，能带动东区的给为同事⽤⼼⼯作，胜任东区⼤区经理⼯作;⼯作出⾊，业务熟悉，为我们成⽴起榜样。"},
            {id:"#1237",company:'万达集团', hrName:'王思聪', hrID:"#1234",statement:"该同事⼯作上勤勤恳恳，任劳任怨，认真负责，业务⽔平也在学习中不断提⾼，关⼼同事，⼗分值得⼤家学习，新晋社会如此努⼒难能可贵，今年完成了公司制定的任务，态度端正，办事⽅法有改善，⼯作有进步，该员⼯做事情踏踏实实做⼈本分，能够虚⼼理解市场招商经理的推荐，努⼒学习不⾜之处;⼤⼒开发所负责区域的空⽩品种，并⽤⼼和经理进⾏各种环节的沟通;在_年x⽉份进步异常迅速;对待⼯作兢兢业业，处处为公司思考，不记个⼈得失"}
            ]}

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
