import React from 'react';
export const Contact = () => {
    return (
        <>
            <div className="body" id="contact-page">
                <div className="heading">
                    <h1>Contact Us</h1>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="person-name">
                            <div className="contact-info">
                                <label htmlFor="">First Name</label><br />
                                <input type="text" placeholder="First Name" required="" />
                            </div>
                            <div className="contact-info">
                                <label htmlFor="">Last Name</label><br />
                                <input type="text" placeholder="Last Name" required="" />
                            </div>
                        </div>
                        <div className="contact-info">
                            <label htmlFor="">Email</label><br />
                            <input type="email" placeholder="eg.abc@gmail.com" required="" />
                        </div>
                        <div className="contact-info">
                            <label htmlFor="">Message</label><br />
                            <textarea type="text" placeholder="write your message" required="" />
                        </div>
                        <div className="contact-info contact-btn">
                            <input type="button" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact;