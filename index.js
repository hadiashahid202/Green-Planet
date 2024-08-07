// const form = document.querySelector("form");
// const firstname = document.getElementById("fname");
// const lastname = document.getElementById("lname");
// const email = document.getElementById("email");
// const address = document.getElementById("address");
// const message = document.getElementById("message");
// const phone = document.getElementById("phone");


// function sendemail() {
// 	const bodymessage = `First Name: ${firstname.value} <br> Last Name: ${lastname.value} <br> 
// 	Email: ${email.value} <br> Address: ${address.value} <br> Message: ${message.value} <br>
// 	Phone: ${phone.value}` 
//    Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "hadiashahid202@gmail.com",
//     Password : "75E99823BD51C83CD857F169C7D93B498065",
//     To : 'hadiashahid202@gmail.com',
//     From : "hadiashahid202@gmail.com",
//     Subject : "This is the subject",
//     Body : bodymessage
//     }).then(
//           message => {
//           	if(message == "OK"){
//              swal("successfull!", "You clicked the button!", "success");
//           	}
//           	else{
//           		swal("Warning!", "You clicked the button!", "error");
//           	}
//           }
//     );
// }

// form.addEventListener("submit",(e)=>{
// 	e.preventDefault();
// 	sendemail();
// });


const form = document.querySelector("form");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const country = document.getElementById("type");
const message = document.getElementById("message");
const checkbox = document.getElementById("check");


function sendemail() {
  const bodymessage = `First Name: ${firstname.value} <br> Last Name: ${lastname.value} <br> 
  Email: ${email.value} <br> Country: ${country.value} <br> Message: ${message.value} <br> Checkbox: ${checkbox.value}` 
   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hadiashahid202@gmail.com",
    Password : "75E99823BD51C83CD857F169C7D93B498065",
    To : 'hadiashahid202@gmail.com',
    From : "hadiashahid202@gmail.com",
    Subject : "This is the subject",
    Body : bodymessage
    }).then(
          message => {
            if(message == "OK"){
             swal("successfull!", "You clicked the button!", "success");
            }
            else{
              swal("Warning!", "You clicked the button!", "error");
            }
          }
    );
}

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  sendemail();
});



const button = document.getElementById("join");

button.addEventListener("click",function() {
	document.location.href = 'newsletter/index.html'
});


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}