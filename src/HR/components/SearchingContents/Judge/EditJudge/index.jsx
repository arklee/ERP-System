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
                    id:record.id,
                    hrName:record.hrName,
                    hrID:record.hrID,
                    company:record.company,
                    statement:record.statement,
                }}
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
                <Form.Item name="statement" label="绩效等级">
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
