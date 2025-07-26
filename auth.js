import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient('https://biibpkmrulenfvamhxsm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpaWJwa21ydWxlbmZ2YW1oeHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1MzU3MzcsImV4cCI6MjA2OTExMTczN30.dR5cIlXpe39TKo7KexoEKhR3TbPu-8x7GKcochLNoT0')


// LOGIN
export async function login() {
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    alert("Login failed: " + error.message)
  } else {
    window.location.href = 'dashboard.html'
  }
}

// SIGNUP
export async function signup() {
  const email = document.getElementById('signup-email').value
  const password = document.getElementById('signup-password').value
  const { data, error } = await supabase.auth.signUp({ email, password })

  if (error) {
    alert("Signup failed: " + error.message)
  } else {
    alert("Signup successful! Please check your email to confirm.")
    window.location.href = 'dashboard.html'
  }
}

// LOGOUT
export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Logout error:', error.message)
    return false
  }
  console.log('Logged out')
  return true
}
