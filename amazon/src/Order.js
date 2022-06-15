import React from 'react'
import moment from 'moment'


function Order({order}) {
    //takes in props from the order section
  return (
    <div className='order'>
          <h2>Order</h2>
          <p>{moment.unix().format('MMMM Do YYYY, h:mma')}</p>
          <p className='order_id'>
              <small>{/*order id*/}</small>
               {/*props for the order id */}
          </p>
    </div>
  )
}

export default Order