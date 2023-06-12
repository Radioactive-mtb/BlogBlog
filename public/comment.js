const commentHandler = async (event) => {
  event.preventDefault();
  const postId = document.querySelector("#post-id").value;
  const body = document.querySelector("#comment-body").value.trim();
  if (body) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ postId, body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      window.location.reload();
    } else {
      alert("Failed to create comment");
    }
    //window.location.reload();
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", commentHandler);
