import React, { Fragment } from 'react'

const MyCheckbox = ({ label, items = [], refer, handler = () => {} }) => {
    // const toggleCheckbox = (item, index, value) => {
    //     const arr = [...items]
    //
    //     item.checked = value
    //     arr[index] = item
    //
    //     handler(refer, arr)
    // }

    const handleItem = index => {
        const item = items[index]
        item.checked = !item.checked

        items[index] = item

        handler(refer, items)
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
                                // onChange={event => toggleCheckbox(item, index, event.target.checked)}
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
