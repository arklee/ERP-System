import React, { useState } from 'react';
import {Row, Col, DatePicker, Select, Button, Modal, Form, Input, Radio} from 'antd';
import {PlusSquareFilled} from '@ant-design/icons';

const { Option } = Select;

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="录入新员工"
            okText="录入"
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
                    modifier: 'public',
                }}
            >
                <Row gutter={[64, 16]}>
                    <Col>
                        <Form.Item name="username" label="姓名" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="id" label="身份证号" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                            <Input type="textarea" />
                        </Form.Item>
                        <Form.Item name="sex" label="性别">
                            <Radio.Group>
                                <Radio value="male">男</Radio>
                                <Radio value="female">女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="nationality" label="国籍">
                            <Select placeholder="请选择一个国家">
                                <Option value="China">中国</Option>
                                <Option value="USA">美国</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="ethnicity" label="民族">
                            <Select placeholder="请选择一个民族">
                                <Option value="Han">汉族</Option>
                                <Option value="Hui">回族</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="education" label="学历">
                            <Select placeholder="请选择一个学历">
                                <Option value="1">小学</Option>
                                <Option value="2">初中</Option>
                                <Option value="3">高中</Option>
                                <Option value="4">本科</Option>
                                <Option value="5">硕士</Option>
                                <Option value="6">博士</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="major" label="专业">
                            <Input />
                        </Form.Item>
                        <Form.Item name="school" label="毕业学校">
                            <Input />
                        </Form.Item>
                        <Form.Item name="graduated_time" label="毕业时间">
                            <DatePicker/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

const CollectionsPage = (props) => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
        //console.log('Received values of form: ', values);
        setVisible(false);
        props.success(true,values)
    };

    return (
        <div>
            <Row justify="center">
                <Button type="primary" onClick={() => {setVisible(true);}}>
                    <PlusSquareFilled />
                    录入
                </Button>
            </Row>
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

export default CollectionsPage
