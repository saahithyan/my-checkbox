import React, { Component } from 'react'
import MyCheckbox from 'my-checkbox'

const fruits = [ // with initial value
    { txt: 'Apples', checked: false },
    { txt: 'Oranges', checked: true }
]

class App extends Component {
    state = {
        favouriteFruits: []
    }

    handler (me, value) {
        this.setState({ favouriteFruits: value })
    }

    render () {
        const { favouriteFruits } = this.state

        return (
            <MyCheckbox
                label='Peters favourite fruits'
                items={fruits}
                value={favouriteFruits}
                handler={this.handler.bind(this)}
            />
        )
    }
}

export default App
