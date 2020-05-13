import React, { Component } from 'react'
import MyCheckbox from 'my-checkbox'

const fruits = [
    { txt: 'Apples', checked: false },
    { txt: 'Oranges', checked: false }
]

const inventions = [
    { txt: 'Time Machine', checked: true },
    { txt: 'Laser Pistol', checked: true },
    { txt: 'Freeze Gun', checked: false },
    { txt: 'Weather Control Device', checked: false }
]

class App extends Component {
    state = {
        localStore: {}
    }

    handler (me, value) {
        const localStore = { ...this.state.localStore }
        localStore[me] = value

        this.setState({ localStore })
    }

    logStore () {
        const { localStore } = this.state
        console.log('log localStore', localStore)
    }

    render () {
        const { localStore } = this.state

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <MyCheckbox
                            items={fruits}
                            me='peters-fav-fruit-ref' // used to refer this checkbox
                            label="Peter's favourite fruits"
                            handler={this.handler.bind(this)}
                            value={localStore['peters-fav-fruit-ref']} // use value of me
                        />
                    </div>
                    <div className="col-md-4">
                        <MyCheckbox
                            items={fruits}
                            me='lois-fav-fruit-ref' // use camelCase
                            label="Lois's favourite fruits"
                            handler={this.handler.bind(this)}
                            value={localStore['lois-fav-fruit-ref']}
                        />
                    </div>
                    <div className="col-md-4">
                        <MyCheckbox
                            items={inventions}
                            me='stewie-invention-ref'
                            label="Stewie's inventions"
                            handler={this.handler.bind(this)}
                            value={localStore['stewie-invention-ref']}
                        />
                    </div>
                </div>

                <div className="row">
                    <button onClick={this.logStore.bind(this)}>Log Store</button>
                </div>
            </div>
        )
    }
}

export default App
