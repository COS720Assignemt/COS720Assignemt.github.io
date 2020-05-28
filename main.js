

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
//code from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript


////////////////////////////////
function sendEmail() {
///////////////rest is all personal code
var address=document.getElementById('textbox3').value;
var res = address.split(",");
console.log(res);
for (i = 0; i < res.length; i++) {
  var te=validateEmail(res[i]);
  if(te==false)
  	break;
}
if(te)
{
	var subject = document.getElementById('textbox7').value;

  	var body = document.getElementById('body').value ;

  	if(subject!=""&&body!="")
  		{
  			Email.send({//code from https://www.smtpjs.com/ and edited
				    SecureToken : "c25a360b-9329-49ed-8d85-c102035a4d0d",
				    To : address,
				    From : "anonmessaging720@gmail.com",
				    Subject :subject,
				    Body : body
				}).then(
				  message => alert(message)
				);
				/////////////////////////////////////////////////
  		}
  		else
  		{
  			alert("Subject or body empty");
  		}
	//console.log(address);

  
  
}
else
{
	alert("Email incorrect format");
}
  
}
// ee721acb-abc1-49f0-9589-65d3e32c9cb6
// 47BF64ACA37E995C9446551231B2C641061E




  

  
  

 


 

  



