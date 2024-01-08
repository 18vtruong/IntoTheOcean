document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs a');
    const tabContents = document.querySelectorAll('.tab-content');
    // Display initial tab content (Blog Posts) on the homepage
    tabContents[0].style.display = 'block';
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide all tab contents
            tabContents.forEach((content) => {
                content.style.display = 'none';
            });
            // Show the selected tab content
            tabContents[index].style.display = 'block';
            // If the "Fun Facts" tab is clicked, display all fun facts
            if (tab.getAttribute('href') === '#tab-fun-facts') {
                displayAllFacts();
            }
        });
    });



    ////////////////////////////////////////////////CREATE BLOG POST PAGE/FORM/////////////////////////////////////
    const blogPostForm = document.getElementById('blog-post-form');
    const blogPostsContainer = document.querySelector('.blog-posts');
    const submitForm = document.getElementById('submit-form');
    const notificationContainer = document.getElementById('notificationContainer'); 
    const closeNotificationButton = document.getElementById('CloseNotificationButton'); 

    blogPostForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from the form
        const title = document.getElementById('postTitle').value;
        const content = document.getElementById('postContent').value;
        const Name = document.getElementById('personName').value; // Get the name input value

        // Blog post element
        const blogPost = document.createElement('section');
        blogPost.classList.add('blog-post');
        // CREATE POST FORMAT
        blogPost.innerHTML = `
                <h2>${title}</h2>
                <p>${content}</p>
                <p>${getCurrentDateTime()} by ${Name}</p>
                <button class="delete-button">Delete</button> <!-- Add a delete button for each new post -->
    `;
        // connect all the new blog post to the container in "Blog Posts"
        blogPostsContainer.appendChild(blogPost);

        // Delete button actions for the new post
        const deleteButton = blogPost.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            // Remove the parent blog post container when the delete button is clicked
            blogPost.remove();
        });

        blogPostForm.reset();
        notificationContainer.style.display = 'block';
    });

    closeNotificationButton.addEventListener('click', () => {
        // close the notification when the close button is clicked
        notificationContainer.style.display = 'none';
    });



    //////////////////////////////////////Time format function of the post////////////////////
    function getCurrentDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return now.toLocaleDateString(undefined, options);
    }
    //////////////////////////////////////////////////FUN FACTS/////////////////////////////////////////////////////////////
    function displayAllFacts() {
        const funFactsContainer = document.getElementById('funFactsContainer');
        const randomFacts = [
            "The ocean covers more than 70% of the Earth's surface.",
            "The ocean feeds us.",
            "More than 1 million seabirds and 100,000 marine animals die from plastic pollution every year.",
            "100% of baby sea turtles have plastic in their stomachs.",
            "There is now 5.25 trillion macro and micro pieces of plastic in our ocean & 46,000 pieces in every square mile of ocean, weighing up to 269,000 tonnes.",
            "1 in 3 fish caught for human consumption now contain plastics.",
            "A plastic bottle can last for 450 years in the marine environment, slowly fragmenting into smaller and smaller pieces which never truly disappear",
            "Only 1% of marine can be found floating in the water. 94% has already sunk to the seafloor. So therefore, it is not possible to scoop all the pollution out of the ocean.",
            "You might use a plastic bag for just 15 minutes, but it could take 100-300 years to fragment.",
            "Starting March 2023, the UN Has Agreed to Protect International Waters.",
            "More Than 190 Countries Have Signed Up to Protect 30% By the Year 2030.",
            "Humpback whales Are No Longer Endangered which proves that some species can be recovered if recognized",
            " The ocean regulates our climate and provides the air we breathe.",
            // Add more random facts here
        ];
        // Clear existing fun facts
        funFactsContainer.innerHTML = '';
        // Loops through and display all fun facts
        randomFacts.forEach((fact) => {
            const factElement = document.createElement('p');
            factElement.textContent = fact;
            funFactsContainer.appendChild(factElement);
        });
    }




    /////////////////////////////////////////Handling Contact Us Form///////////////////////////
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form input values
        const contactName = document.getElementById('contactName').value;
        const contactEmail = document.getElementById('contactEmail').value;
        const contactMessage = document.getElementById('contactMessage').value;

        // Send this data to an AJAX server (you can add this part)

        // Clears the form input 
        contactForm.reset();

      
        contactForm.style.display = 'none';

        // Show the thank you message
        thankYouMessage.style.display = 'block';
    });

    



    ///////////////////////////////////Handling How to Help Clicking Tab///////////////////////
    const largeTabs = document.querySelectorAll('.large-tab');
    const largeTabContents = document.querySelectorAll('.large-tab-content');
    largeTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Hide all tab contents
            largeTabContents.forEach((content) => {
                content.style.display = 'none';
            });
            // Get the target content ID from the tab's href attribute
            const targetContentId = tab.querySelector('a').getAttribute('href');
            // Show the selected tab content and hide the rest
            const targetContent = document.querySelector(targetContentId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }


        });
    });
   
  
 
    

});