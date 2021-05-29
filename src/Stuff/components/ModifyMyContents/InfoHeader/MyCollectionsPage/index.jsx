import React, { useState } from 'react';
import {Button, Modal, Form, Input} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';

const CollectionCreateForm = ({ visible, onCreate, onCancel, hrInfo}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="修改我的信息"
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
                    hrname: hrInfo.hrname,
                    idcompany: hrInfo.idcompany,
                    idCard: hrInfo.idCard,
                    email: hrInfo.email,
                    password: hrInfo.password,
                }}
            >
                <Form.Item name="hrname" label="姓名" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="idCard" label="身份证号">
                    <Input type="textarea" disabled/>
                </Form.Item>
                <Form.Item name="idcompany" label="公司">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input disabled/>
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
                hrInfo={props.hrInfo}
            />
        </div>
    );
};

export default MyCollectionsPage
