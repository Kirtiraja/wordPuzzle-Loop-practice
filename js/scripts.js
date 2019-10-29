$(document).ready(function(){
  $("#userForm").submit(function(event) {

    var userSentence = $("#userSentence").val().toLowerCase();
    var splitSentence = userSentence.split("");
    var mappedArray = splitSentence.map(function(letter){
      if ( letter === "a" || letter ==="e" || letter ==="i"|| letter ==="o"|| letter ==="u"){
        return "-";
      }
      else {
        return letter;
      }
    })
    var joinedArray = mappedArray.join("");
    $("p#puzzleSentence").text(joinedArray);

    console.log(mappedArray);
    event.preventDefault();
  });
});
