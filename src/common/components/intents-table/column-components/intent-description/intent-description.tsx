import { Typography } from 'antd'
import React from 'react'

import { Intent } from 'common/types'

const { Title } = Typography

const IntentDescription = (text: string, record: Intent) => {
    return (
        <>
            <Title level={5} style={{ margin: 0 }}>
                {record.name}
            </Title>
            {record.description}
        </>
    )
}

export default IntentDescription
