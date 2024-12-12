let carouselContainer = document.querySelector('.carouselContainer');

let contentArray = [];
let currentIndex = 0;

let firstMessage = `
    <div class="" >
        <div class="d-flex justify-content-between">
            <h5  class="text-custom-gray ">#1 Tips for Success</h5>
        </div>
        <div>
            <h3 class="fw-semibold fs-6 fs-lg-3  mt-4">
                How to prepare for your first meeting?
            </h3>
            <p class="text-custom-gray">
                Plan an agenda! Plan out the questions and topics you'd like to discuss. If you'd like to work together on long-term goals, set some time to discuss expectations for each other.
            </p>
        </div>
    </div>
`;

let secondMessage = `
    <div class="">
        <div class="d-flex justify-content-between">
            <h5 class="text-custom-gray ">#2 Tips for Success</h5>
        </div>
        <div>
            <h3 class="fw-semibold fs-6 fs-lg-3 mt-4">
               What should we talk about during our meeting?
            </h3>
            <p class="text-custom-gray">
              Learn about each other's backgrounds to see if there's a fit. You can discuss your goals, challenges, recent successes, or a specific topic you need help with - it's up to you.
            </p>
        </div>
    </div>
`;

let thirdMessage = `
    <div class="">
        <div class="d-flex justify-content-between">
            <h5 class="text-custom-gray">#3 Tips for Success</h5>
        </div>
        <div>
            <h3 class="fw-semibold fs-6 fs-lg-3 mt-4">
                Be on time!
            </h3>
            <p class="text-custom-gray">
               You'll receive multiple reminders for your session, don't be late! Get off to a good start by showing up on time.
            </p>
        </div>
    </div>
`;

let fourthMessage = `
    <div class="">
        <div class="d-flex justify-content-between">
            <h5 class="text-custom-gray">#4 Tips for Success</h5>
        </div>
        <div>
            <h3 class="fw-semibold fs-6 fs-lg-3 mt-4">
           After the session, stay connected!


            </h3>
            <p class="text-custom-gray">
               After your session, don't be a stranger! Keep your mentor updated on your progress - they're more invested in your success than you think!
                </p>
        </div>
    </div>
`;

contentArray = [firstMessage, secondMessage, thirdMessage, fourthMessage];


updatecarouselContainer();

const nextContent = () => {
    currentIndex = (currentIndex + 1) % contentArray.length; 
    updatecarouselContainer();
};

const previousContent = () => {
    currentIndex = (currentIndex - 1 + contentArray.length) % contentArray.length; 
    updatecarouselContainer();
};

// Function to update the carousel container
function updatecarouselContainer() {
    if (carouselContainer) {
        carouselContainer.innerHTML = contentArray[currentIndex]; 
    } else {
        console.error("Carousel container not found");
    }
}

