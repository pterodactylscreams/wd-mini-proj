import { useState } from "react";


const Contact = () => {
    const [data, setData] = useState(
        {name: '', email:"", phone:"", message:""}
    );
    const handleChange = (e) => {
const name = e.target.name;
const value = e.target.value;
setData({...data, [name]: value})
    }
    const handleSubmit = (e) => {
e.preventDefault()
alert("Submit Details")
   }

   document.body.style.background = "linear-gradient(90deg, rgba(245, 69, 125,1) 0%, rgba(245,33,114,1) 32%, rgba(255,0,0,1) 88%)";
   
    return ( 
        <div className="contactdiv">
        {/* <div className="img4">
                <img src={img4} width={500} height={800}/>
        </div> */}
        <div className = 'contact'>
        <form method='post' onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <input type = "text" name = "name" id = "" placeholder = "Your Name" onChange={handleChange} value = {data.name}></input>
            <input type = "email" name = "email" id = "" placeholder = "example@gmail.com" onChange={handleChange} value = {data.email}></input>
            <input type = "phone" name = "phone" id = "" placeholder = "+91" onChange={handleChange} value = {data.phone}></input>
            <textarea name = "message" id = "" placeholder="Your Message" onChange={handleChange} value = {data.message}></textarea>
            <button type = 'submit'>Connect</button>
        </form>
        </div>
        </div>
     );
}
 
export default Contact;