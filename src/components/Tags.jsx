import React, { useEffect, useState } from 'react'
import { got } from '../data'
import People from './People'


function Tags() {
    const[active,setActive]=useState("")
    const[people,setPeople]= useState(null)

    const houses = got.map((eachHouse) => eachHouse.houses)
    const names = houses[0].map((eachName) => eachName.name)
    const allPeople = houses.map((eachPeople) => {
        return eachPeople.map((each) => {
            console.log(each,"eachhhhh")
            return each.people

            // setPeople( each.people)

        })
        
    })
    useEffect(() => {
        let flatedPeople = allPeople.flat(Infinity)
        console.log(flatedPeople)
        setPeople(flatedPeople)
    },[])
    console.log(allPeople,"alll")


    const handleClick = (each) => {
        setActive(each)
        let peopleFromHouses = houses.map((eachHouse) => {

          return  eachHouse.filter((eachPeople) => {
                if(eachPeople.name === each){
                  setPeople(eachPeople.people)
                }
            })
            
        })  
    }


    
    

    
  return (
    <div className='container'>
        <div>
            {
                names.map((each) => {
                   
                    return(
                        <button onClick={() => handleClick(each)} className= {`buttons ${each === active ? "active_one" : ""}`}>{each}</button>
                    )
                })   
               
            }
        
           
               
                     
            
        </div>
        


            <People people = {people}/>


    </div>
  )
}

export default Tags