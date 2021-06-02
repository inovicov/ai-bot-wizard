import { Card, Tag, Avatar, Row, Col, Comment, Typography } from 'antd'
import { UserOutlined, CloudServerOutlined } from '@ant-design/icons'
import React, { useMemo } from 'react'

const { Text } = Typography

const ExampleIntent = () => {
    const cardTitle = useMemo(
        () => (
            <>
                <b>Open Account</b>
                <br />
                <Text type="secondary">
                    The user wants to create a new account
                </Text>
            </>
        ),
        []
    )
    return (
        <Card title={cardTitle} size="small" className="example-intent">
            <Comment
                author="User"
                avatar={<Avatar icon={<UserOutlined />} />}
                content={
                    <div>
                        <Tag>Where do I open a new account?</Tag>
                        <Tag>how to start an account</Tag>
                        <Tag>i need help creating an account</Tag>
                    </div>
                }
            />
            <Row justify="end">
                <Col>
                    <Comment
                        author="AI bot reply"
                        avatar={<Avatar icon={<CloudServerOutlined />} />}
                        content={
                            <div>
                                <Tag color="blue">
                                    Please follow these instructions "LINK" to
                                    open a new account.
                                </Tag>
                            </div>
                        }
                    />
                </Col>
            </Row>
        </Card>
    )
}

export default ExampleIntent
