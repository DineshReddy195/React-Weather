import React, {useRef} from 'react'
import Table from './Table'
import { Context } from './Context';
import { useContext } from 'react';

function Cities() {
  const [details,setDetails,city,setCity,setSearch]=useContext(Context);
 
  const inputRef=useRef()
  const handleSearch=()=>{
    setSearch(inputRef.current.value)
    inputRef.current.value=''
    setTimeout(() => {
      setSearch('')
    }, 3000);
  }

    const handleClick=()=>{
      if(city.length>0){
        
      
      const cityName=city[0];
      fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`).then((response)=>response.json()).then(data=>{
        const info=city.filter((e,i)=>i!==0)
        setCity(info)
        setDetails([...details,{n:cityName,...data}])
      })
    }
      }
  return (
    <div className='cities'>
      <div className='menu'>
        <button className='button' onClick={handleClick}>Get Weather</button>
        <table className='list'>
            <thead className='th1'>
                <tr><th className='info'>City</th></tr>
                <tdody className='tb1'>
                <tr><td id='city' className={details.length<1?"t0":"t"}>London</td></tr>
                <tr><td id='city1' className={details.length<2?"t0":"t"}>New York</td></tr>
                <tr><td id='city2' className={details.length<3?"t0":"t"}>Los Angeles</td></tr>
                <tr><td id='city3' className={details.length<4?"t0":"t"}>Las Vegas</td></tr>
                </tdody>
            </thead>

        </table>
      </div>
      <div>
        <div className='input'>
            <section>
                <input type="text" className='text' placeholder='City Name' ref={inputRef}/>
            </section>
            <section>
                <button class="search" onClick={handleSearch}>Search</button>
                </section>
        </div>
        <div>
            <Table/>
        </div>
      </div>
    </div>
  )
}

export default Cities
