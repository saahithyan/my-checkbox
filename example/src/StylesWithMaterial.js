import React, { Component } from 'react'
import MyCheckbox from 'my-checkbox'

const fruits = [
    { txt: 'Apples', checked: false },
    { txt: 'Oranges', checked: true }
]

const style = {
    label: '',
    check: 'filled-in',
    txt: ''
}

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
            <div>
                <MyCheckbox
                    items={fruits}
                    style={style}
                    value={favouriteFruits}
                    label='Peters favourite fruits'
                    handler={this.handler.bind(this)}
                />
                <button className='mdc-button foo-button mdc-button__ripple mdc-button__label'>Click Me</button>
            </div>
        )
    }
}

export default App
