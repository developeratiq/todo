import React,{useEffect} from 'react'

function Task({items,index,del,update}) {
    
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]
    useEffect(()=>{
        let value = colors[index%5].primaryColor
        console.log(value)
    },[])
   
    
  return (
    <>
      <div className="card-wrapper mr-5" key={items.id}>
                  <div className="card-top" 
                  style={{ "backgroundColor": colors[index % 5].primaryColor }}
                  ></div>
                  <div className="task-holder">
                    <span className="card-header"
                     style={{ "backgroundColor": colors[index % 5].secondaryColor, "borderRadius": "10px" }}
                     >Todos</span>
                    <p className="mt-3"
                     style={{textTransform:"capitalize", fontWeight:"bolder"}}
                    >{items.items}</p>
                     <div 
                    style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}
                    >
                      <i className="far fa-edit mr-3" 
                      style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }}
                      
                      onClick={()=>update(items.id)}
                       ></i>
                      <i className="fas fa-trash-alt"
                       style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }}
                        onClick={()=>del(items.id)}
                        ></i>
                    </div>
                  </div>

                </div>
    </>
  )
}

export default Task