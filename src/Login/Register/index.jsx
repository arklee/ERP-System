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
                        <Form.Item name="name" label="姓名" rules={[{required: true, message: 'Please input the title of collection!',},]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="id" label="身份证号">
                            <Input type="textarea" />
                        </Form.Item>
                        <Form.Item name="sex" label="性别">
                            <Radio.Group>
                                <Radio value="男">男</Radio>
                                <Radio value="女">女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="nationality" label="国籍">
                            <Select placeholder="请选择一个国家">
                                <Option value="中国">中国</Option>
                                <Option value="美国">美国</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="nation" label="民族">
                            <Select placeholder="请选择一个民族">
                                <Option value="汉族">汉族</Option>
                                <Option value="回族">回族</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item name="degree" label="学历">
                            <Select placeholder="请选择一个学历">
                                <Option value="小学">小学</Option>
                                <Option value="初中">初中</Option>
                                <Option value="高中">高中</Option>
                                <Option value="本科">本科</Option>
                                <Option value="硕士">硕士</Option>
                                <Option value="博士">博士</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="major" label="专业">
                            <Input />
                        </Form.Item>
                        <Form.Item name="College" label="毕业学校">
                            <Input />
                        </Form.Item>
                        <Form.Item name="graduatedTime" label="毕业时间">
                            <DatePicker/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};

const Register = (props) => {
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

export default Register
