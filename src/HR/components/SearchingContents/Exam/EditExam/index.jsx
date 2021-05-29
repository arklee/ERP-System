import React, { useState } from 'react';
import {DatePicker, Select, Button, Modal, Form, Input} from 'antd';
import moment from 'moment';

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
                    idperform:record.idperform,
                    idhr:record.idhr,
                    degree:record.degree,
                }}
            >
                <Form.Item name="idperform" label="绩效id" rules={[{required: true, message: '必须输入id',},]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="idhr" label="HR">
                    <Input/>
                </Form.Item>
                <Form.Item name="performtime" label="季度">
                    <DatePicker defaultValue={moment(record.performtime, 'YYYY-MM-DD')}/>
                </Form.Item>
                <Form.Item name="degree" label="绩效等级">
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

const EditExam = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values,) => {
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

export default EditExam
