import { useState } from "react";


const StateFulform = () => {

const [email , setEmail] = useState(null);
const [password , setPassword] = useState(null);
const [name , setName] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();  
        console.log(email , password , name);
    }
    const handleemailchange = e =>{
        
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlepasswordchange = e =>{
        setPassword(e.target.value)
    }

    const handlenamechange = e =>{
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                onChange={handlenamechange}
                type="text" name="name" />
                <br />
                <input
                 onChange={handleemailchange}
                 type="email" name="email" />
                <br />
                <input 
                onChange={handleemailchange}
                type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default StateFulform;

