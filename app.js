// JavaScript eller jQuery
$.get('https://jsonplaceholder.typicode.com/users/1', function(data, status) {
  $("body").append("<button type='button' id='login_btn'>Login</button>");
  $("#login_btn").css({
    "background-color": "blue",
    " border": "none",
    "color": "white",
    " padding": 15,
    "text-align": "center",
    "text-decoration": "none",
    "display": "inline-block",
    "font-size": 16,
  }).width(100).height(50);
  $("body").after("<div id='login' class='login'></div>");
  $(".login").css({
    "background-color": "pink",
    "display": "flex",
    "justify-content": "center",
    " align-items": "center",
    "margin-left": 200,
    "margin-top": 50,
  }).width(300).height(300);
  $("#login").append("<form ></form>");
  $("form").append("<h2 class='title'>Login</h2>");
  $(".title").css("text-align", "center");
  $("form").append("<h3>User name</h3>");
  $("form").append("<input type='text' id='username' name='username'>");
  $("form").append("<h3>Password</h3>");
  $("form").append("<input type='password' name='pwd'>");
  $("form").append("<h3></h3>");
  $("form").append("<input id='submit_btn' value='Skicka'>");
  $("#submit_btn").width(150);
  $("input").width(150);
  // show and hide login div
  $("#login_btn").click(function() {
    $("div").toggle();
  });

  $("#submit_btn").click(function() {
    //alert("Data: " + data + "\nStatus: " + status);
    alert("Välkommen snygging,din email hämtas av serveren");
    console.log(data.username);

    if ($("#username").val() != data.username) {
      alert("OOPS Fel, try again")
    } else {
      //  alert("Välkommen");
      $("#login").after("<div id='result' class='result'></div>");
      $(".result").css({
        "background-color": "yellow",
        "display": "flex",
        "justify-content": "center",
        " align-items": "center",
        "margin-left": 200,
      }).width(300).height(125);
    }
    $("#result").prepend("<h4 class='res_user'>User name : </h4>");
    $(".res_user").append(data.username);
    $(".res_user").append("<h4 class='res_email'>Email : </h4>")
    $(".res_email").append(data.email);

  });


});