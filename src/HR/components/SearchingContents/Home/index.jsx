import React, {Component} from 'react';
import { Carousel, Image, Divider } from 'antd';

import p1 from './1.jpg'
import p2 from './2.jpg'
import p3 from './3.jpg'
import p4 from './4.jpg'


class Home extends Component {
    render() {
        return (
            <>
                <Carousel autoplay>
                    <Image
                        width={600}
                        src={p1}
                    />
                    <Image
                        width={600}
                        src={p2}
                    />
                    <Image
                        width={600}
                        src={p3}
                    />
                    <Image
                        width={600}
                        src={p4}
                    />
                </Carousel>
                <Divider />
                <p>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
            </>
        );
    }
}

export default Home;
