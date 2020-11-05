/*
         <div class="tag">
            <span>CSS</span>
            <i class="material-icons">close</i>
        </div>
 */

const tagContainer = document.querySelector('.tag-container')

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


tagContainer.prepend(createTag('CSS'))
