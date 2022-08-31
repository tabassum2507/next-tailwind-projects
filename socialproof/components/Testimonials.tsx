import React from 'react'
import { TestimonialCard } from './TestimonialCard'

const TESTIMONIAL_DATA = [

    {
        customerName: "Colton Smith",
        imageURL: "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        testimonialText: "We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time.Excellent!",

    },

    {
        customerName: "Irene Roberts",
        imageURL: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        testimonialText: "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",

    },

    {
        customerName: "Anne Wallace",
        imageURL: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        testimonialText: "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",

    },


];

export const Testimonials = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {
                TESTIMONIAL_DATA.map((item) => {
                    return <TestimonialCard customerName={item.customerName} imageURL={item.imageURL} testimonialText={item.testimonialText} />
                })

            }
        </div>
    )
}
