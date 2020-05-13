# my-checkbox

> A checkbox component for react

[![NPM](https://img.shields.io/npm/v/my-checkbox.svg)](https://www.npmjs.com/package/my-checkbox) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save my-checkbox
```

## Real World Examples

#### Single instance of MyCheckbox

```jsx
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
```

#### Multiple instances of MyCheckbox
##### eg: 1
```jsx
import React, { Component } from 'react'
import MyCheckbox from 'my-checkbox'

const fruits = [ // with initial value
    { txt: 'Apples', checked: false },
    { txt: 'Oranges', checked: false }
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

    render () {
        const { localStore } = this.state

        return (
            <div>
                <MyCheckbox
                    items={fruits}
                    me='peters-fav-fruit-ref' // used to refer this checkbox
                    label="Peter's favourite fruits"
                    handler={this.handler.bind(this)}
                    value={localStore['peters-fav-fruit-ref']} // use value of me
                />
                <MyCheckbox
                    items={fruits}
                    me='lois-fav-fruit-ref'
                    label="Lois's favourite fruits"
                    handler={this.handler.bind(this)}
                    value={localStore['lois-fav-fruit-ref']}
                />
            </div>
        )
    }
}

export default App
```

##### eg: 2

```jsx
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
            <div>
                <MyCheckbox
                    items={fruits}
                    me='peters-fav-fruit-ref' // used to refer this checkbox
                    label="Peter's favourite fruits"
                    handler={this.handler.bind(this)}
                    value={localStore['peters-fav-fruit-ref']} // use value of me
                />
                <MyCheckbox
                    items={fruits}
                    me='lois-fav-fruit-ref' // use camelCase
                    label="Lois's favourite fruits"
                    handler={this.handler.bind(this)}
                    value={localStore['lois-fav-fruit-ref']}
                />
                <MyCheckbox
                    items={inventions}
                    me='stewie-invention-ref'
                    label="Stewie's inventions"
                    handler={this.handler.bind(this)}
                    value={localStore['stewie-invention-ref']}
                />
                <button onClick={this.logStore.bind(this)}>Log Store</button>
            </div>
        )
    }
}

export default App
```
## License

MIT © [saahithyan](https://github.com/saahithyan)
