var form=document.getElementById("contact-form")
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e)
    fullname=e.target.fullname.value
    email=e.target.email.value
    phone=e.target.phone.value
    service=e.target.selection.value
    if (service==='Courses'){
        course=e.target.course.value
    }
    else{
        course=''
    }
    var obj={"fullname":fullname,
        "email":email,
        "phone":phone,
        "service":service,
        "course":course           
}
fetch("https://whlqmjzzzk.execute-api.us-east-1.amazonaws.com/staging", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
})


// jQuery(document).ready(function() {
//     jQuery('#contact-form').on('submit', function(e) { //Don't foget to change the id form
//         jQuery.ajax({
//             url: 'http://localhost:3000', //===PHP file name====
//             data: jQuery(this).serialize(),
//             type: 'POST',
//             success: function(data) {
//                 swal({
//                     title: "Thank You!",
//                     text: "Your request has been submitted successfully. We will contact to you soon.",
//                     icon: "success",
//                     timer: 3000
//                 }).then(function() {
//                     jQuery('#contact-form')[0].reset();
//                 });

//             },
//             error: function(data) {

//                 swal({
//                     title: "Oops...",
//                     text: "Something went wrong :(",
//                     icon: "error",
//                     timer: 3000
//                 })
//             },

//         });
//         e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
//     });


//     jQuery('#subscribe-form').on('submit', function(e) { //Don't foget to change the id form
//         jQuery.ajax({
//             url: 'subs.php', //===PHP file name====
//             data: jQuery(this).serialize(),
//             type: 'POST',
//             success: function(data) {
//                 //Success Message == 'Title', 'Message body', Last one leave as it is
//                 swal({
//                     title: "Thank You!",
//                     text: "Your subscrition request has been submitted successfully.",
//                     icon: "success",
//                     showCancelButton: false,
//                     showConfirmButton: false,
//                     timer: 3000
//                 }).then(function() {
//                     jQuery('#subscribe-form')[0].reset();
//                 });

//             },
//             error: function(data) {
//                 //Error Message == 'Title', 'Message body', Last one leave as it is

//                 swal({
//                     title: "Oops...",
//                     text: "Something went wrong :(",
//                     icon: "error",
//                     timer: 3000
//                 });
//             }
//         });
//         e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
//     });
// });