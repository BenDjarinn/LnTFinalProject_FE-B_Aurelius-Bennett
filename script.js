jQuery.validator.addMethod("phoneval", function(value, element) {
    return this.optional(element) || /^08/.test(value);
  }, "Number must be starting with 08");


const rules = {

        name: {
            required:true,
            minlength:3
        },
        email:{
            required:true,
            email:true
        },
        phoneno:{
            required:true,
            minlength: 12,
            maxlength: 14,
            number: true,
            phoneval: true
        },
        eventchoice:{
            required:true
        }

}

const messages = {
        email:{
            email: "Email must contain '@' character"
        },

        phoneno:{
            minlength: "Please input valid number",
            maxlength: "Number must no more than 14 characters"
        }


    
}


$(document).ready(function() {
    $('#form').validate({
        rules: rules,
        messages: messages,
        
        submitHandler: function(form) {
            alert("Form Submitted Successfully");
            form.submit();
          }

        
    })
})


const firebaseConfig = {
    apiKey: "AIzaSyDl4oPxCOwf2x5cxRrZqEWRLanUpELlqO0",
    authDomain: "contactform-puddingfest.firebaseapp.com",
    databaseURL: "https://contactform-puddingfest-default-rtdb.firebaseio.com",
    projectId: "contactform-puddingfest",
    storageBucket: "contactform-puddingfest.appspot.com",
    messagingSenderId: "726380294286",
    appId: "1:726380294286:web:ed286eb5a22131249b99df"
  };


firebase.initializeApp(firebaseConfig);

let contactFormDB = firebase.database().ref('form');

document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    let name = getElementVal('fullName');
    let email = getElementVal('email');
    let phoneNumber = getElementVal('phoneno');

    let select = document.getElementById('events');
    let event = select.options[select.selectedIndex].text;

    console.log(name,email,phoneNumber,event);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
