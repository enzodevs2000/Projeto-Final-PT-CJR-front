function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log("Encoded JWT ID token: " + response.credential);
    console.log(data);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "372633461103-4rom18lg9ng7o8mpnpj5j2jseea7ocaf.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { 
        theme: "filled_blue", 
        size: "large" ,
        shape: "pill",
        locale: "pt-BR",
        width: "300px"
    }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}