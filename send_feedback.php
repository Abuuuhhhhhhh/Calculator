<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];

    // Set up email
    $to = "odhiamboabraham65@gmail.com";
    $subject = "Website Feedback";
    $message = "Name: $name\nEmail: $email\n\nFeedback:\n$feedback";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Sorry, there was an error sending your feedback. Please try again later.";
    }
}
?>

