import React, {Component} from 'react';
import { Pie } from '@ant-design/charts';

class Ring extends Component {
    render() {
        const {dataSource} = this.props;

        const data =[
            {type: 'A', value: 0,},
            {type: 'B', value: 0,},
            {type: 'C', value: 0,},
            {type: 'D', value: 0,},
            {type: 'E', value: 0,},
            {type: 'F', value: 0,},
        ]

        dataSource.map(dataItem => {
            if (dataItem.result==='A') data[0].value=data[0].value+1
            else if (dataItem.result==='B') data[1].value=data[1].value+1
            else if (dataItem.result==='C') data[2].value=data[2].value+1
            else if (dataItem.result==='D') data[3].value=data[3].value+1
            else if (dataItem.result==='E') data[4].value=data[4].value+1
            else if (dataItem.result==='F') data[5].value=data[5].value+1
            return 0;
        })

        const config = {
            autoFit: true,
            height: 250,
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 0.8,
            innerRadius: 0.64,
            label: {
                type: 'inner',
                content: '{value}',
                autoRotate: false,
                style: {
                    fill: '#333',
                    stroke: '#fff',
                    strokeWidth: 1,
                    shadowColor: '#fff',
                    shadowBlur: 4,
                },
            },
            statistic: {
                title: {
                    offsetY: -10,
                    formatter: () => '总计',
                },
                content: {
                    offsetY: 10,
                    formatter: () => dataSource.length+'次',
                },
            },
        };
        console.log()
        return <Pie {...config} />;
    }
}

export default Ring;
