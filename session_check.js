
if(sessionStorage.length == 0)
{
	window.location.href = "login.html";
}



function logout()
{
	sessionStorage.clear();
	window.location.href = "login.html";
}
