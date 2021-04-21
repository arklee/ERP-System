import React, {Component} from 'react';
import { Liquid } from '@ant-design/charts';

class LiquidP extends Component {

    percent=()=>{
        const {dataSource} = this.props;
        let count = 0
        dataSource.map(dataItem => {
            if (dataItem.degree==='A' || dataItem.degree==='B' || dataItem.degree==='C')
                count++
            return 0
        })
        return count/dataSource.length
    }

    render() {

        const config = {
            height: 250,
            percent: this.percent(),
            statistic: {
                content: {
                    style: {
                        fontSize: 60,
                        fill: 'black',
                        lineHeight: 1,
                    },
                },
            },
        };
        return <Liquid {...config} />;
    }
}


export default LiquidP;
