import React from 'react'
import { Frame } from '@surfboard/ui'
import BindableComponent from './BindableComponent'

interface ValueState {
    value: any
}

export default class Value extends BindableComponent<{}, ValueState> {
    state = { value: undefined }

    render() {
        return <Frame>{this.state.value}</Frame>
    }
}
