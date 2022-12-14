import React from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions'
import {deleteUser} from '../actions'



const Home = (props) => {


  return (
    <div style={{display: 'flex', flexWrap:'wrap',maxWidth: '1000px',justifyContent: 'center',gap:'1rem',margin:'2rem auto',minHeight:'calc(100vh - 160px)' }}>
      
      {props.userList.map((user) =>(
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
            cursor:'pointer'
            
            
          }} onClick={()=>props.addUser(user)}>Add User</button>  
           <button style={{
            padding: '5px 1rem',
            backgroundColor: '#e96b5a',
            border: '1px solid #681816',
            color: 'white',
            fontSize: '1rem',
            borderRadius: '5px',
            cursor:'pointer',
            marginLeft: '10px',
            
            
          }} onClick={()=>props.deleteUser(user)}>Delete User</button>  
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
    user:state.user
  }
}

export default connect(mapStateToProps, {addUser,deleteUser})(Home) 