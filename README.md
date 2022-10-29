<!DOCTYPE html> 
<html lang="en">
	<head>
		<title>Coffee Mug</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://github.com/NaveenStallioni/PHPlearn/blob/main/Stylesheet.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
		<script src="Javascript.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script>
			(document).ready(function(){
	$(".hideme").click(function(){
		$(this).hide();
	});
	$("#showmodal").click(function(){
		$(".modalbox").fadeToggle();
	});
});</script>
		<style>
		body{
	margin: 0px;
}
.header{
	overflow: hidden;
  	background-color: white;
}
.header a{
	float: left;
  /*color:;*/
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.header a:hover {
	background-color: blue;
	color: white;
  }
.active{
	background-color:blue;
	color: white;
}

#showmodal{
	padding-top: 5px;
	margin: 3px 15px 0 0;
	border:none;
	border-radius: 80%;
	/*color:;*/
	width:40px;
	height:40px;
	text-align: center;
	vertical-align: middle;
	background-color: lightgray;
	right:0;
	float:right;
}
#showmodal:hover{
	background-color: blue;
	color: white;
}
.modalbox{
	width: 600px;
	height: auto;
	position: absolute;
	top: 30%;
	left: 30%;
	background-color: #ddd;
	padding: 10px;
	text-align: center;
}
#clsbtn{
	background-color: none;
	border-radius: 80%;
	width:40px;
	height:40px;
	border: none;
}
#clsbtn:hover{
	background-color: blue;
	color:white;
	border-radius: 80%;
	width:40px;
	height:40px;
	border: none;
}
.material-symbols-outlined {
	font-variation-settings:
	'FILL' 0,
	'wght' 400,
	'GRAD' 0,
	'opsz' 48
}
input[type=text], select {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}
  
  input[type=submit] {
	width: 100%;
	background-color: blue;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}
  
  input[type=submit]:hover {
	background-color: blue;
  }
  @media screen and (max-width: 768px){
  .modalbox{
	width: 300px;
	left:20%;

  }

  }
  @media screen and (max-width: 600px){
	.modalbox{
	  width: 300px;
	  left:20%;
	  top:20%;
	font-size: 15px;
	}
  
	}
		</style>
	</head>
	<body>
		<div class="header">
			<a class="active" href="">Home</a>
			<a class="">About</a>
			<a class="">Contact</a>
			<a class="">Blog</a>
			<button id="showmodal"><i class="material-symbols-outlined">Account_circle</i></button>
		</div><br><br>
		
			<div class="modalbox" style="display:none" action="register.php">
				<form action="#" method="post">
					<label for="fname">First Name</label>
					<input type="text" id="fname" name="firstname" placeholder="Your name..">
					<label for="lname">Last Name</label>
					<input type="text" id="lname" name="lastname" placeholder="Your last name..">
					<input type="submit" name="Submit"><br><br>
					<button id="clsbtn"><i class="material-symbols-outlined">close</i></button>
				</form>
			</div>
	</body>
</html>
	
