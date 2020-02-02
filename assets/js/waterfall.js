const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal, button.id);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})

function openModal(modal, projectNum) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
    displayProject(projectNum);
}

function closeModal(modal) {
    if (modal == null) return;
    // remove all children in modal-body
    var scrollWindow = document.getElementById("modal-body");
    while (scrollWindow.hasChildNodes()) {  
        scrollWindow.removeChild(scrollWindow.firstChild);
    }
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

let iterEnd = false;
function displayProject(projectNum, flag=false) {
    // dynamically add images to modal-body

    // get object modal-body
    var scrollWindow = document.getElementById("modal-body");

    // add image by projectNum
    for (var i = 1; i < 8; i++){
        // iterate through all images that belong to this project
        var img = document.createElement("img");
        img.innerText = "test";
        iterEnd = false;
        img.onerror = function() {
            console.log(i);
            console.log((i - 1).toString() + " images found for this project!");
            img.src = "https://cdn140.picsart.com/283186984048211.png?type=webp&to=min&r=1024";
            img.innerText = "fail";
            window.iterEnd = true;
        };
        img.src = ".assets/images/porfolio/gallery/pro" + projectNum + "-" + i + ".jpg";
        if (iterEnd || img.innerText === "fail") break;
        console.log(1, iterEnd, img.innerText, img.src);
        img.id = "picture" + i;
        scrollWindowWidth = document.getElementById("modal-body").clientWidth * 0.9;
        img.width = scrollWindowWidth;
        img.height = scrollWindowWidth / 1.414;
        console.log(2, iterEnd, img.innerText, img.src);
        if (window.iterEnd || img.innerText === "fail") break;
        scrollWindow.appendChild(img);
        console.log(3, iterEnd, img.innerText, img.src);
    }
}