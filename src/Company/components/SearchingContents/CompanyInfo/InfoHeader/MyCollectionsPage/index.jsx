import React, { useState } from 'react';
import {Button, Modal, Form, Input, DatePicker} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';
import moment from "moment";

const CollectionCreateForm = ({ visible, onCreate, onCancel, companyInfo}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="修改公司信息"
            okText="修改"
            cancelText="取消"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields().then((values) => {
                        form.resetFields();
                        onCreate(values);
                    }).catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    name: companyInfo.name,
                    id: companyInfo.id,
                    intro: companyInfo.intro,
                    location: companyInfo.location,
                    password:companyInfo.password
                }}
            >
                <Form.Item name="id" label="身份证号">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="name" label="公司名">
                    <Input/>
                </Form.Item>
                <Form.Item name="foundTime" label="成立时间">
                    <DatePicker defaultValue={moment(companyInfo.foundTime, 'YYYY-MM-DD')}/>
                </Form.Item>
                <Form.Item name="intro" label="公司介绍">
                    <Input type="textarea"/>
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input type="password"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const MyCollectionsPage = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        props.success(true,values)
    };

    return (
        <div>
            <Button type="primary" onClick={() => {setVisible(true);}}>
                    <PlusSquareFilled />
                    修改
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
                companyInfo={props.companyInfo}
            />
        </div>
    );
};

export default MyCollectionsPage
