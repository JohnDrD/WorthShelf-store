
import { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard/ProductCard"
import type { ProductCardParams } from "../ProductCard/ProductCard.interface"
import axios from "axios"


export function ListProducts(){
    const [products, setProducts]= useState<ProductCardParams[]>([])
    const  getData= async()=>{
        axios.get("http://localhost:3000/stocks?amount=10").then(res=>{
            setProducts(res.data.data)
        })
    }
    useEffect(()=>{
    getData()
    },[])
    return(<>
    <div className="mt-2 mx-3 mb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {products.map((product)=>{
            return(<ProductCard 
                key={product.uuid}
                uuid={product.uuid} 
                name={product.name} 
                unitValue={product.unitValue} 
                stock={product.stock} 
                description={product.description} 
                images={product.images} 
                dateCreated={product.dateCreated}/>)
        })}
    </div>
    </>)
}