import React, { Component } from 'react'
import MyCheckbox from 'my-checkbox'
import 'bootstrap-css'

const fruits = [
    { txt: 'Apples', checked: false },
    { txt: 'Oranges', checked: true }
]

const style = {
    label: 'display-4',
    check: '',
    txt: 'col-md-2 text-muted'
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
            <div className="container">
                <MyCheckbox
                    items={fruits}
                    style={style}
                    value={favouriteFruits}
                    label='Peters favourite fruits'
                    handler={this.handler.bind(this)}
                />
            </div>
        )
    }
}

export default App
