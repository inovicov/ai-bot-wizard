import React from 'react'

import { Hero, IntentInfo, ProcessInfo } from 'common/components'
import BotWizard from './common/components/bot-wizard'

function App() {
    return (
        <>
            <Hero />
            <ProcessInfo />
            <IntentInfo />
            <BotWizard />
        </>
    )
}

export default App
