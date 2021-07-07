import React, { Component, useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, List, Divider, Modal, Avatar, Button } from 'antd';
import styles from './style.less';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Upload,
    Rate,
    Checkbox,
    message
  } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const Title = ({ text })=> {
    return <div className={styles.title}>{text}</div>;
};

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};

const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

class BookList extends Component {
    state = {
        isModalVisible: false,
        modalDescription : '',
    }

    onFinish = (values) => {
        message.success("提交评价成功~");
        console.log('Received values of form: ', values);
    };

    render(){
        return (
            <div
                id="test"
                styles={{backgroud:'white'}}
            >
            <PageContainer      
            >
                <Row gutter={24} type="flex" >
                    <Col span={4}/>
                    <Col span={16}>
                        <Card
                            className={styles.card}
                        >

                            <Row gutter={[24, 24]} type="flex" >

                                <Col span={24}>
                                
                                    <Divider orientation="left"><Title text={"留言板"}/></Divider>

                                        <Form
                                            name="validate_other"
                                            {...formItemLayout}
                                            onFinish={this.onFinish}
                                            initialValues={{
                                                'input-number': 3,
                                                'checkbox-group': ['A', 'B'],
                                                rate: 3.5,
                                            }}
                                            >
                                            {/* <Form.Item label="Plain Text">
                                                <span className="ant-form-text">China</span>
                                            </Form.Item> */}
                                            <Form.Item
                                                name="select"
                                                label="身份"
                                                hasFeedback
                                                rules={[
                                                {
                                                    required: true,
                                                    message: '请选择你的身份!',
                                                },
                                                ]}
                                            >
                                                <Select placeholder="请选择你的身份">
                                                <Option value="teacher">老师</Option>
                                                <Option value="student">学生</Option>
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                name="select-multiple"
                                                label="页面（多选）"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: '请选择你最喜欢的页面!',
                                                    type: 'array',
                                                },
                                                ]}
                                            >
                                                <Select mode="multiple" placeholder="请选择你最喜欢的页面">
                                                <Option value="red">科研经历</Option>
                                                <Option value="green">兴趣爱好</Option>
                                                <Option value="blue">个人主页</Option>
                                                </Select>
                                            </Form.Item>

                                            {/* <Form.Item label="InputNumber">
                                                <Form.Item name="input-number" noStyle>
                                                <InputNumber min={1} max={10} />
                                                </Form.Item>
                                                <span className="ant-form-text"> machines</span>
                                            </Form.Item> */}

                                            {/* <Form.Item name="switch" label="Switch" valuePropName="checked">
                                                <Switch />
                                            </Form.Item> */}

                                            <Form.Item name="slider" label="页面设计打分">
                                                <Slider
                                                marks={{
                                                    0: 'A',
                                                    20: 'B',
                                                    40: 'C',
                                                    60: 'D',
                                                    80: 'E',
                                                    100: 'F',
                                                }}
                                                />
                                            </Form.Item>

                                            <Form.Item name="radio-group" label="希望增添的内容">
                                                <Radio.Group>
                                                <Radio value="a">学术方面</Radio>
                                                <Radio value="b">教学方面</Radio>
                                                <Radio value="c">生活方面</Radio>
                                                </Radio.Group>
                                            </Form.Item>

                                            <Form.Item
                                                name="radio-button"
                                                label="希望更新的内容"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Please pick an item!',
                                                },
                                                ]}
                                            >
                                                <Radio.Group>
                                                <Radio.Button value="a">学术方面</Radio.Button>
                                                <Radio.Button value="b">教学方面</Radio.Button>
                                                <Radio.Button value="c">生活方面</Radio.Button>
                                                </Radio.Group>
                                            </Form.Item>

                                            <Form.Item name="checkbox-group" label="希望删去的内容">
                                                <Checkbox.Group>
                                                <Row>
                                                    <Col span={8}>
                                                    <Checkbox
                                                        value="A"
                                                        style={{
                                                        lineHeight: '32px',
                                                        }}
                                                    >
                                                        学术方面
                                                    </Checkbox>
                                                    </Col>
                                                    <Col span={8}>
                                                    <Checkbox
                                                        value="B"
                                                        style={{
                                                        lineHeight: '32px',
                                                        }}
                                                        disabled
                                                    >
                                                        教学方面
                                                    </Checkbox>
                                                    </Col>
                                                    <Col span={8}>
                                                    <Checkbox
                                                        value="C"
                                                        style={{
                                                        lineHeight: '32px',
                                                        }}
                                                    >
                                                        生活方面
                                                    </Checkbox>
                                                    </Col>
                                                </Row>
                                                </Checkbox.Group>
                                            </Form.Item>

                                            <Form.Item name="rate" label="页面使用体验">
                                                <Rate />
                                            </Form.Item>

                                            <Form.Item
                                                name="upload"
                                                label="上传评价"
                                                valuePropName="fileList"
                                                getValueFromEvent={normFile}
                                                extra="longgggggggggggggggggggggggggggggggggg"
                                            >
                                                <Upload name="logo" action="/upload.do" listType="picture">
                                                <Button icon={<UploadOutlined />}>点击上传</Button>
                                                </Upload>
                                            </Form.Item>

                                            <Form.Item label="添加文件">
                                                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                                                <Upload.Dragger name="files" action="/upload.do">
                                                    <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                    </p>
                                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                                </Upload.Dragger>
                                                </Form.Item>
                                            </Form.Item>

                                            <Form.Item
                                                wrapperCol={{
                                                span: 12,
                                                offset: 6,
                                                }}
                                            >
                                                <Button type="primary" htmlType="submit">
                                                提交
                                                </Button>
                                            </Form.Item>
                                            </Form>
                                                                            
                                </Col>
                                       
                            </Row>
                                                       
                        </Card>   

                    </Col>
                    <Col span={4}/>
                </Row>
            </PageContainer>
            </div>
        );
    }
};

export default BookList;