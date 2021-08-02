import React,{useEffect,useState} from 'react'
let url = 'https://www.breakingbadapi.com/api/quote/random?author=Jesse+Pinkman';
function Qoute() {
    const [qoute,setQoute] = useState({});
    const getQoute = async() =>{
        const response = await fetch(url)
        const data = await response.json();
        setQoute(data[0]);

    }
    useEffect(()=>{
        let qi = 
         setInterval(()=> getQoute()
        ,10000)
           
  

        return () => clearInterval(qi)
    },[qoute])
 
    return (
        <div className="card bg-orange w-100">
         <p>{qoute.quote}</p>
         <p>{qoute.author}</p>
            
        </div>
    )
}

export default Qoute
