import React, { useState } from 'react';
import {DatePicker, Select, Button, Modal, Form, Input} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';

const { Option } = Select;

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
                <Form.Item name="id" label="绩效id" rules={[{required: true, message: '必须输入id',},]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="hr" label="HR">
                    <Input/>
                </Form.Item>
                <Form.Item name="company" label="公司">
                    <Input/>
                </Form.Item>
                <Form.Item name="season" label="季度">
                    <DatePicker/>
                </Form.Item>
                <Form.Item name="result" label="绩效等级">
                    <Select placeholder="请选择一个评级">
                        <Option value="A">A</Option>
                        <Option value="B">B</Option>
                        <Option value="C">C</Option>
                        <Option value="D">D</Option>
                        <Option value="E">E</Option>
                        <Option value="f">F</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const AddExam = (props) => {
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

export default AddExam
