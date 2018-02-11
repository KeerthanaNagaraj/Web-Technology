    JavaScript form validation example

In this example, we are going to validate the name and password. The name can’t be empty and password can’t be less than 6 characters long.

Here, we are validating the form on form submit. The user will not be forwarded to the next page until given values are correct.

    <script>  
    function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  
    </script>  
    <body>  
    <form name="myform" method="post" action="abc.jsp" onsubmit="return validateform()" >  
    Name: <input type="text" name="name"><br/>  
    Password: <input type="password" name="password"><br/>  
    <input type="submit" value="register">  
    </form>  

Test it Now
JavaScript Retype Password Validation

    <script type="text/javascript">  
    function matchpass(){  
    var firstpassword=document.f1.password.value;  
    var secondpassword=document.f1.password2.value;  
      
    if(firstpassword==secondpassword){  
    return true;  
    }  
    else{  
    alert("password must be same!");  
    return false;  
    }  
    }  
    </script>  
      
    <form name="f1" action="register.jsp" onsubmit="return matchpass()">  
    Password:<input type="password" name="password" /><br/>  
    Re-enter Password:<input type="password" name="password2"/><br/>  
    <input type="submit">  
    </form>  

Test it Now
JavaScript Number Validation

Let's validate the textfield for numeric value only. Here, we are using isNaN() function.

    <script>  
    function validate(){  
    var num=document.myform.num.value;  
    if (isNaN(num)){  
      document.getElementById("numloc").innerHTML="Enter Numeric value only";  
      return false;  
    }else{  
      return true;  
      }  
    }  
    </script>  
    <form name="myform" onsubmit="return validate()" >  
    Number: <input type="text" name="num"><span id="numloc"></span><br/>  
    <input type="submit" value="submit">  
    </form>  

Test it Now
JavaScript validation with image

Let’s see an interactive JavaScript form validation example that displays correct and incorrect image if input is correct or incorrect.

    <script>  
    function validate(){  
    var name=document.f1.name.value;  
    var password=document.f1.password.value;  
    var status=false;  
      
    if(name.length<1){  
    document.getElementById("nameloc").innerHTML=  
    " <img src='unchecked.gif'/> Please enter your name";  
    status=false;  
    }else{  
    document.getElementById("nameloc").innerHTML=" <img src='checked.gif'/>";  
    status=true;  
    }  
    if(password.length<6){  
    document.getElementById("passwordloc").innerHTML=  
    " <img src='unchecked.gif'/> Password must be at least 6 char long";  
    status=false;  
    }else{  
    document.getElementById("passwordloc").innerHTML=" <img src='checked.gif'/>";  
    }  
    return status;  
    }  
    </script>  
      
    <form name="f1" action="#" onsubmit="return validate()">  
    <table>  
    <tr><td>Enter Name:</td><td><input type="text" name="name"/>  
    <span id="nameloc"></span></td></tr>  
    <tr><td>Enter Password:</td><td><input type="password" name="password"/>  
    <span id="passwordloc"></span></td></tr>  
    <tr><td colspan="2"><input type="submit" value="register"/></td></tr>  
    </table>  
    </form>  

Test it Now

Output:
Enter Name:	
Enter Password:	
JavaScript email validation

We can validate the email by the help of JavaScript.

There are many criteria that need to be follow to validate the email id such as:

    email id must contain the @ and . character
    There must be at least one character before and after the @.
    There must be at least two characters after . (dot).

Let's see the simple example to validate the email field.

    <script>  
    function validateemail()  
    {  
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
      }  
    }  
    </script>  
    <body>  
    <form name="myform"  method="post" action="#" onsubmit="return validateemail();">  
    Email: <input type="text" name="email"><br/>  
      
    <input type="submit" value="register">  
    </form>  
	
	
	
	
	
	
	
	
	
	
	
	
	Create Simple Contact Form Using JavaScript
user-5
Fugo Of FormGet

