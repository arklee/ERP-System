import React, { useState } from 'react';
import {Button, Modal, Form, Input, Radio} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';

const CollectionCreateForm = ({ visible, onCreate, onCancel, hrInfo}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="修改个人信息"
            okText="录入"
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
                    sex: hrInfo.sex,
                    hrname: hrInfo.hrname,
                    number: hrInfo.number,
                    idcompany: hrInfo.idcompany,
                    id: hrInfo.id,
                    email: hrInfo.email,
                    password: hrInfo.password,
                }}
            >
                <Form.Item name="id" label="账号id">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="hrname" label="姓名" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="sex" label="性别">
                    <Radio.Group>
                        <Radio value="male">男</Radio>
                        <Radio value="female">女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="number" label="电话号码">
                    <Input />
                </Form.Item>
                <Form.Item name="idcompany" label="公司ID">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input />
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
        props.edit(values)
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
