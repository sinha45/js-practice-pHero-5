// ****step 1: add event listener to the post button

document.getElementById('btn-post').addEventListener('click', function () {
    // ***step:2 get the comment inside the text area
    const commentBox = document.getElementById('new-comment');
    console.log(commentBox);
    const newComment = commentBox.value;

    // ***step 3:

    //***sub 1: get the comment container sub 2: create new element sub 3: set the text of the comment as innerText of the p tag sub4: add the p tag using appendChild*/

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    //**step 4: clear the comment box */

    commentBox.value = '';
})


