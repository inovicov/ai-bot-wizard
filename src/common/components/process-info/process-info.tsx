import { Col, Row, Timeline, Typography } from 'antd'
import {
    LoadingOutlined,
    CheckCircleTwoTone,
    MessageOutlined,
} from '@ant-design/icons'
import React from 'react'

const { Title, Text } = Typography

const ProcessInfo = () => {
    return (
        <div className="process-info">
            <div className="container">
                <Row justify="center">
                    <Col>
                        <Title level={2} className="section-title">
                            How does intent recognition works?
                        </Title>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Row justify="center">
                            <Col span={18}>
                                <Timeline>
                                    <Timeline.Item dot={<MessageOutlined />}>
                                        User send a message with an{' '}
                                        <b>expression</b>
                                    </Timeline.Item>
                                    <Timeline.Item dot={<LoadingOutlined />}>
                                        Message is <b>analyzed</b> by the AI to
                                        understand the users intent
                                    </Timeline.Item>
                                    <Timeline.Item
                                        dot={
                                            <CheckCircleTwoTone twoToneColor="#52c41a" />
                                        }
                                    >
                                        AI <b>understands</b> the intent and
                                        replies with a predefined answer
                                    </Timeline.Item>
                                </Timeline>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row justify="center">
                            <Col span={12}>
                                <Text type="secondary">
                                    During the conversation AI bot can identify
                                    users expressions with predefined use-cases.
                                    Basing on this match it can give useful
                                    answers which fits context of dialog.
                                </Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProcessInfo
