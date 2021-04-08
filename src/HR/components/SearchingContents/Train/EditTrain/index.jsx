import React, { useState } from 'react';
import {DatePicker, Select, Button, Modal, Form, Input} from 'antd';
import moment from 'moment';
const { TextArea } = Input;

const { Option } = Select;

const CollectionCreateForm = ( {record, visible, onCreate, onCancel }) => {

    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="修改记录"
            okText="修改 "
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
                    id:record.id,
                    result:record.result,
                    detail:record.detail
                }}
            >
                <Form.Item name="id" label="培训id" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                    <Input />
                </Form.Item>
                <Form.Item name="from" label="开始时间">
                    <DatePicker defaultValue={moment(record.from, 'YYYY-MM-DD')}/>
                </Form.Item>
                <Form.Item name="to" label="结束时间">
                    <DatePicker defaultValue={moment(record.to, 'YYYY-MM-DD')}/>
                </Form.Item>
                <Form.Item name="result" label="考核结果">
                    <Select placeholder="请选择一个评级">
                        <Option value="A">A</Option>
                        <Option value="B">B</Option>
                        <Option value="C">C</Option>
                        <Option value="D">D</Option>
                        <Option value="E">E</Option>
                        <Option value="f">F</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="detail" label="考核内容">
                    <TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const EditTrain = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        props.edit(values)
    };

    return (
        <div>
            <Button onClick={() => {setVisible(true);}}>修改</Button>
            <CollectionCreateForm
                record={props.record}
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>
    );
};

export default EditTrain
