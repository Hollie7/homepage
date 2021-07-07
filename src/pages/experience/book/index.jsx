import React, { Component, useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, List, Divider, Modal, Avatar, Button } from 'antd';
import styles from './style.less';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import data from './data';

const { Meta } = Card;

const Title = ({ text })=> {
    return <div className={styles.title}>{text}</div>;
};


class BookList extends Component {
    state = {
        isModalVisible: false,
        modalDescription : '',
        modalTitle: '',
    }

    setModalVisible(isModalVisible, modalDescription, modalTitle) {
        this.setState({ isModalVisible });
        this.setState({ modalDescription });
        this.setState({ modalTitle});
    }
  
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
                                
                                    <Divider orientation="left"><Title text={"我的书单"}/></Divider>
                                    
                                    <List
                                        className={styles.text}
                                        grid={{
                                            gutter: [16, 24],
                                            xs: 1,
                                            sm: 1,
                                            md: 1,
                                            lg: 2,
                                            xl: 2,
                                            xxl: 3,
                                          }}
                                        dataSource={data.bookList}
                                        renderItem={item=>(
                                            <Card
                                                style={{ width: 300 }}
                                                cover={
                                                <img
                                                    style={{ height: '250px', objectFit:'cover' }}
                                                    alt="example"
                                                    src={item.cover}
                                                />
                                                }
                                                actions={[
                                                    <Button
                                                        type="text"
                                                        onClick={()=>this.setModalVisible(true, item.detail, item.title)}
                                                    >
                                                        <SettingOutlined key="setting" />
                                                    </Button>
                                                    ,
                                                    <Button
                                                        type="text"
                                                        onClick={()=>this.setModalVisible(true, item.detail, item.title)}
                                                    >
                                                        <EditOutlined key="edit" />
                                                    </Button>
                                                    ,
                                                    <Button
                                                        type="text"
                                                        onClick={()=>this.setModalVisible(true, item.detail, item.title)}
                                                    >
                                                        <EllipsisOutlined key="ellipsis" />
                                                    </Button>,
                                                ]}
                                            >
                                                <Meta
                                                avatar={<Avatar src={item.avatar} />}
                                                title={item.title}
                                                description={item.description}
                                                />
                                            </Card>
                                        )}
                                    >

                                    </List>

                                    <Modal 
                                        title={this.state.modalTitle}
                                        visible={this.state.isModalVisible} 
                                        onOk={() => this.setModalVisible(false)}
                                        onCancel={() => this.setModalVisible(false)}
                                    >
                                        <p>{this.state.modalDescription}</p>
                                    </Modal>
                                    
                                    
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