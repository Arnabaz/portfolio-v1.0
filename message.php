<?php
  $name = htmlspecialchars($_POST['fullname']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = // Entrez l'adresse email où vous souhaitez recevoir vos messages
      $subject = "Message de $name <$email>";
      $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
      $sender = "From: $email";
      if(mail($receiver, $subject, $body, $sender)){
        echo '{"message" : "Votre message a bien été transmis, merci !"}';
      }else{
       echo '{"message" : "Désolé mais votre message n\'a pas été envoyé. Veuillez réessayer s\'il vous plait."}';
      }
    }else{
      echo '{"message" : "Veuillez entrer une adresse email valide."}';
    }
  }else{
    echo '{"message" : "Veuillez remplir tous les champs requis du formulaire, merci."}';
  }
?>
