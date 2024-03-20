
// Function to show the selected iframe and hide the others
function showSelectedIframe() {
    var selectedOption = document.getElementById('selectOption').value;
    
    // Loop through all iframes
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].id === selectedOption) {
            iframes[i].style.display = 'block';
        } else if (iframes[i].classList.contains('cat1')) {
            iframes[i].style.display = 'none'; // Hide the iframe with class 'cat1'
        }
    }
}

// Add event listener to the dropdown list
document.getElementById('selectOption').addEventListener('change', showSelectedIframe);



function showSelectedIframecat2() {
    var selectedOption = document.getElementById('selectOptioncat2').value;
    
    // Loop through all iframes
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].id === selectedOption) {
            iframes[i].style.display = 'flex';
        } else if (iframes[i].classList.contains('cat2')) {
            iframes[i].style.display = 'none'; 
        }
    }
}
document.getElementById('selectOptioncat2').addEventListener('change', showSelectedIframecat2);

function hideCat2Iframes() {
    var iframes = document.querySelectorAll('iframe.cat2');
    for (var i = 1; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
    }
}

// Call the function when the page loads
window.onload = function() {
    hideCat2Iframes();
};


function showSelectedIframecat3() {
    var selectedOption = document.getElementById('selectOptioncat3').value;
    
    // Loop through all iframes
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].id === selectedOption) {
            iframes[i].style.display = 'block';
        } else if (iframes[i].classList.contains('cat3')) {
            iframes[i].style.display = 'none'; 
        }
    }
}
document.getElementById('selectOptioncat3').addEventListener('change', showSelectedIframecat3);

function showSelectedIframecat4() {
    var selectedOption = document.getElementById('selectOptioncat4').value;
    
    // Loop through all iframes
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].id === selectedOption) {
            iframes[i].style.display = 'block';
        } else if (iframes[i].classList.contains('cat4')) {
            iframes[i].style.display = 'none'; 
        }
    }
}
document.getElementById('selectOptioncat4').addEventListener('change', showSelectedIframecat4);
function showSelectedIframecat5() {
    var selectedOption = document.getElementById('selectOptioncat5').value;
    
    // Loop through all iframes
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].id === selectedOption) {
            iframes[i].style.display = 'block';
        } else if (iframes[i].classList.contains('cat5')) {
            iframes[i].style.display = 'none'; 
        }
    }
}
document.getElementById('selectOptioncat5').addEventListener('change', showSelectedIframecat5);
function showSelectedIframecat6() {
    var selectedOption = document.getElementById('selectOptioncat6').value;
    
    // Loop through all iframes
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].id === selectedOption) {
            iframes[i].style.display = 'block';
        } else if (iframes[i].classList.contains('cat6')) {
            iframes[i].style.display = 'none'; 
        }
    }
}
document.getElementById('selectOptioncat6').addEventListener('change', showSelectedIframecat6);

function hideIframe(selecterrow, selecterpos, className, add=None) {
    var selectedRows = document.getElementById(selecterrow).value;
    var selectedPosition = document.getElementById(selecterpos).value;

    // Hide all iframes with the given class
    var iframes = document.querySelectorAll('iframe.' + className);
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
    }

    // Show the selected iframe
    var iframeToShow = document.getElementById('iframe_' + selectedRows + '_' + selectedPosition+add);
    if (iframeToShow) {
        iframeToShow.style.display = 'block';
    } else {
        console.error('Selected iframe not found.');
    }
}
function showIframecat7() {
    var selectedRows = document.getElementById('selectRowscat7').value;
    var selectedPosition = document.getElementById('selectPositioncat7').value;

    // Hide all iframes with the given class
    var iframes = document.querySelectorAll('iframe.cat7');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
    }

    // Show the selected iframe
    var iframeToShow = document.getElementById('iframe_' + selectedRows + '_' + selectedPosition);
    if (iframeToShow) {
        iframeToShow.style.display = 'block';
        console.log('iframe_' + selectedRows + '_' + selectedPosition + " founded")
    } else {
        console.error('Selected iframe not found.');
    }
}







