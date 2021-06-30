const commentForm = document.querySelector('#commentForm');
const commentsContainer = document.querySelector('#comments');

commentForm.addEventListener('submit', function(event){
    event.preventDefault();
    //const usernameInput = document.querySelectorAll('input')[0];
    //const commentInput = document.querySelectorAll('input')[1];
    //console.log(usernameInput.value, commentInput.value)
    //alert('Submitted!')

    const usernameInput =commentForm.elements.username;
    const commentInput = commentForm.elements.comment;
    addComment(usernameInput.value, commentInput.value);
    usernameInput.value = '';
    commentInput.value = '';
});

//We pulled this out of the aboce function and into it's own below
const addComment = function(username, comment){
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newComment.append(bTag);
    newComment.append(` - ${comment}`);
    commentsContainer.append(newComment);
}