function validate() {
	var name = document.getElementById("name").value;
	
	if(name == "")
	{
		alert("The name field is empty.");
	}
	if(name.length < 3  && !(name.length == 0))
	{
		alert("The name is: " + name.length + " characters long. It should be more than 3 characters long.");
	}
	
	
	var email = document.getElementById("email").value;
	
	if(email == "")
	{
		alert("The email field is empty.");
	}
	if(!(email.includes("@") && email.includes(".")) && !email=="")
	{
		alert("That email is invalid.");
	}
	
	
	var radioSelected = false;
	var radioHardcover = document.getElementById("radioHardcover");
	var radioPaperback = document.getElementById("radioPaperback");

	if(radioHardcover.checked || radioPaperback.checked)
	{
		radioSelected = true;
	}
	if(!radioSelected)
	{
		alert("You have not selected a book type.");
	}
	
	
	var numBooks = document.getElementById("bookNum").value;
	
	if(numBooks == "")
	{
		alert("Please enter the number of copies you wish to get.");
	}
	
	
	var selectColour = document.getElementById("bookColour").value;
	
	if(selectColour == "Choose...")
	{
		alert("Please select a colour.");
	}
	
	
	var Addr = document.getElementById("inputAddress").value;
	
	if(Addr == "")
	{
		alert("The Address field is empty.");
	}
	if(Addr.length < 6  && !(Addr.length == 0))
	{
		alert("The address is: " + Addr.length + " characters long. It should be more than 5 characters long.");
	}
	
	var City = document.getElementById("inputCity").value;
	
	if(City == "")
	{
		alert("The City field is empty.");
	}
	
	var selectState = document.getElementById("inputState").value;
	
	if(selectState == "Choose...")
	{
		alert("Please select a state.");
	}
	
	
	var Post = document.getElementById("inputPostcode").value;
	
	if(Post == "")
	{
		alert("The Postcode field is empty.");
	}
	if(!(Post.length == 4) && !Post == "")
	{
		alert("The postcode is: " + Post.length + " characters long. It should be 4 characters long.");
	}
	
	
	var Comment = document.getElementById("comment").value;
	
	if(Comment == "")
	{
		alert("We would really appreciate a comment :)");
	}
	
	
	var updateCheckBox = document.getElementById("updateCheck").checked;
	
	if(updateCheckBox == false)
	{
		alert("Updates must be accepted :)");
	}
}