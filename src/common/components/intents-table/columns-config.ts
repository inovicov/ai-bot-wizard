import { Reply } from 'common/types'

import { ExpressionsListCell, IntentDescriptionCell } from './column-components'

export const columnsConfig = [
    {
        title: 'Intent type',
        render: IntentDescriptionCell,
    },
    {
        title: 'Training expressions',
        dataIndex: 'trainingData',
        render: ExpressionsListCell,
    },
    {
        title: 'Reply',
        dataIndex: 'reply',
        render: (reply: Reply) => reply.text,
    },
]
