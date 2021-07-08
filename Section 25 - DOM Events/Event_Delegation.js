//This code below works for already added LIs but not new ones
// const lis = document.querySelectorAll('li');
// for(let li of lis) {
//     li.addEventListener('click', function() {
//         li.remove();
//     })
// }


const commentForm = document.querySelector('#commentForm');
const commentsContainer = document.querySelector('#comments');

commentForm.addEventListener('submit', function(event){
    event.preventDefault();
    const usernameInput =commentForm.elements.username;
    const commentInput = commentForm.elements.comment;
    addComment(usernameInput.value, commentInput.value);
    usernameInput.value = '';
    commentInput.value = '';
});

const addComment = function(username, comment){
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newComment.append(bTag);
    newComment.append(` - ${comment}`);
    commentsContainer.append(newComment);
}

commentsContainer.addEventListener('click', function(event){
   // console.log('Clicked on the ul!');
   // console.log(event);

    event.target.nodeName === 'LI' && event.target.remove();
})