import { Table } from 'antd'
import React, { useMemo } from 'react'

import { Intent } from 'common/types'

import { columnsConfig } from './columns-config'
import { TableRowSelection } from 'antd/es/table/interface'

type IntentsTableProperties = {
    intents: Intent[]
    onIntentsSelect: (count: number) => void
}

const IntentsTable = ({ intents, onIntentsSelect }: IntentsTableProperties) => {
    const rowSelection: TableRowSelection<Intent> = useMemo(
        () => ({
            type: 'checkbox',
            onChange: (selectedRowKeys) => {
                onIntentsSelect(selectedRowKeys.length)
            },
        }),
        [onIntentsSelect]
    )

    return (
        <Table
            rowSelection={rowSelection}
            rowKey="id"
            dataSource={intents}
            columns={columnsConfig}
            pagination={false}
            size="middle"
        />
    )
}

export default IntentsTable
