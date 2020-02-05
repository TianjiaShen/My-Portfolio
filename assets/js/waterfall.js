// let scrollWindow;

// must register these elements after DOM is ready
document.addEventListener('DOMContentLoaded', function(event) {
    //the event occurred
    // openModalButtons = document.querySelectorAll('[data-modal-target]');
    // closeModalButtons = document.querySelectorAll('[data-close-button]');
    // overlay = document.getElementById('overlay');
    // modal = document.getElementById('modal');

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    var brickList = document.querySelectorAll('[data-waterfall]');
    console.log(brickList);
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // global assignment
    // scrollWindow = document.getElementById("modal-body");

    // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    //     modal.style.display = "block";
    // }

    

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        closeModal();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
    }


    for (var i = 0; i < brickList.length; i++) {
        obj = brickList[i];
        console.log("init", i, obj);
        // obj.addEventListener('click', (idNum) => {
        //     // const modal = document.querySelector(obj.dataset.modalTarget);
        //     console.log(idNum);
        //     console.log(idNum + "clicked");
        //     modal.style.display = "block";
        //     displayProject(idNum);
        // })
    }

    // console.log(openModalButtons);

    // overlay.addEventListener('click', () => {
    //     const modals = document.querySelectorAll('.modal.active');
    //     modals.forEach(modal => {
    //         closeModal(modal);
    //     })
    // })

    // closeModalButtons.forEach(button => {
    //     button.addEventListener('click', () => {
    //         const modal = button.closest('.modal');
    //         closeModal(modal);
    //     })
    // })
})


function openModal() {
    var modal = document.getElementById("myModal");
    if (modal == null) return;
    modal.style.display = "block";
    modal.classList.add('active');
}

function closeModal() {
    var modal = document.getElementById("myModal");
    if (modal == null) return;
    // remove all children in modal-body
    var scrollWindow = document.getElementById("modal-body");
    while (scrollWindow.hasChildNodes()) {  
        scrollWindow.removeChild(scrollWindow.firstChild);
    }
    modal.style.display = "none";
    modal.classList.remove('active');
}

function displayProject(entity) {
    // acquire project num from entity
    var projectNum = entity.getAttribute('project-num');
    console.log(entity);
    // show modal 
    openModal();

    // dynamically add images to modal-body

    // get object modal-body
    var scrollWindow = document.getElementById("modal-body");

    // add image by projectNum
    for (var i = 1; i < 8; i++){
        // iterate through all images that belong to this project
        var img = document.createElement("img");
        img.innerText = "test";
        img.onerror = function() {
            console.log(i);
            console.log((i - 1).toString() + " images found for this project!");
            img.src = "https://cdn140.picsart.com/283186984048211.png?type=webp&to=min&r=1024";
            img.innerText = "fail";
            window.iterEnd = true;
        };
        img.src = "assets/images/portfolio/gallery/pro" + projectNum + "-" + i + ".jpg";

        img.id = "picture" + i;
        scrollWindowWidth = scrollWindow.clientWidth * 0.9;
        img.width = scrollWindowWidth;
        img.style.textAlign = 'center';
        console.log(scrollWindowWidth);
        // img.height = scrollWindowWidth / 1.414;

        scrollWindow.appendChild(img);
    }
}