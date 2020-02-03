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

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }


    for (var i = 0; i < brickList.length; i++) {
        obj = brickList[i];
        obj.addEventListener('click', () => {
            // const modal = document.querySelector(obj.dataset.modalTarget);
            console.log(obj);
            console.log(obj.id + "clicked");
            modal.style.display = "block";
            displayProject(obj.id);
        })
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


// function openModal(modal, projectNum) {
//     console.log("opening modal:", modal, projectNum);
//     if (modal == null) return;
//     modal.classList.add('active');
//     overlay.classList.add('active');
//     displayProject(projectNum);
// }

// function closeModal(modal) {
//     if (modal == null) return;
//     // remove all children in modal-body
//     var scrollWindow = document.getElementById("modal-body");
//     while (scrollWindow.hasChildNodes()) {  
//         scrollWindow.removeChild(scrollWindow.firstChild);
//     }
//     modal.classList.remove('active');
//     overlay.classList.remove('active');
// }

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
        img.src = "assets/images/portfolio/gallery/pro" + projectNum + "-" + i + ".jpg";
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