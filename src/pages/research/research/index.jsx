import React, { Component, useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, List, Typography, Divider, Space, Timeline } from 'antd';
import styles from './style.less';
import { LinkOutlined, FieldTimeOutlined } from '@ant-design/icons';
import data from './data';

const Title = ({ text })=> {
    return <div className={styles.title}>{text}</div>;
};

const IconText = ({ icon, text, href }) => {
    return <Space> 
        <a href={href}>
        {React.createElement(icon)}
        {text}
        </a>
    </Space>;
};  

class Research extends Component {
    render(){
        return (
            <div
                id="test"
                styles={{backgroud:'white'}}
            >
            <PageContainer      
            >
                <Row gutter={24}>
                    <Col span={4}/>
                    <Col span={16}>
                        <Card
                            className={styles.card}
                        >
                            
                            <Row gutter={[24, 24]}>
                                <Col span={24}>

                                    <Row wrap={true}>
                                        <Divider orientation="left"><Title text={"个人简介"}/></Divider>
                                       
                                        <Col flex="auto" span={18}>
                                            <div className={styles.intro}>
                                                {data.textDiv}
                                            </div>
                                        </Col>
                                        <Col flex="150px" span={6}>
                                            <img
                                                width="150px"
                                                src="https://i.loli.net/2021/07/04/rTZAyGMYNLn12oB.png"
                                            />
                                        </Col>

                                    </Row>

                                </Col>

                                <Col span={24}>
                                    <Divider orientation="left"><Title text={"研究领域"}/></Divider>
                                    <Typography
                                        className={styles.text}
                                    >
                                        <ul>
                                            <li>公司财务与会计问题</li>
                                            <li>公司监管</li>
                                            <li>会计准则研究</li>
                                            <li>运用以及会计职业道德</li>
                                        </ul>
                                    </Typography>
                                </Col>

                                <Col span={24}>
                                    <Divider orientation="left"><Title text={"教育背景"}/></Divider>
                                    <Timeline>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <div>2005.12</div>
                                            <div>毕业于西安交通大学工商管理专业，获<span className={styles.bold}>管理学博士</span>学位</div>
                                        </Timeline.Item>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <div>2004.8-2005.2</div>
                                            <div>在英国Middlesex University作访问学者</div>
                                        </Timeline.Item>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <div>2000.7</div>
                                            <div>毕业于西安交通大学会计学专业，获<span className={styles.bold}>经济学硕士</span>学位</div>
                                        </Timeline.Item>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <div>1994.6</div>
                                            <div>毕业于陕西财经学院会计学专业，获<span className={styles.bold}>经济学学士</span>学位</div>
                                        </Timeline.Item>
                                    </Timeline>
                                </Col>

                                <Col span={24}>
                                    <Divider orientation="left"><Title text={"论文成果"}/></Divider>
                                    
                                    <List
                                        itemLayout="vertical"
                                        size="large"
                                        pagination={{
                                            onChange: page => {
                                              console.log(page);
                                            },
                                            pageSize: 3,
                                          }}
                                        dataSource={data.paperList}
                                        className={styles.text}
                                        renderItem={item=>(
                                            <List.Item
                                                actions={[
                                                    <IconText icon={LinkOutlined} text="link" href={item.href} key="list-vertical-star-o" />
                                                ]}
                                                extra={
                                                    <img
                                                        width={200}
                                                        alt="logo"
                                                        src={item.figure}
                                                    />
                                                }
                                            >
                                                <List.Item.Meta
                                                    title={<a href={item.href}>{item.title}</a>}
                                                    description={item.author}
                                                />

                                            </List.Item>
                                        )}
                                    >
                                    </List>

                            
                                </Col>


                                <Col span={24}>
                                    <Divider orientation="left"><Title text={"研究项目"}/></Divider>
                                    
                                    <List
                                        itemLayout="horizontal"
                                        size="large"
                                        pagination={{
                                            onChange: page => {
                                              console.log(page);
                                            },
                                            pageSize: 4,
                                          }}
                                        dataSource={data.projectList}
                                        className={styles.text}
                                        renderItem={item=>(
                                            <List.Item>
                                                <List.Item.Meta
                                                    title={<a>{item.title}</a>}
                                                    description={item.company}
                                                />
                                                <IconText icon={FieldTimeOutlined} text={item.time} key="list-vertical-star-o" />
                                            </List.Item>
                                        )}
                                    >
                                    </List>
                            
                                </Col>


                                <Col span={24} >
                                    <Divider orientation="left"><Title text={"联系方式"}/></Divider>
                                    <div className={styles.text} style={{marginBottom:'50px'}}>
                                        <div>
                                            办公室：文管大楼710
                                        </div>
                                        <div>
                                            电子邮箱：wangjl@mail.xjtu.edu.cn
                                        </div>
                                    </div>
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

export default Research;