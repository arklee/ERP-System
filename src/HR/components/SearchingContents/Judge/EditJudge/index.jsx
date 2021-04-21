import React, { useState } from 'react';
import { Button, Modal, Form, Input} from 'antd';

const { TextArea } = Input;

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
                    idevaluation:record.idevaluation,
                    idhr:record.idhr,
                    evaluationinclusion:record.evaluationinclusion,
                    hrscore:record.hrscore
                }}
            >
                <Form.Item name="idevaluation" label="评价编号">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="idhr" label="HR ID">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="hrscore" label="HR 信誉分">
                    <Input disabled/>
                </Form.Item>
                <Form.Item name="evaluationinclusion" label="评价内容">
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

export default EditJudge
