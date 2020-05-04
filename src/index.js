import React, { Fragment } from 'react'

const MyCheckbox = ({ label, items = [], handler = () => {} }) => {
    const toggleCheckbox = (item, index, value) => {
        item.checked = value
        handler(item, index)
    }

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            {
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={event => toggleCheckbox(item, index, event.target.checked)}
                            />
                            <label htmlFor={item.txt}>{item.txt}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyCheckbox
