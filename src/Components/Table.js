import React from 'react'
import Cities from './Cities'
import Anothertable from './Anothertable'
import { Context } from './Context';
import { useContext } from 'react';
function Table() {
  const [details,setDetails,city,setCity,search,setSearch]=useContext(Context);
  // alert(search)
  return (
    <div>
      <div className='weather'>
        <table rules='all' frame='box'>
            <thead>
                <tr>
                    <th className='head'>City</th>
                    <th className='head'>Description</th>
                    <th className='head'>Temperature<span>(&deg;C)</span> </th>
                    <th className='head'>Pressure (hpa)</th>
                    <th className='head'>Data age (hrs)</th>
                    <th className='head'></th>
                </tr>
            </thead>
          <tbody>
          {details.length===0?(<tr><th colSpan='6'><h1 className='h1'>No Data</h1></th></tr>):(
          <>
          {details.map((e,i)=>{
            return (
              <Anothertable value={e} key={e.name} />
            )
          })}
          </>
        )}
          </tbody>
        </table>
        

        
      </div>
    </div>
  )
}

export default Table
