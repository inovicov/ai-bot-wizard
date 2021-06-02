import { Tag, Typography } from 'antd'
import React from 'react'

import { TrainingData } from 'common/types'

const { Text } = Typography

type ExpressionsListProperties = TrainingData

const ExpressionsList = ({
    expressions,
    expressionCount,
}: ExpressionsListProperties) => (
    <>
        {expressions.map((expression) => (
            <Tag key={expression.id} color="blue">
                {expression.text}
            </Tag>
        ))}
        <div>
            <Text type="secondary">
                <small>{expressionCount} total</small>
            </Text>
        </div>
    </>
)

export default ExpressionsList
