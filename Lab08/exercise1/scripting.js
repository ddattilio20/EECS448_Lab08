function validPass()
{
  let password1 = document.getElementById('password1').value;
  let password2 = document.getElementById('password2').value;

  if(password1 === password2 && password1.length >= 8 && password2.length>= 8)
  {
    alert('Passwords match!');
  }
  else if(password1 != password2)
  {
    alert('Password invalidated. Passwords do not match.');
  }
  else if(password1.length < 8 && password2.length < 8)
  {
    alert('Password invalidated. Passwords are too short. Passwords must be 8 characters or longer')
  }
}
