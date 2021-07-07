import React, { Component, useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, List, Typography, Divider, Space, Carousel } from 'antd';
import styles from './style.less';
import { LinkOutlined, FieldTimeOutlined } from '@ant-design/icons';

const textIntroduction = "“王建玲是西安交通大学管理学院教授。她博士毕业于\
西安交通大学工商管理专业，本科毕业于从陕西财经学院。\
她的主要研究领域是...。在...方面取得了多项研究成果...。”";

const paperList = [
    {
        title:'Depoliticization and corporate cash holdings: Evidence from the mandated resignation of directors in China, Journal of Corporate Finance. 2021',
        author: 'Yuyuan Chang, Xiaofei Pan*, Jianling Wang, Qing Zhou',
        href:'https://doi.org/10.1016/j.jcorpfin.2021.102004'
    },
    {
        title:'强制性企业社会责任报告与审计收费：一项准自然实验. 管理评论，2019',
        author: '王建玲，常钰苑',
        href:'this is link'
    },
    {
        title:'The Negative Corporate Governance Impact of Distracted Shareholders: Evidence from Value of Cash Holdings. Asia-Pacific Journal of Accounting & Economics, Forthcoming ',
        author: 'Yueing Li, Jianling Wang',
        href:'this is link'
    },
    {
        title:'海外投资企业社会责任与经济绩效：制度距离调节的研究.山西财经大学学报，2020',
        author: '王建玲，井洁琳',
        href:'this is link'
    },
    {
        title:'Government Initiated Corporate Social Responsibility Activities: Evidence from a Poverty Alleviation Campaign in China. Journal of Business Ethics, 2020',
        author: 'Yuyuan Chang, Wen He, Jianling Wang.*',
        href:'http://link.springer.com/article/10.1007/s10551-020-04538-w'
    },
    {
        title:'Farmers’ awareness level and their perceptions of climate change: A case of Khyber Pakhtunkhwa province, Pakistan. Land Use Policy, 2020',
        author:'Shah Fahad*, Tahira Inayat, Jianling Wang*, Li Dong, Guangyin Hub, Sufyanullah Khan, Aaqil Khan',
        href:'https://doi.org/10.1016/j.landusepol.2020.104669'
    },
    {
        title:'Does sharing the same network auditor in group affiliated firms affect audit quality?, Journal of Accounting and Public Policy, 2020',
        author:'Jinghui Sun, Jianling Wang*, Pamela Kent, Baolei Qi',
        href:'https://doi.org/10.1016/j.jaccpubpol.2019.106711'
    },
    {
        title:' Climate change, vulnerability, and its impacts in rural Pakistan: a review. Environmental Science and Pollution Research. 2020',
        author:'Shah Fahad*，Jianling Wang*',
        href:'https://doi.org/10.1007/s11356-019-06878-1'
    },
    {
        title:'中国海外投资企业社会责任研究，西安交通大学出版社',
        author:'王建玲，张礼涛',
        href:'this is link'
    },
    {
        title:'中国海外投资企业社会责任研究，西安交通大学出版社',
        author:'王建玲，张礼涛',
        href:'this is link'
    },
    {
        title:'中国海外投资企业社会责任研究，西安交通大学出版社',
        author:'王建玲，张礼涛',
        href:'this is link'
    },
];

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

function onChange(a, b, c) {
    console.log(a, b, c);
}
  
const contentStyle = {
    height: '180px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    minWidth: '100%'
  };

class Publication extends Component {
    render(){
        return (
            <div
                id="test"
                styles={{backgroud:'white'}}
            >
            <PageContainer      
            >
                <Row gutter={24} type="flex" justify="center" align="middle" style={{minHeight:'100vh'}}>
                    <Col span={4}/>
                    <Col span={16}>
                        <Card
                            className={styles.card}
                        >

                            <Row gutter={[24, 24]} type="flex" justify="center" align="middle" style={{minHeight:'100vh'}}>

                                <Col>
                                    <Carousel afterChange={onChange}>
                                        <div>
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/QW4s6m973d5cKUw.jpg"/>
                                        </div>
                                        <div id="test1">
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/9iUcO4FleBxMpW2.jpg"/>
                                        </div>
                                        <div>
                                            <a href="http://som.xjtu.edu.cn/mba30nqzt/index.htm">
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/EL9DMiU46ojtfrR.png"/>
                                            </a>
                                        </div>                                     
                                        <div>
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/c3qKuBYIP9CEtr7.jpg"/>
                                        </div>
                                    </Carousel>
                                
                                    <Divider orientation="left"><Title text={"论文成果统计"}/></Divider>
                                    
                                    <List
                                        itemLayout="vertical"
                                        size="large"
                                        pagination={{
                                            onChange: page => {
                                              console.log(page);
                                            },
                                            pageSize: 5,
                                          }}
                                        dataSource={paperList}
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
                                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
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

export default Publication;