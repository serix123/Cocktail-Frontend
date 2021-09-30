import React, {useState} from 'react'

function Register() {

  
  const [state, setState] = useState({
    username: "",
    email:"",
    password: "",
  }) 
  
  const handleChange = (event, fieldName) => {
    setState((prevState) => {
      return { ...prevState, [fieldName]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow sm:px-10 pt-28 sm:pt-32 ">
        <div className="flex flex-col sm:flex-row max-w-6xl mx-auto sm:rounded-2xl shadow-md overflow-hidden rounded-b-2xl" style={{'min-height': "540px"}}>
          {/* side image */}
          <div className="register-img w-full h-48 sm:h-auto"></div>
          {/* Register Form */}
          <div className="login-form flex flex-col bg-white sm:w-3/6 p-8 sm:p-12 sm:border-t sm:border-r sm:border-b sm:rounded-tr-2xl sm:rounded-br-2xl ">
            <div className="font-main font-bold text-4xl tracking-tight text-gray-800 md:mb-10">
              <h3>Join us now.</h3>
            </div>
            <form action="" onSubmit={e => handleSubmit(e)}>
              <div className="form-input font-body my-5 sm:my-10">
                <input
                  type="text"
                  id="username"
                  required
                  onChange={(event) => handleChange(event, "username")}/>
                
                <label htmlFor="email" className="input-label">
                  <span className="content-name">Username: </span>
                </label>
              </div>
              <div className="form-input font-body my-5 sm:my-10">
                <input
                  type="text"
                  id="email"
                  required
                  onChange={(event) => handleChange(event, "email")}/>
                
                <label htmlFor="email" className="input-label">
                  <span className="content-name">Email: </span>
                </label>
              </div>
              <div className="form-input font-body my-5 sm:my-10">
                <input
                  type="password"
                  id="password"
                  required
                  onChange={(event) => handleChange(event, "password")}/>
                
                <label htmlFor="password" className="input-label">
                  <span className="content-name">Password: </span>
                </label>
              </div>
              <div className="flex-grow align-baseline text-lg text-center px-4 py-2  border rounded-full shadow-md  bg-red-500 text-white hover:bg-red-600 hover:shadow-lg mt-4 transition duration-300 ease-in-out">
                <button className="font-body font-semibold " type="submit">Sign Up</button>
              </div>
            </form>
          </div>

          
        </div>
      </div>
      
      
      
    </div>
  )
}

export default Register
