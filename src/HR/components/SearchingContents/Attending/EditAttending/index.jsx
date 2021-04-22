import React, { useState } from 'react';
import {Button, Modal, Form, Input, InputNumber} from 'antd';

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
                    idcompany:record.idcompany,
                    absence:record.absence,
                    late:record.late,
                }}
            >
                <Form.Item name="idcompany" label="公司id">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="absence" label="缺勤次数">
                    <InputNumber />
                </Form.Item>
                <Form.Item name="late" label="迟到次数">
                    <InputNumber />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const EditAttending = (props) => {
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

export default EditAttending
