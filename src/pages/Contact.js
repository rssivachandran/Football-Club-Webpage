import React from "react";

function Contact() {
  return (
      <section class="mb-4 px-md-5">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact Us
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                    />

                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="Your Mail ID"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
<br />
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                      placeholder="Comment"
                    ></textarea>
                    
                  </div>
                </div>
              </div>
            </form>
            <br />


            <div class="text-center text-md-left">
              <a
                class="btn btn-primary"
                onclick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>#001, Kumbakonam Naragarkovil India, Tamilnadu</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+91 0011223344</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>club.01@email.com</p>
              </li>
            </ul>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
      </section>
  
  );
}

export default Contact;