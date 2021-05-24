<!-- 
    
<form action="myform.php" method="post">

Which is your favorite movie?
<input type="text" name="formMovie" maxlength="50">

<input type="submit" name="formSubmit" value="Submit">

</form> -->

<?php
    if($_POST['formSubmit'] == "Submit")
    {
        $errorMessage = "";

        if(empty($_POST['formName']))
        {
            $errorMessage .= "<li>You forgot to enter your name!</li>";
        }
        if(empty($_POST['formEmail']))
        {
            $errorMessage .= "<li>You forgot to enter your email!</li>";
        }
        if(empty($_POST['formMessage']))
        {
            $errorMessage .= "<li>You forgot to enter your message!</li>";
        }

        $varName = $_POST['name'];
        $varEmail = $_POST['email'];
        $varMessage = $_POST['message'];

        if(!empty($errorMessage))
        {
            echo("<p>There was an error with your form:</p>\n");
            echo("<ul>" . $errorMessage . "</ul>\n");
        }
    }
?>