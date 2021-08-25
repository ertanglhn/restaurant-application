import React, { useEffect } from 'react'
import { createAPIEndpoint, ENDPOINTS } from "../../api";

export default function OrderList() {

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ORDER).fetchAll()
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            list of existing orders
        </div>
    )
}
