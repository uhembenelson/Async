import React, { useState } from 'react'

const Faq = () => {
  // const [show, setShow] = useState(false);
  const [me, setMe] = useState("");
  const [faqData, setFaqData ] = useState([
    {
      id:'1',
      question: 'Esarunt ullamco est sit aliqua dolor do amet sint?',
      answer: 'aliqua dolor do amet sint Esarunt ullamco est sit aliqua dolor do amet sint?'
    },
    {
      id:'2',
      question: 'Apakah aplikasi ini gratis?',
      answer: 'aliqua dolor do amet sint Esarunt ullamco est sit aliqua dolor do amet sint?'
    },
    {
      id:'3',
      question: 'Esarunt ullamco est sit aliqua dolor do amet sint?',
      answer: 'aliqua dolor do amet sint Esarunt ullamco est sit aliqua dolor do amet sint?'
    },
    {
      id:'4',
      question: 'Esarunt ullamco est sit aliqua dolor do amet sint?',
      answer: 'aliqua dolor do amet sint Esarunt ullamco est sit aliqua dolor do amet sint?'
    },
    {
      id:'5',
      question: 'Esarunt ullamco est sit aliqua dolor do amet sint?',
      answer: 'aliqua dolor do amet sint Esarunt ullamco est sit aliqua dolor do amet sint?'
    },
    {
      id:'6',
      question: 'Esarunt ullamco est sit aliqua dolor do amet sint?',
      answer: 'aliqua dolor do amet sint Esarunt ullamco est sit aliqua dolor do amet sint?'
    },
  ])
  
  const handleChange = (item) => {
    console.log("this is working", item)
    if(me === ""){
      setMe(item.id)
    }else{
      setMe("")
    }
  }
  return (
    <div className="container">
      <div className="heading-one-small uk-text-center uk-margin-large-top">Frequently Asked Questions</div>
      <div className="body-large subtext-color uk-text-center">lorem ipsum dolor ipsum lorem dolor lorem ipsum dolor.</div>
      <div className="">

      <ul className="uk-visible@l" uk-accordion>

        {
          faqData.map((item) => 
          <li className="" style={{listStyle: 'none', }}>
            <div className="uk-margin-top " style={{}}>
            <div onClick={() =>{handleChange(item)}} class="uk-accordion-title heading-two">{item.question}</div>
            </div>
          
          
          {
            me === item.id? (<div class="uk-accordion-content body-large">{item.answer}</div>): null
          }
        </li>  

          )
        }
        
      </ul>

      {/* mobile screen */}
      <ul className="uk-hidden@l" uk-accordion>

        {
          faqData.map((item) => 
          <li className="" style={{listStyle: 'none', }}>
            <div className="uk-margin-top " style={{}}>
            <div onClick={() =>{handleChange(item)}} class="uk-accordion-title body-large">{item.question}</div>
            </div>
          
          
          {
            me === item.id? (<div style={{}} class="uk-accordion-content body-small">{item.answer}</div>): null
          }
        </li>  

          )
        }
        
      </ul>
    </div>
    </div>
  )
}

export default Faq