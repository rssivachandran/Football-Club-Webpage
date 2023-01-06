import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="section footer bg-dark text-white ">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>Company Information</h6>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut ipsam cumque distinctio quidem eius veniam error laudantium, aperiam rem rerum, nulla nihil dolore debitis. Temporibus quam nemo ducimus id!
                    </p>
                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr />
                    <div className=''><Link to="/">Home</Link></div>
                    <div><Link to="/about">About Us</Link></div>
                    <div><Link to="/contact">Contact Us</Link></div>
                </div>
                <div className="col-md-4">
                    <h6>Contact Informantion</h6>
                    <hr />
                    <div><p className="text-white mb-1">#001, Kumbakonam Naragarkovil India, Tamilnadu</p></div>
                    <div><p className="text-white mb-1">+91 0011223344</p></div>
                    <div><p className="text-white mb-1">club.01@email.com</p></div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Footer