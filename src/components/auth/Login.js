import React, {useState} from 'react'

function Login() {

  
  const [state, setState] = useState({
    username: "",
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
          {/* Login Form */}
          <div className="login-form flex flex-col bg-white sm:w-3/6 p-8 sm:p-12 sm:border-t sm:border-l sm:border-b sm:rounded-tl-2xl sm:rounded-bl-2xl order-last sm:order-first">
            <div className="font-main font-bold text-4xl tracking-tight text-gray-800  md:mb-10">
              <h3>Welcome.</h3>
            </div>
            <form action="" onSubmit={e => handleSubmit(e)}>
              <div className="form-input font-body my-6 sm:my-12">
                <input
                  type="text"
                  id="username"
                  required
                  onChange={(event) => handleChange(event, "username")}/>
                
                <label htmlFor="email" className="input-label">
                  <span className="content-name">Username: </span>
                </label>
              </div>
              <div className="form-input font-body my-6 sm:my-12">
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
                <button className="font-body font-semibold " type="submit">Sign In</button>
              </div>
            </form>
          </div>

          {/* side image */}
          <div className="login-img w-full h-48 sm:h-auto"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
