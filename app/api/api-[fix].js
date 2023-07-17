"use client"
import React, { useState, useEffect } from "react"

export default function Api() {
    const [product, setProducts] = useState();

    const getApiData = async () => {
        const response = await fetch(
          "https://corebiz-test.herokuapp.com/api/v1/products", {
              method: 'GET',
              mode: 'no-cors',
              credentials: 'same-origin',
              redirect: 'follow',
              headers: {
                "Content-Type": "application/json"
              }
          }
        ).then((response) => response.json());
      
        setProducts(response);
      };

      useEffect(() => {
        getApiData();
      }, []);

    return product
}