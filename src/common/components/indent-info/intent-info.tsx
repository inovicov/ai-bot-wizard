import { Typography, Row, Col, Tag, Card } from 'antd'
import React from 'react'

import ExampleIntent from './example-intent'

const { Title } = Typography

const IntentInfo = () => {
    return (
        <div className="intent-info">
            <div className="container">
                <Row justify="center">
                    <Col>
                        <Title level={2} className="section-title">
                            What is an intent?
                        </Title>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Row justify="center">
                            <Col span={18}>
                                <Card>
                                    An in intent can be considered as kind of a
                                    building block for your chat bot. It
                                    represents a use case in the conversation
                                    when user wants to express something.
                                    <br />
                                    <br />
                                    <b>Expression</b> is represented by any
                                    message user can send in chat - for example:
                                    <Tag>i need help creating an account</Tag>
                                    <br />
                                    <br />
                                    You can add a number of expressions which
                                    will represent an intent. In the example
                                    here we have a case when user wants to
                                    create an account.
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row justify="center">
                            <Col>
                                <ExampleIntent />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default IntentInfo
