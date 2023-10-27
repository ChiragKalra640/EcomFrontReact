import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing.</p>
            <p>Ecommerce encompasses a variety of business models and delivery methods. Types of ecommerce include business-to-consumer (B2C), business-to-business (B2B), and consumer-to-consumer (C2C). Learning about the different types of ecommerce can help you determine the right model for your business.</p>
        </div>
    </div>
  )
}

export default DescriptionBox