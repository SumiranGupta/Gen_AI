function openModal(type) {
  document.getElementById(type + '-modal').style.display = 'block';
}

function closeModal(type) {
  document.getElementById(type + '-modal').style.display = 'none';
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  
  if (event.target === loginModal) {
      loginModal.style.display = 'none';
  }
  if (event.target === signupModal) {
      signupModal.style.display = 'none';
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  alert(`Logged in with username: ${username} and password: ${password}`);
  closeModal('login');
}

function handleSignUp(event) {
  event.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  alert(`Signed up with username: ${username} and password: ${password}`);
  closeModal('signup');
}
