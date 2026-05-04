import { useState } from "react"

function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    let users = JSON.parse(localStorage.getItem("users")) || []

    if (isLogin) {
      // LOGIN
      let user = users.find(
        (u) =>
          u.email === formData.email &&
          u.password === formData.password
      )

      if (user) {
        alert("Login Successful ✅")
      } else {
        alert("Invalid Credentials ❌")
      }
    } else {
      // SIGNUP
      let exists = users.find((u) => u.email === formData.email)

      if (exists) {
        alert("User already exists ⚠️")
        return
      }

      users.push(formData)
      localStorage.setItem("users", JSON.stringify(users))

      alert("Signup Successful ✅")
      setIsLogin(true)
    }

    setFormData({ name: "", email: "", password: "" })
  }

  return (
    <div id="auth-container">
      <div id="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New user? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  )
}

export default Auth