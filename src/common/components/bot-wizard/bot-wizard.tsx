import React, { useCallback, useMemo, useState } from 'react'
import { Alert, Button, Card, Col, Row, Statistic, Typography } from 'antd'

import intents from 'common/datasource/intents.json'
import { IntentsTable } from 'common/components'

const { Title } = Typography

const BotWizard = () => {
    const [selectedCount, setSelectedCount] = useState(0)

    const handleIntentsSelect = useCallback((count) => {
        setSelectedCount(count)
    }, [])

    const nextButtonDisabled = useMemo(
        () => selectedCount === 0,
        [selectedCount]
    )

    return (
        <div className="bot-wizard">
            <div className="container">
                <Row gutter={16}>
                    <Col>
                        <Title level={2} className="section-title">
                            Build your own AI bot with pretrained intents
                            available
                        </Title>
                    </Col>
                </Row>
                <Alert
                    showIcon
                    message=" Start by selecting some of the commonly used
                                intents"
                    type="info"
                />
                <br />
                <IntentsTable
                    intents={intents}
                    onIntentsSelect={handleIntentsSelect}
                />

                <br />

                <Card title="Summary">
                    <Row gutter={16} align="bottom">
                        <Col>
                            <Statistic
                                title="Selected intents"
                                value={selectedCount}
                            />
                        </Col>
                        <Col>
                            <Button
                                type="primary"
                                disabled={nextButtonDisabled}
                            >
                                Next
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    )
}

export default BotWizard
