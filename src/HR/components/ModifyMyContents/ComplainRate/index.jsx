import React, {Component} from 'react';
import { Liquid } from '@ant-design/charts';

class ComplainRate extends Component {
    render() {
        const {rate} = this.props
        const config = {
            height: 250,
            percent: rate,
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


export default ComplainRate;
