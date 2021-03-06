/*
         <div class="tag">
            <span>CSS</span>
            <i class="material-icons">close</i>
        </div>
 */

const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');

var tags = []

function createTag(text){
    const div = document.createElement('div');
    div.setAttribute('class', 'tag');

    const span = document.createElement('span');
    span.innerHTML = text;
    const closeBtn = document.createElement('i');
    closeBtn.setAttribute('class', 'material-icons');
    closeBtn.setAttribute('data-item', text);
    closeBtn.innerHTML = 'close';

    div.appendChild(span);
    div.appendChild(closeBtn);

    return div
}

function reset(){
    document.querySelectorAll('.tag').forEach(function (tag){
        tag.remove();
    })
}


function renderTags(){
    reset();
    tags.slice().reverse().forEach(function (value){
        const tag = createTag(value);
        tagContainer.prepend(tag);
    })
}


input.addEventListener('keyup', function (e){
    if(e.key === 'Enter'){
        tags.push(input.value)
        renderTags();
        input.value = '';
    }
})


document.addEventListener('click', function (e){
    if(e.target.tagName === 'I'){
        const value = e.target.getAttribute('data-item');
        const index = tags.indexOf(value);
        tags.splice(index, 1);
        renderTags();
    }
})
