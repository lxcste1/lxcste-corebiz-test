"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Api() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/db/mock.json').then((res) => setProducts(res.data)).catch((err) => console.log(err));
    }, [])

    return products
}