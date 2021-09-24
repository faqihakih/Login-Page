import React from 'react'
import { Button } from 'react-bootstrap'

export default function button({title, color}) {
    return (
        <div>
            <Button className="px-5" variant={color}>{title}</Button>
        </div>
    )
}
