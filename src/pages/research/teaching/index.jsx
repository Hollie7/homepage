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
                                    <Divider orientation="left"><Title text={"???????????????"}/></Divider>
                                    <Player
                                        playsInline
                                        poster="/assets/poster.png"
                                        src="http://som.xjtu.edu.cn/__local/8/7B/96/EB9A05E6E66CE9E0A99D73DB6A6_3A7C33D4_2967BA5.mp4?e=.mp4"
                                    />
                                </Col>

                                <Col span={12}>
                                    <Divider orientation="left"><Title text={"????????????"}/></Divider>
                                    
                                    <Timeline>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <p className={styles.bold}>??????</p>
                                            ????????? <br/>
                                            ??????????????? <br/>
                                            ??????????????????????????????<br/>
                                            ????????????????????????<br/>
                                            ?????????????????????ACCA Paper F7???<br/>
                                            ?????????????????? ????????????<br/>
                                            ??????????????????
                                        </Timeline.Item>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <p className={styles.bold}>?????????</p>
                                            ?????????????????????MPAcc????????????<br/>
                                            ????????????????????????????????????MPAcc????????????<br/>
                                            ???????????????????????????MPAcc????????????
                                        </Timeline.Item>
                                        <Timeline.Item
                                            className={styles.text}
                                        >
                                            <p className={styles.bold}>???????????????</p>
                                            ?????????????????????????????????
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