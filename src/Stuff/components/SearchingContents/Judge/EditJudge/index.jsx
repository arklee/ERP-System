import React, { useState } from 'react';
import { Button, Modal, Form, Input} from 'antd';

const { TextArea } = Input;

const CollectionCreateForm = ( {record, visible, onCreate, onCancel }) => {

    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="申诉"
            okText="提交 "
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
                }}
            >
                <Form.Item name="idevaluation" label="评价编号">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="statement" label="申诉内容">
                    <TextArea/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const EditJudge = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        props.edit(values)
    };

    return (
        <div>
            <Button danger onClick={() => {setVisible(true);}}>申诉</Button>
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

export default EditJudge
