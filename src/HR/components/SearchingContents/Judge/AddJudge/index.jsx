import React, { useState } from 'react';
import { Button, Modal, Form, Input} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';

const { TextArea } = Input;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="添加新记录"
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
                <Form.Item name="id" label="评价编号" rules={[{required: true, message: '必须输入id',},]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="company" label="公司">
                    <Input/>
                </Form.Item>
                <Form.Item name="hrName" label="hr姓名">
                    <Input/>
                </Form.Item>
                <Form.Item name="hrID" label="hrID">
                    <Input/>
                </Form.Item>
                <Form.Item name="result" label="绩效等级">
                    <TextArea/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const AddJudge = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        props.add(values)
    };

    return (
        <div>
            <Button type="primary" onClick={() => {setVisible(true);}}>
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

export default AddJudge
