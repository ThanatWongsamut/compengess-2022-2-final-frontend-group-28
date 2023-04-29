const frontendIPAddress = '127.0.0.1:5500';
const backendIPAddress = '127.0.0.1:3000';

const authorizeApplication = () => {
  window.location.href = `http://${backendIPAddress}/courseville/auth_app`;
};

// Get user profile
const getUserProfile = async () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  await fetch(`http://${backendIPAddress}/courseville/get_profile_info`, options)
    .then((response) => {
      if (response.status == 401) {
        window.location.href = `http://${frontendIPAddress}/login.html`;
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.user);
      document.getElementById('profile_name').innerHTML =
        data.user.firstname_th + ' ' + data.user.lastname_th;
    })
    .catch((error) => console.error(error));
};

// Logout
const logout = async () => {
  window.location.href = `http://${backendIPAddress}/courseville/logout`;
};
