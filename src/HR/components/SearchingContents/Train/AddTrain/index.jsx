import React, { useState } from 'react';
import {DatePicker, Select, Button, Modal, Form, Input} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';
const { TextArea } = Input;

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
                <Form.Item name="idtrain" label="培训id" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                    <Input />
                </Form.Item>
                <Form.Item name="begin" label="开始时间">
                    <DatePicker/>
                </Form.Item>
                <Form.Item name="end" label="结束时间">
                    <DatePicker/>
                </Form.Item>
                <Form.Item name="grade" label="考核结果">
                    <Select placeholder="请选择一个评级">
                        <Option value="A">A</Option>
                        <Option value="B">B</Option>
                        <Option value="C">C</Option>
                        <Option value="D">D</Option>
                        <Option value="E">E</Option>
                        <Option value="f">F</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="content" label="考核内容">
                    <TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const AddTrain = (props) => {
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

export default AddTrain
