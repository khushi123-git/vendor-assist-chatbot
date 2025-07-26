import { signUp, signIn, signOut } from './auth.js'

const signupForm = document.getElementById('signup-form')
const loginForm = document.getElementById('login-form')
const logoutBtn = document.getElementById('logout-btn')
const statusDiv = document.getElementById('status')

// Sign Up
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.getElementById('signup-email').value
  const password = document.getElementById('signup-password').value
  const result = await signUp(email, password)
  statusDiv.textContent = result ? 'Signup successful!' : 'Signup failed.'
})

// Login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value
  const result = await signIn(email, password)
  if (result) {
    statusDiv.textContent = 'Login successful!'
    logoutBtn.style.display = 'block'
  } else {
    statusDiv.textContent = 'Login failed.'
  }
})

// Logout
logoutBtn.addEventListener('click', async () => {
  const result = await signOut()
  if (result) {
    statusDiv.textContent = 'Logged out.'
    logoutBtn.style.display = 'none'
  }
})
