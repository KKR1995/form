var Objpeople = [
	{
		email:"kanhaiyakumar@gmail.com",
		password:"kanhaiya"
	},
		
	{
		email:"kanhaiyakumar123@gmail.com",
		password:"kanhaiya123"
	}
]

function getInfo() {
	
	var email = document.getElementById("email").value
	var password = document.getElementById("password").value
	console.log("your email id is " + email + " and your password is " + password)
		
		for(var i=0; i<Objpeople.length; i++)
			{
				if(email==Objpeople[i].email && password==Objpeople[i].password)
				{
					console.log(email + "is logedin!!")
						return
				}
			}
				console.log("incorrect emai id and Password")		
}
	