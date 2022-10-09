import React from 'react'
import {connect} from 'react-redux'

const Cart = (props) => {
  console.log(props);
  return (
    <div style={{display: 'flex', flexWrap:'wrap',width: '1000px',justifyContent: 'center',gap:'1rem',margin:'2rem auto'}}>
      {props.cart.map(user => (
         <div style={{width:'18rem',border: '1px solid gray', borderRadius: '5px'}}>
         <div>
           <img style={{width:'100%',height:'18rem',objectFit:'cover'}} src={user.image} alt={user.name} />
           <div style={{padding:'1rem'}}>

           <h2>{user.name}</h2>
           <h3>{user.location}</h3>
           <h3>{user.age}</h3>
           <button style={{
            padding: '5px 1rem',
            backgroundColor: '#458daa',
            border: '1px solid #0c394b',
            color: 'white',
            fontSize: '1rem',
            borderRadius: '5px',
            
            
          }} onClick={()=>props.addCart(user)}>Add Cart</button>  
           </div>

         </div>
       </div>
      ))}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    cart:state.cart
  }
}
export default connect(mapStateToProps) (Cart)
