$(function() {
  
  // ボタンをクリックすると、文字色が変わる
  $("#change-color").on("click", () => {
    $("#target").css("color", "red");
  });

  // ボタンをクリックすると、文字が切り替わる
  $("#change-text").on("click", () => {
    $("#target").text("おやすみなさい!");
  })

  // ボタンをクリックしたら、文字がフェードアウトする
  $("#fade-out").on("click", () => {
    $("#target").fadeOut();
  });
  
  // ボタンをクリックしたら、文字がフェードインする
    $("#fade-in").on("click", () => {
      $("#target").fadeIn();
    });
 
});