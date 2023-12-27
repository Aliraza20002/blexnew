import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/Acordain.css"
import AOS from "aos";
import "aos/dist/aos.css";

const Accordion = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  const accordionData = [
    {
      id: 1,
      question: 'What are the key differences between Blex7, Alibaba, B2B platforms, and sourcing agents?',
      answer:
        "Alibaba and other B2B platforms primarily involve selecting products, connecting with suppliers, and negotiating prices. This means buyers are actively engaged throughout the entire process, from searching for products that match their requirements to negotiating prices and handling shipments. Sourcing agents function similarly to B2B platforms but can save you some time.",
    },
    {
      id: 2,
      question: 'How do I register with Blex7, and why is the registration process significant?',
      answer:
        "Registering with Blex7 is straightforward. Click on the simple registration form, fill in the required information, and submit it. We typically take 3 days to review your registration and the documents submitted via our form. There might be a brief conversation via phone and email before granting you access to our platform. Once your registration is approved, you can enjoy full access to our platform.",
    },
    {
      id: 3,
      question: 'What is the minimum order quantity required to use Blex7 services?',
      answer:
        "There is no minimum order quantity when you are using Blex7 whether 1 piece or mass production, all of our listed suppliers are capable of filling any order as per your given target prices.",
    },
    {
      id: 4,
      question: 'Is my sourcing secure with Blex7?',
      answer:
        "Yes, your sourcing and all business secrets are safe with Blex7. We do not disclose your information to suppliers to prevent spam messages and emails. ",
    },
    {
      id: 5,
      question: ' How does Blex7 perform quality inspections, and are there service charges?',
      answer:
        "All of our manufacturers are obligated to deliver quality products as per our agreement. Additionally, Blex7 offers random quality and quantity inspection services free of charge when you place an order through Blex7.",
    },
    {
        id: 6,
        question: ' What do shipping, logistics, and customs clearance mean?',
        answer:
          "Blex7 also has a network of specialized shipping companies in various regions. When you request a shipping quote through our platform, Blex7's AI matches you with shipping companies and provides their quotes. ",
      },
      {
        id: 7,
        question: 'What additional services are available to me?',
        answer:
          "Blex7 offers logo design, package design, and website design services. Simply share your idea, and our professional team will provide you with the final design, along with a mockup. Logo design starts at $2, packages at $5, and basic website design for as low as $10. For more details, you can find 'Other services' in your dashboard to get further information.",
      },
  ];

  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <Element name="accordion"> {/* Add this line to wrap the component with Element */}
    <section  id="acordain" className="py-4" style={{backgroundColor:'transparent',backgroundImage:'linear-gradient(0deg, rgb(69 86 108) 0%, rgb(5 12 21) 100%)'}}>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 mx-auto text-center">
            <h2 style={{color:'aliceblue',fontFamily:'auto'}}>Frequently Ask Questions</h2>
            <p></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="accordion" id="accordionRental" >
              {accordionData.map(({ id, question, answer }) => (
                <div key={id} className="accordion-item mb-3" style={{border:'1px solid'}}>
                  <h5 className="accordion-header" id={`heading${id}`}>
                    <button
                      className="accordion-button  font-weight-bold"
                      type="button"
                      onClick={() => handleToggle(id)}
                      style={{backgroundColor:"#ffffffe3;",color:'black',paddingRight:'39px', border:'none !important'}}
                    >
                      {question}
                      <i
                        className={`fa ${
                          openItemId === id ? 'fa-minus' : 'fa-plus'
                        } text-xs pt-1 position-absolute end-0`}
                        style={{paddingRight:'2rem'}}
                      ></i>
                    </button>
                  </h5>
                  <div
                    id={`collapse${id}`}
                    className={`accordion-collapse collapse ${
                      openItemId === id ? 'show' : ''
                    }`}
                    aria-labelledby={`heading${id}`}
                    data-bs-parent="#accordionRental"
                  >
                    <div className="accordion-body text-sm opacity-8">{answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Element>
);
};

export default Accordion;
