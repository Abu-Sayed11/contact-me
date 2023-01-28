function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abusaid1487@gmail.com",
        Password : "BA037C9E5F711231BC66C7776A6D93959A4C",
        To : 'abusaid1487@gmail.com',
        From : 'abusaid1487@gmail.com',
        Subject : "New contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value 
        + "<br> Email: " + document.getElementById("email").value 
        + "<br> Phone No: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("Message Sent Succesfully")
    );
}