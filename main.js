function passtheWord() {

   let password = "";

   do {
    password = promt("Enter a password longer than 4 characters", "");
   } while (password.length < 5);

   window.alert("Entered password: ",
    password);


}