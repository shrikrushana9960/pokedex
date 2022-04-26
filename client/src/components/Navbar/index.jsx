
import { PageHeader, Button, Tooltip, Col, Card, Row, Modal } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import styles from "./navbar.module.scss"
import React, { useState } from 'react'
import Cards from '../Cards/Cards';

const Navbar = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>    <Modal title="Favourite Pockemon" icon={<HeartFilled style={{ color: '#db0707' }} />} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <div className={styles.parentDiv}>
                <Row gutter={[10, 10]}>
                    <Col span={12}>
                        <Cards />
                    </Col>
                    <Col span={12}>
                        <Cards />
                    </Col>
                    <Col span={12}>
                        <Cards />
                    </Col>
                </Row>
            </div>
        </Modal>
            <PageHeader
                className="site-page-header"
                style={{background:'grey    ',position:'fixed',width:'100%',zIndex:1}}
                extra={[
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<HeartFilled style={{ color: '#db0707' }} />} size="large" onClick={showModal} />
                    </Tooltip>

                ]} /></div>
    )
}

export default Navbar