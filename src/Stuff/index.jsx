import React, {Component} from 'react'
import {Layout} from 'antd';
import Headbar from "./components/Headbar";
import SidebarAll from "./components/SidebarAll";
import ModifyMyContents from "./components/ModifyMyContents";

class Stuff extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SidebarAll/>
                <Layout>
                    <Headbar/>
                    {ModifyMyContents}
                </Layout>
            </Layout>
        );
    }
}

export default Stuff;
