




function sendEmail() {

var address=document.getElementById('textbox3').value;
  var subject = document.getElementById('textbox7').value;
  var body = document.getElementById('body').value ;
console.log(address);

  
  Email.send({
    SecureToken : "c25a360b-9329-49ed-8d85-c102035a4d0d",
    To : address,
    From : "anonmessaging720@gmail.com",
    Subject :subject,
    Body : body
}).then(
  message => alert(message)
);
}
// ee721acb-abc1-49f0-9589-65d3e32c9cb6
// 47BF64ACA37E995C9446551231B2C641061E




  

  
  

 


 

  



