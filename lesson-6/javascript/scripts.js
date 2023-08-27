const likeButton = document.querySelector("#likeButton");
const likeStatus = document.querySelector("#likeStatus");
const commentButton = document.querySelector("#commentButton");
const commentsSection = document.querySelector("#commentsSection");

let likesCounter = 0;
let commentCounter = 0;

likeButton.addEventListener("click", () => {
  likesCounter++;

  let likes = likesCounter > 1 ? "likes" : "like";

  likeStatus.textContent = `${likesCounter} ${likes}`;
});

commentButton.addEventListener("click", () => {
  let commentText = prompt("Escribe tu comentario.");

  // solo comentarios validos
  if (commentText) {
    commentCounter++;

    let newComment = document.createElement("p");
    newComment.textContent = "catfriend_45: " + commentText;

    commentsSection.appendChild(newComment);

    commentsSection.textContent = comentarios;
  }
});
