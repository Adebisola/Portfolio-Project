<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["txtName"];
    $email = $_POST["txtEmail"];
    $message = $_POST["txtMessage"];

    $to = "adeniyiadebisola@gmail.com"; // Put your email address here
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending the message.";
    }
}
?>
