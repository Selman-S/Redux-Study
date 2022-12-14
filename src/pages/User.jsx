import React from 'react'
import {connect} from 'react-redux'
import {remove} from '../actions'
const Cart = (props) => {

  return (
    <div style={{display: 'flex', flexWrap:'wrap',maxWidth: '1000px',justifyContent: 'center',gap:'1rem',margin:'2rem auto'}}>
      {props.user.map(user => (
         <div style={{width:'18rem',border: '1px solid gray', borderRadius: '5px'}}>
         <div>
           <img style={{width:'100%',height:'18rem',objectFit:'cover'}} src={user.image} alt={user.name} />
           <div style={{padding:'1rem'}}>

           <h2>{user.name}</h2>
           <h3>{user.location}</h3>
           <h3>{user.age}</h3>
           <button style={{
            padding: '5px 1rem',
            backgroundColor: '#e96b5a',
            border: '1px solid #681816',
            color: 'white',
            fontSize: '1rem',
            borderRadius: '5px',
            cursor:'pointer'
            
            
          }} onClick={()=>props.remove(user)}>remove</button>  
           </div>

         </div>
       </div>
      ))}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user:state.user
  }
}
export default connect(mapStateToProps,{remove}) (Cart)
