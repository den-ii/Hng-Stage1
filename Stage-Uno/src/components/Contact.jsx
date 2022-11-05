import React from "react"
import Footer from "./Footer"
import {useForm} from "react-hook-form"

export default function Contact() {
    const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        message: "", 
        agreed: false,
    })
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    let style = []
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        if (formData.message === "") {
            console.log('error')
            style.push({
                borderColor: "red"
            })
        }
        console.log(formData)
    }
    return (
        <div>
            <div className="contact--page">
                <h1 className="contact--header">Contact Me</h1>
                <p className="contact--leading">Hi there, contact me to ask me about anything you have in mind</p>
                <form className="contact--form" onSubmit={handleSubmit}>
                    <div className="name--flex">
                        <div>
                        <label htmlFor="first_name">First name</label>
                        <input className="contact--form__text" value={formData.firstName} id="first_name" name="firstName" onChange={handleChange} type="text" placeholder="Enter your first name" />
                        </div>
                        <div>
                        <label htmlFor="last_name">Last name</label>
                        <input className="contact--form__text" value={formData.lastName} id="last_name" name="lastName" onChange={handleChange} type="text" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input className="contact--form__text" value={formData.email} id="email" name="email" type="email" onChange={handleChange}  placeholder="yourname@email.com" />
                    <p className="textarea--label">Message</p>
                    <textarea
                    style={style}
                        value={formData.message} 
                        onChange={handleChange}
                        className="contact--form__textarea"
                        name="message"
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                    />
                    <div className="checkbox--container">
                        <input checked={formData.agreed} style={style[0]} className="contact--form__checkbox" type="checkbox" onChange={handleChange} id="agreed" name="agreed" />
                        <label className="checkbox--label" htmlFor="agreed">You agree to providing your data to Juicio who may contact you.</label>
                    </div>
                    <button className="contact--form__submit">Send message</button>
                </form>
            </div>
            <Footer />
        </div>
)
}