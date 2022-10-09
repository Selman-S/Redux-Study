import React from 'react'
import {connect} from 'react-redux'
import {addCart} from '../actions'



const Home = (props) => {
  console.log(props.userList,props.cart,props.addCart);
  return (
    <div style={{display: 'flex', flexWrap:'wrap',width: '1000px',justifyContent: 'center',gap:'1rem',margin:'2rem auto'}}>
      
      {props.userList.map((user) =>(
        <div style={{width:'18rem',border: '1px solid gray', borderRadius: '5px'}}>
          <div>
            <img style={{width:'100%',height:'18rem',objectFit:'cover'}} src={user.image} alt={user.name} />
            <div style={{padding:'1rem'}}>

            <h2>{user.name}</h2>
            <h3>{user.location}</h3>
            <h3>{user.age}</h3>
            <button onClick={()=>props.addCart(user)}>Add Cart</button>  
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}



const mapStateToProps = (state) =>{
  return {
    userList: state.userList,
    cart:state.cart
  }
}

export default connect(mapStateToProps, {addCart})(Home) 