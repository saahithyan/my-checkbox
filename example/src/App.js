import React, { Component } from 'react'

import MyCheckbox from 'my-checkbox'
import 'my-checkbox/dist/index.css'

class App extends Component {
    state = {
        items: [
            { txt: 'item 1', checked: false },
            { txt: 'item 2', checked: true }
        ]
    }

    handler (item, index) {
        const items = [...this.state.items]
        items[index] = item

        this.setState({ items })
    }

    render () {
        const { items } = this.state

        return (
            <MyCheckbox
                label='My Checkbox heading'
                items={items}
                handler={() => this.handler()}
            />
        )
    }

}

export default App
