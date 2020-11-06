/*
         <div class="tag">
            <span>CSS</span>
            <i class="material-icons">close</i>
        </div>
 */

const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');



function createTag(text){
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');

    const span = document.createElement('span');
    span.innerHTML = text;
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'material-icons');
    closeBtn.innerHTML = 'close';

    div.appendChild(span);
    div.appendChild(closeBtn);

    return div
}




input.addEventListener('keyup', function (e){
    if(e.key === 'Enter'){
        const tag = createTag(input.value);
        tagContainer.prepend(tag);
        input.value = '';
    }
})
