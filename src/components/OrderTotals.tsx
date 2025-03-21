import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { useMemo } from "react"

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder}:OrderTotalsProps) {
  const subtotalAmount = useMemo(()=>order.reduce((total, item)=>total + (item.price * item.quantity),0), [order])
  const tipAmount = useMemo(()=>subtotalAmount * tip,[tip, order])
  const totalAmount = useMemo(()=>subtotalAmount + tipAmount,[tip, order])

  return (
    <>
      <div className="space -y-3">
          <h2 className="font-black text-2xl">Totales y Propinas</h2>
          <p> Subtotal a pagar: {' '}
            <span className=" font-bold">{formatCurrency(subtotalAmount)}</span>
          </p>
          <p> Propina: {' '}
            <span className=" font-bold">{formatCurrency(tipAmount)}</span>
          </p>
          <p> Total a pagar: {' '}
            <span className=" font-bold">{formatCurrency(totalAmount)}</span>
          </p>
      </div>

      <button 
          className = "w-full bg-black p-3 mt-10 uppercase text-white font-bold disabled:opacity-10"
          disabled = {totalAmount === 0}
          onClick={placeOrder}
          >
             Guardar Orden
      </button>
    </>
  )
}
