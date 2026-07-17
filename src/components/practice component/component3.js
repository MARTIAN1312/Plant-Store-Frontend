import { useContext } from "react"
// import { person_name,person_name2 } from "../../App"
export default function Component3(add){
    // const name=useContext(person_name)
    // const name2=useContext(person_name2)
    console.log('Component3 changed')
    return(
        
        <>

          <div>
            {/* <h1>Hello, my name is {name} and my friend's name is {name2}</h1> */}
          </div>
         {/* <person_name.Consumer>
            {(name)=>{
                return(
                    <person_name2.Consumer>
                        {(name2)=>{
                            return(
                                <h1>Hello, my name is {name} and my friend's name is {name2}</h1>
                            )
                        }}
                    </person_name2.Consumer>
                )
            }}
         </person_name.Consumer> */}
        </>
    )
}