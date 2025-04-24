// script.js
// Get the modal
var modal = document.getElementById("myModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openAccountDropdown() {
    document.getElementById("accountDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("signInModal");
    const signInLink = document.querySelector(".dropdown-content a[onclick='openSignInModal()']");
    const span = document.getElementsByClassName("close")[0];

    signInLink.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const signInModal = document.getElementById("signInModal");
    const createAccountModal = document.getElementById("createAccountModal");
    const signInLink = document.querySelector(".dropdown-content a[onclick='openSignInModal()']");
    const createAccountLink = document.querySelector(".dropdown-content a[onclick='openCreateAccountModal()']");
    const closeButtons = document.getElementsByClassName("close");

    signInLink.onclick = function() {
        signInModal.style.display = "block";
    }

    createAccountLink.onclick = function() {
        createAccountModal.style.display = "block";
    }

    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            signInModal.style.display = "none";
            createAccountModal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == signInModal) {
            signInModal.style.display = "none";
        }
        if (event.target == createAccountModal) {
            createAccountModal.style.display = "none";
        }
    }
});

