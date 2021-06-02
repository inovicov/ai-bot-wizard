import { Typography, Row, Col } from 'antd'
import React from 'react'

const { Title } = Typography

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__paper">
                    <Title>
                        Create AI bot
                        <br />
                        <small>with pretrained intents</small>
                    </Title>

                    <Row>
                        <Col span={12}>
                            Build your own AI bot which understands users needs.
                            You can train it how to react in different use-cases
                            by adding different intents which can be recognized
                            in the conversation.
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Hero
