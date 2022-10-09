import React, { useState } from 'react'
import { createUser } from '../actions'
import { connect } from 'react-redux'

const Create = props => {
  const init = {
    name: '',
    location: '',
    age: '',
    image: '',
  }
  const [user, setUser] = useState(init)

  const handleUser = e => {
    e.preventDefault()
    props.createUser(user)

    setUser(init)
  }
  return (
    <div
      style={{
        margin: '1rem auto',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 192px)',
      }}
    >
      <div>
        <h2>Create User</h2>
        <form
          action="post"
          style={{
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid black',
            backgroundColor: '#ddd',
            borderRadius: '5px',
            border: '1px solid #0c394b',
          }}
          onSubmit={e => handleUser(e)}
        >
          <div>
            <label
              htmlFor="name"
              style={{ fontSize: '1rem', marginBottom: '8px' }}
            >
              Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              placeholder="Name"
              style={{
                width: '300px',
                padding: '8px',
                fontSize: '1rem',
                margin: '8px 0',
                borderRadius: '5px',
                border: '1px solid #0c394b',
              }}
              value={user.name}
              onChange={e => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="location"
              style={{ fontSize: '1rem', marginBottom: '8px' }}
            >
              Location
            </label>
            <br />
            <input
              type="text"
              id="location"
              placeholder="location"
              style={{
                width: '300px',
                padding: '8px',
                fontSize: '1rem',
                margin: '8px 0',
                borderRadius: '5px',
                border: '1px solid #0c394b',
              }}
              value={user.location}
              onChange={e => setUser({ ...user, location: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="age"
              style={{ fontSize: '1rem', marginBottom: '8px' }}
            >
              Age
            </label>
            <br />
            <input
              type="number"
              id="age"
              placeholder="age"
              style={{
                width: '300px',
                padding: '8px',
                fontSize: '1rem',
                margin: '8px 0',
                borderRadius: '5px',
                border: '1px solid #0c394b',
              }}
              value={user.age}
              onChange={e => setUser({ ...user, age: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="image"
              style={{ fontSize: '1rem', marginBottom: '8px' }}
            >
              Image
            </label>
            <br />
            <input
              type="text"
              id="image"
              placeholder="image"
              style={{
                width: '300px',
                padding: '8px',
                fontSize: '1rem',
                margin: '8px 0',
                borderRadius: '5px',
                border: '1px solid #0c394b',
              }}
              value={user.image}
              onChange={e => setUser({ ...user, image: e.target.value })}
            />
          </div>
          <div style={{ margin: '8px auto' }}>
            <button
              style={{
                padding: '5px 1rem',
                backgroundColor: '#458daa',
                border: '1px solid #0c394b',
                color: 'white',
                fontSize: '1rem',
                borderRadius: '5px',
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    userList: state.userList,
    user: state.user,
  }
}

export default connect(mapStateToProps, { createUser })(Create)
