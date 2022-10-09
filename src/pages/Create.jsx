import React from 'react'

const Create = () => {
  return (
    <div
      style={{ margin: '1rem auto', display: 'flex', justifyContent: 'center' }}
    >
      <form
        action=""
        style={{
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid black',
          backgroundColor: '#ddd',
          borderRadius: '5px',
          border: '1px solid #0c394b',
        }}
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
          />
        </div>
        <div style={{ margin:'8px auto',}}>

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
  )
}

export default Create
