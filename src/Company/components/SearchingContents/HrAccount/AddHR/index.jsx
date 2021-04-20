import React, { useState } from 'react';
import {Button, Modal, Form, Input} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="给与新HR权限"
            okText="添加"
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
            >
                <Form.Item name="id" label="HR ID" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                    <Input />
                </Form.Item>
                <Form.Item name="name" label="HR姓名">
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const AddHR = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        props.add(values)
    };

    return (
        <div>
            <Button onClick={() => {setVisible(true);}}>
                <PlusSquareFilled />
                添加
            </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default AddHR
