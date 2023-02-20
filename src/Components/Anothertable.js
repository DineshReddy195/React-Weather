import React from 'react'
import { Context } from './Context';
import { useContext } from 'react';


function Anothertable({value}) {
  const [details,setDetails,city,setCity,search,setSearch]=useContext(Context);
  const removeActivity=(name)=>{
      const removeCity=details.filter(item=>item.n!==name)
    setDetails(removeCity)
  }
  const date = new Date();
  const showTime = date.getHours();
  const time=value.date_and_time;
  const timing=new Date(time).getHours()
  let timing2=showTime-timing
  console.log(timing2)
  

    
  return (
    <>
                  <tr key={value.name} style={{backgroundColor:search===value.n?'yellow':'white'}}>
                      <td className='head1'>{value.n}</td>
                      <td className='head1'><h5 className='desc'>{value.description}</h5></td>
                      <td className='head1'>{value.temp_in_celsius}</td>
                      <td className='head1'>{value.pressure_in_hPa}</td>
                      <td className='head1'>{timing2} Hrs</td>
                      <td className='delete'onClick={()=>{removeActivity(value.n)}}>delete</td>
                  </tr>
              
        </>
  )     
}
      

export default Anothertable
