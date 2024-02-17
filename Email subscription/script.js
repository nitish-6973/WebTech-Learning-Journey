const msg = document.getElementById("msg");

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault(); 

        
        const formData = new FormData(this);

        // Add your logic to handle form submission using fetch or another method
        fetch('your_submission_endpoint_url', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Update the message element with the response data
            msg.innerHTML = data;
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Update the message element with an error message
            msg.innerHTML = 'An error occurred during submission.';
        });
    });
