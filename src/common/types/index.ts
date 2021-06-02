export type Reply = {
    id: string
    text: string
}

export type Expression = {
    id: string
    text: string
}

export type TrainingData = {
    expressionCount: number
    expressions: Expression[]
}

export type Intent = {
    id: string
    name: string
    description: string
    trainingData: TrainingData
    reply: Reply
}
