import { useState } from "react"
import type{MenuItem, OrderItem} from '../types'

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem =(item : MenuItem)=>{
        const itemExist = order.find(itemOrder=>itemOrder.id === item.id)
        if (itemExist){
            const updateOrder = order.map(itemOrder=>itemOrder.id === item.id ? 
                {...itemOrder, quantity:itemOrder.quantity + 1} :itemOrder)
            setOrder(updateOrder)
        }
        else{
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem])
        }
        console.log(order)
    }
    const removeItem = (id: MenuItem['id'])=>{
        console.log("eliminando", id)
        setOrder(order.filter(item=>item.id !== id))
    }

    return {
        order,
        addItem,
        removeItem
     }
}