Learn creating contact form using simple JavaScript codes. Here is a tutorial guide to tell you about complete JavaScript codes to create Contact Form.

In this tutorial, we have created a form div with id “form_sample” in our html page.

<div id="form_sample"></div>

 

In our js code we have created form elements using .createElement function and appended the elements to html div using the .appendChild function of JavaScript.

var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
x.appendChild(createform);

Further, we have included some CSS codes to give proper alignment to form.

 

 Below is our complete code with download and live demo option

Javascript-contact-form

 

Download Code   Live Demo
 

-: See Also :-

Send Email on Form Submission 
HTML File – demo.html

Simple HTML codes to add form Div.


<!DOCTYPE html>
<html>
<head>
<title>Contact Form using JavaScript</title> <!-- Include CSS file here -->
<link href="css/form.css" rel="stylesheet">
</head>
<body>
<div id="main">
<h1>Contact Form using JavaScript</h1>
<div id="form_sample"></div> <!-- Include JS file here -->
<script src="js/form.js"></script>
</div>
</body>
</html>

JavaScript File -form.js

    Create object for the form.
    Set action attribute (post method).
    Create field label.
    Append form fields and set it’s label.


// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);

Css File – form.css

Css coding to give proper alignment to form elements and the complete form itself.


/* Below line is write to use Google font online */
@import "http://fonts.googleapis.com/css?family=Ubuntu";
div#main{
width:830px;
height:650px;
margin:0 auto;
font-family:'Ubuntu',sans-serif
}
div#form_sample{
text-align:center;
border:1px solid #ccc;
width:300px;
padding:0 50px 15px;
margin-top:20px;
box-shadow:0 0 15px;
border-radius:6px;
float:left
}
#main h1{
margin-top:40px
}
hr{
margin-top:-5px
}
label{
float:left;
font-size:16px
}
input[type="text"]{
width:100%;
margin-top:10px;
height:35px;
margin-bottom:25px;
padding:10px;
border:3px solid #2BC1F2
}
textarea{
width:100%;
border:3px solid #2BC1F2;
padding:10px;
margin-bottom:25px;
margin-top:10px;
height:100px;
resize:none
}
input[type="submit"]{
width:100%;
padding:10px 45px;
background-color:#2BC1F2;
border:none;
color:#fff;
font-size:18px;
font-weight:700;
cursor:pointer;
font-family:'Ubuntu',sans-serif
}
/* -------------------------------------
CSS for Sidebar (optional)
---------------------------------------- */
div#fugo{
float:right
}

Creating an Example Form for User Feedback

 

<html>
<head>

<script language="JavaScript">
<!-- 
function setStatus(str)
{
     window.status = str;
     return true;
}
   
var greeting="Hello! ";
window.defaultStatus = greeting;
// script end -->
</script>
</head>
   
<body>
<form action="mailto:your_mail_ID" method="post">
<select name="product" onFocus="setStatus('message.')" onBlur="setStatus('')">
<option>A
<option>B
<option>C
<option>D
<option>E
<option>F
<option>G
</select>
<br>
   
<font size=5>Quantity:</font>
<input type="text" name="quantity" value="1" size=4 maxlength=4 onFocus="setStatus('(1-1000).')" onBlur="setStatus('')">
<br>
   
<font size=5>Toastiness:</font>
<input type="text" name="toastiness" value="50" size=3 maxlength=3 onFocus="setStatus('0-100 (0=untoasted 100=burnt).')" onBlur="setStatus('')">
<br>
   
<font size=5>Buttered:</font>
<font size=5>Yes</font>
<input type="radio" name="buttered" value="yes" checked onClick="setStatus('?')">
<font size=5>No</font>
<input type="radio" name="buttered" value="no" onClick="setStatus('?')">
   
<hr>
<input type="submit" value="Start Toaster">
<input type="reset">
   
</form>
</body>
</html>
           
         
  