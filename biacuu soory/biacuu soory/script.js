const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you every day.\n\nI'm sorry if i'm still not good enough for you but atleast just want to let you know that i'm also trying my best.\n\nWhen i hurt you, i feel the pain too. That's why i keep saying sorry, event if i look pathetic\nThat's why i want to lose you\n\ni love you so much,\nmore than i can,more\nthan everything!` ;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}