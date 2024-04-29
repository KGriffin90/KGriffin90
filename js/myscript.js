$(document).ready(function () {
    // Intercept navigation clicks
    $(document).on('click', '.nav-link', function (e) {
        e.preventDefault(); // Prevent default navigation behavior
        var url = $(this).attr('href'); // Get the URL from the clicked link
        loadContent(url); // Load content dynamically
    });

    // Function to load content dynamically
    function loadContent(url) {
        var container = $('.main-page, .other-pages'); // Select both main-page and other-pages containers

        container.fadeOut('slow', function () {
            // Load content into the container
            container.load(url + ' .main-page > *, .other-pages > *', function (response, status, xhr) {
                if (status == "error") {
                    var msg = "Sorry but there was an error: ";
                    console.log(msg + xhr.status + " " + xhr.statusText);
                } else {
                    // Fade in the containers
                    container.fadeIn('slow');

                    // Add centered-nav class to the navigation bar
                    $('.other-pages nav').addClass('centered-nav');
                }
            });
        });
    }
    
    // Place the provided form submission script here
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form";
                    }
                });
            }
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form";
        });
    }
    form.addEventListener("submit", handleSubmit);

});
