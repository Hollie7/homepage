import React, { Component, useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, List, Typography, Divider, Space, Carousel, Descriptions, Timeline } from 'antd';
import styles from './style.less';
import "./video-react.css"; 
import { Player } from 'video-react';

const Title = ({ text })=> {
    return <div className={styles.title}>{text}</div>;
};

function onChange(a, b, c) {
    console.log(a, b, c);
}
  
const contentStyle = {
    height: '180px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
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
                <Row gutter={24}>
                    <Col span={4}/>
                    <Col span={16}>
                        <Card
                            className={styles.card}
                        >
                            
                            <Row gutter={[24, 24]}>

                                {/* <Col span={24}>
                                    <Carousel afterChange={onChange}>
                                        <div>
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/c3qKuBYIP9CEtr7.jpg"/>
                                        </div>
                                        <div>
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/QW4s6m973d5cKUw.jpg"/>
                                        </div>
                                        <div>
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/9iUcO4FleBxMpW2.jpg"/>
                                        </div>
                                        <div>
                                            <a href="http://som.xjtu.edu.cn/mba30nqzt/index.htm">
                                            <img style={contentStyle} src="https://i.loli.net/2021/07/04/EL9DMiU46ojtfrR.png"/>
                                            </a>
                                        </div>                                                            
                                    </Carousel>,
                                </Col> */}
                                                            
                                <Col span={24}>
                                    <Divider orientation="left"><Title text={"学院宣传片"}/></Divider>
                                    <Player
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="http://som.xjtu.edu.cn/__local/8/7B/96/EB9A05E6E66CE9E0A99D73DB6A6_3A7C33D4_2967BA5.mp4?e=.mp4"
                                    />
                                </Col>

                                <Col span={12}>
                                    <Divider orientation="left"><Title text={"教学情况"}/></Divider>
                                    
                                    <Timeline>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <p className={styles.bold}>本科</p>
                                            会计学 <br/>
                                            基础会计学 <br/>
                                            会计职业道德（双语）<br/>
                                            公司会计（双语）<br/>
                                            财务报告（本科ACCA Paper F7）<br/>
                                            中级财务会计 （本科）<br/>
                                            财务报告分析
                                        </Timeline.Item>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <p className={styles.bold}>研究生</p>
                                            财务报表分析（MPAcc方向课）<br/>
                                            商业伦理与会计职业道德（MPAcc核心课）<br/>
                                            国际会计准则专题（MPAcc方向课）
                                        </Timeline.Item>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <p className={styles.bold}>应用型硕士</p>
                                            商业伦理与会计职业道德
                                        </Timeline.Item>
                                    </Timeline>
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