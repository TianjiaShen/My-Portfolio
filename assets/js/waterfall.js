// let scrollWindow;

// must register these elements after DOM is ready
document.addEventListener('DOMContentLoaded', function (event) {
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

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        closeModal();
    }

    setLanguage('en');
    // global assignment
    // scrollWindow = document.getElementById("modal-body");

    // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    //     modal.style.display = "block";
    // }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         closeModal();
    //     }
    // }


    // for (var i = 0; i < brickList.length; i++) {
    //     obj = brickList[i];
    //     console.log("init", i, obj);
    //     obj.addEventListener('click', (idNum) => {
    //         // const modal = document.querySelector(obj.dataset.modalTarget);
    //         console.log(idNum);
    //         console.log(idNum + "clicked");
    //         modal.style.display = "block";
    //         displayProject(idNum);
    //     })
    // }

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

// let prevLocation;

function openModal() {
    var modal = document.getElementById("myModal");
    
    var mBody = document.getElementById("body");
    if (modal == null) return;
    modal.style.display = "block";
    modal.classList.add('active');
    
    // console.log(window.scrollY);
    mBody.style.overflow = "hidden";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var mBody = document.getElementById("body");
    if (modal == null) return;
    // remove all children in modal-body
    var scrollWindow = document.getElementById("modal-body");
    while (scrollWindow.hasChildNodes()) {
        scrollWindow.removeChild(scrollWindow.firstChild);
    }
    modal.style.display = "none";
    modal.classList.remove('active');

    // window.scrollY = prevLocation;
    mBody.style.overflow = "scroll";
}
//         idx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13];
let projectMap = [0, 7, 7, 2, 8, 5, 2, 3, 1, 2, 3, 41, 23, 30];

function displayProject(entity) {
    // acquire project num from entity
    var projectNum = entity.getAttribute('project-num');

    // show modal 
    openModal();
    
    // dynamically add images to modal-body

    // get object modal-body
    var scrollWindow = document.getElementById("modal-body");
    // console.log(projectNum, projectNum[projectNum]);

    // add image by projectNum
    for (var i = 1; i <= projectMap[projectNum]; i++) {
        // iterate through all images that belong to this project
        var img = document.createElement("img");
        // img.onerror = function (tempSrc) {
        //     // alert("fuck !" + tempSrc);
        //     console.log(tempSrc);
        //     console.log(i);
        //     console.log((i - 1).toString() + " images found for this project!");
        //     img.src = "https://images-na.ssl-images-amazon.com/images/I/51UW1849rJL._AC_SX466_.jpg";
        //     img.innerText = "fail";
        //     window.iterEnd = true;
        // };
        tempSrc = "assets/images/portfolio/gallery/pro" + projectNum + "-" + i + ".webp";
        
        // if (ImageNotExist(tempSrc)) break;
        img.src = tempSrc;

        img.id = "picture" + i;
        scrollWindowWidth = scrollWindow.clientWidth * 0.9;
        img.width = scrollWindowWidth;
        img.style.textAlign = 'center';
        img.style.display = 'block';
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
        scrollWindow.appendChild(img);
    }
}

// function ImageNotExist(url) {
//     var img = new Image();
//     img.src = url;
//     console.log(img, img.height);
//     return (img.height === 0);
// }
