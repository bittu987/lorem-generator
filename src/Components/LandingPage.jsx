import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from '../Data'


const Container = styled.div`
   padding: 10px;
   width: 85vw;
   height:max-content;
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

function LandingPage() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e)=>{
       e.preventDefault();
       let amount = parseInt(count);
       if(amount<=0) alert("Ayyo ! you know that you wrote negative input 😵");
       if(amount>10) amount = 10 && alert("Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
       setText(data.slice(0,amount));
       setCount(0);
  }
  

  return (
    <Container>
      <section>
        <h3 style={{ color: "#94360b", fontSize: "1.75rem", lineHeight: "3" }}>TIRED OF BORING LOREM IPSUM?</h3>
      </section>
      <form onSubmit={handleSubmit}>
        <label style={{ fontWeight: "400", fontSize: "1.2em", }}>Paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} style={{ width: "50px", margin: "0px 10px 0px 10px", padding: "3px" }}
          onChange={(e) => setCount(e.target.value)}
        />
        <button style={{ backgroundColor: "#f5873d", border: "none", padding: "6px", borderRadius: "3px", color: "white", cursor: "pointer" }}>GENERATE</button>
      </form>

      <article style={{ marginTop: "60px" }}>
      {
        text.map((data,index)=>{

          return <p style={{marginBottom:"10px",color:"#99430a"}} key={index}>{data}</p>
          
        })
      } 
      </article>
    </Container>
  )
}

export default LandingPage