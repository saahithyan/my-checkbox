import React, { Fragment } from 'react'

const MyCheckbox = ({ label, items = [], value = [], me, handler = () => {} }) => {
    items = value.length > 0 ? value : JSON.parse(JSON.stringify(items))

    const handleItem = index => {
        const item = items[index]
        item.checked = !item.checked

        items[index] = item

        handler(me, items)
    }

    return (
        <Fragment>
            <label htmlFor={label}>{label}</label>
            {
                items.map((item, index) => {
                    return (
                        <div key={index} onClick={() => handleItem(index)}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => {}} // only to skip react warning
                            />
                            <label htmlFor={item.txt}>{item.txt}</label>
                        </div>
                    )
                })
            }
        </Fragment>
    )
}

export default MyCheckbox
