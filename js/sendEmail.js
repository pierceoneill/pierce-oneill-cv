
var form = $("form#form");
form.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "pierce";

  form.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"form")
  	.then(function(){ 
    	alert("Your email is Sent! I will get back to you within 24 hours. Thank you.");
       form.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       form.find("button").text("Send");
    });
  return false;
});