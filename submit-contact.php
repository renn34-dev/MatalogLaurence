<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    die("All fields are required.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format.");
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'ecommerce.adidas.acc@gmail.com';
    $mail->Password = 'dwkp dzcy jisg tjwa';       
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
    $mail->Port = 587;

    $mail->setFrom('ecommerce.adidas.acc@gmail.com', 'Website Contact');
    $mail->addAddress('ecommerce.adidas.acc@gmail.com');

    $mail->Subject = $subject;
    $mail->Body = "You have received a new message from the contact form:\n\n" .
                  "Name: $name\n" .
                  "Email: $email\n" .
                  "Subject: $subject\n" .
                  "Message: $message";

    $mail->SMTPDebug = 0; 
    $mail->send();


    header("Location: personal.php?status=success");
    exit(); 
} catch (Exception $e) {
    header("Location: personal.php?status=error&message=" . urlencode($mail->ErrorInfo));
    exit(); 
}
?>
