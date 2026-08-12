/* =====================================================
   MOVIE DATABASE
===================================================== */

const movies = [

    {
        title: "Avatar",
        language: "English",
        genre: "Sci-Fi / Adventure",
        rating: "4.8",
        duration: "2h 42m",
        image: "images/avatar.jpeg",
        description:
            "An epic science-fiction adventure on the world of Pandora."
    },

    {
        title: "Avatar 2",
        language: "English",
        genre: "Sci-Fi / Adventure",
        rating: "4.7",
        duration: "3h 12m",
        image: "images/avatar2.jpeg",
        description:
            "Return to Pandora in an extraordinary underwater adventure."
    },

    {
        title: "Avengers",
        language: "English",
        genre: "Action / Superhero",
        rating: "4.8",
        duration: "2h 23m",
        image: "images/avengers.jpeg",
        description:
            "Earth's greatest heroes unite to protect the world."
    },

    {
        title: "Coolie",
        language: "Tamil",
        genre: "Action / Drama",
        rating: "4.6",
        duration: "2h 45m",
        image: "images/coolie.jpeg",
        description:
            "A high-energy Tamil action entertainer."
    },

    {
        title: "Devara",
        language: "Telugu",
        genre: "Action / Drama",
        rating: "4.7",
        duration: "2h 45m",
        image: "images/Devara.jpeg",
        description:
            "A powerful action drama set against a coastal backdrop."
    },

    {
        title: "Interstellar",
        language: "English",
        genre: "Sci-Fi / Drama",
        rating: "4.9",
        duration: "2h 49m",
        image: "images/interstellar.jpeg",
        description:
            "A journey beyond the stars in search of a future for humanity."
    },

    {
        title: "Kalki 2898 AD",
        language: "Telugu",
        genre: "Sci-Fi / Action",
        rating: "4.8",
        duration: "3h",
        image: "images/kalki.jpeg",
        description:
            "A futuristic Indian epic combining mythology and science fiction."
    },

    {
        title: "Kantara",
        language: "Kannada",
        genre: "Action / Mystery",
        rating: "4.8",
        duration: "2h 28m",
        image: "images/kanatara.jpeg",
        description:
            "A powerful story rooted in culture, tradition and nature."
    },

    {
        title: "L2 Empuraan",
        language: "Malayalam",
        genre: "Action / Thriller",
        rating: "4.7",
        duration: "2h 59m",
        image: "images/l2empuraan.jpeg",
        description:
            "A gripping Malayalam action thriller."
    },

    {
        title: "Pushpa",
        language: "Telugu",
        genre: "Action / Drama",
        rating: "4.8",
        duration: "2h 59m",
        image: "images/pushpa.jpeg",
        description:
            "The story of Pushpa Raj and his rise through the red sandalwood world."
    },

    {
        title: "Stree 2",
        language: "Hindi",
        genre: "Comedy / Horror",
        rating: "4.5",
        duration: "2h 29m",
        image: "images/stree2.jpeg",
        description:
            "A hilarious and spooky new chapter from Chanderi."
    },

    {
        title: "Thug Life",
        language: "Tamil",
        genre: "Action / Drama",
        rating: "4.4",
        duration: "2h 35m",
        image: "images/thuglife.jpeg",
        description:
            "A stylish Tamil action drama filled with powerful characters."
    },

    {
        title: "Raazi",
        language: "Hindi",
        genre: "Spy / Thriller / Drama",
        rating: "4.7",
        duration: "2h 18m",
        image: "images/raazi.jpeg",
        description:
            "A gripping spy thriller about a young woman who risks everything for her country."
    },

    {
        title: "Lokah",
        language: "Malayalam",
        genre: "Fantasy / Action / Adventure",
        rating: "4.5",
        duration: "2h 20m",
        image: "images/lokah.jpeg",
        description:
            "A captivating Malayalam fantasy adventure filled with mystery, action and powerful characters."
    },

    {
        title: "KGF-1",
        language: "Kannada",
        genre: "Action / Drama",
        rating: "4.8",
        duration: "2h 36m",
        image: "images/kgf-1.jpeg",
        description:
            "A powerful Kannada action drama following Rocky's journey from poverty to becoming a feared and influential figure."
    }

];


/* =====================================================
   MOVIE CARD
===================================================== */

function createMovieCard(movie) {

    return `

        <div class="movie-card">

            <img
                src="${movie.image}"
                alt="${movie.title}"
            >

            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <p>
                    ${movie.language} • ${movie.genre}
                </p>

                <p>
                    ⏱ ${movie.duration}
                </p>

                <p class="rating">
                    ★ ${movie.rating}
                </p>

                <p>
                    ${movie.description}
                </p>

                <div class="card-buttons">

                    <a
                        href="booking.html?movie=${encodeURIComponent(movie.title)}"
                    >
                        Book Now
                    </a>

                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   DISPLAY HOME MOVIES
===================================================== */

function displayMovies(list) {

    const container =
        document.getElementById("featuredMovies");

    if (!container) {
        return;
    }

    if (list.length === 0) {

        container.innerHTML =
            `<p>No movies found.</p>`;

        return;

    }

    container.innerHTML =
        list.map(createMovieCard).join("");

}


/* =====================================================
   DISPLAY MOVIES PAGE
===================================================== */

function displayAllMovies(list) {

    const container =
        document.getElementById("allMovies");

    if (!container) {
        return;
    }

    if (list.length === 0) {

        container.innerHTML =
            `<p>No movies found.</p>`;

        return;

    }

    container.innerHTML =
        list.map(createMovieCard).join("");

}


/* =====================================================
   LANGUAGE FILTER - HOME
===================================================== */

function filterLanguage(language) {

    if (language === "All") {

        displayMovies(movies);

        return;

    }

    const result =
        movies.filter(movie =>
            movie.language === language
        );

    displayMovies(result);

    const section =
        document.querySelector(".movies-section");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   MOVIES PAGE FILTER
===================================================== */

function filterMoviesPage(language) {

    if (language === "All") {

        displayAllMovies(movies);

        return;

    }

    const result =
        movies.filter(movie =>
            movie.language === language
        );

    displayAllMovies(result);

}


/* =====================================================
   HOME SEARCH
===================================================== */

function searchMovie() {

    const input =
        document.getElementById("homeSearch");

    if (!input) {
        return;
    }

    const value =
        input.value
        .trim()
        .toLowerCase();

    if (!value) {

        displayMovies(movies);

        return;

    }

    const result =
        movies.filter(movie =>
            movie.title
            .toLowerCase()
            .includes(value)
        );

    displayMovies(result);

    const section =
        document.querySelector(".movies-section");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   ENTER SEARCH
===================================================== */

function homeSearchEnter(event) {

    if (event.key === "Enter") {

        searchMovie();

    }

}


/* =====================================================
   MOVIES PAGE SEARCH
===================================================== */

function searchMoviesPage() {

    const input =
        document.getElementById("movieSearch");

    if (!input) {
        return;
    }

    const value =
        input.value
        .trim()
        .toLowerCase();

    const result =
        movies.filter(movie =>
            movie.title
            .toLowerCase()
            .includes(value)
        );

    displayAllMovies(result);

}


/* =====================================================
   BOOKING MOVIE DROPDOWN
===================================================== */

function populateBookingMovies() {

    const select =
        document.getElementById("bookingMovie");

    if (!select) {
        return;
    }

    movies.forEach(movie => {

        const option =
            document.createElement("option");

        option.value =
            movie.title;

        option.textContent =
            movie.title;

        select.appendChild(option);

    });


    const params =
        new URLSearchParams(
            window.location.search
        );

    const selectedMovie =
        params.get("movie");

    if (selectedMovie) {

        select.value =
            selectedMovie;

        updateBookingSummary();

    }

}


/* =====================================================
   SEATS
===================================================== */

function createSeats() {

    const seatsContainer =
        document.getElementById("seats");

    if (!seatsContainer) {
        return;
    }

    seatsContainer.innerHTML = "";

    const occupiedSeats =
        [3, 7, 12, 18, 25, 31, 44];


    for (let i = 1; i <= 48; i++) {

        const seat =
            document.createElement("button");

        seat.type =
            "button";

        seat.className =
            "seat";

        seat.textContent =
            i;


        if (occupiedSeats.includes(i)) {

            seat.classList.add(
                "occupied"
            );

            seat.disabled =
                true;

        }


        seat.addEventListener(
            "click",
            function () {

                seat.classList.toggle(
                    "selected"
                );

                updateBookingSummary();

            }
        );


        seatsContainer.appendChild(
            seat
        );

    }

}


/* =====================================================
   BOOKING SUMMARY
===================================================== */

function updateBookingSummary() {

    const movie =
        document.getElementById("bookingMovie");

    const theatre =
        document.getElementById("bookingTheatre");

    const date =
        document.getElementById("bookingDate");

    const time =
        document.getElementById("bookingTime");


    if (!movie) {
        return;
    }


    document.getElementById(
        "summaryMovie"
    ).textContent =
        movie.value || "-";


    document.getElementById(
        "summaryTheatre"
    ).textContent =
        theatre.value || "-";


    document.getElementById(
        "summaryDate"
    ).textContent =
        date.value || "-";


    document.getElementById(
        "summaryTime"
    ).textContent =
        time.value || "-";


    const selectedSeats =
        document.querySelectorAll(
            ".seat.selected"
        );


    const seatNumbers =
        [...selectedSeats]
        .map(seat =>
            seat.textContent
        );


    document.getElementById(
        "summarySeats"
    ).textContent =
        seatNumbers.length
            ? seatNumbers.join(", ")
            : "-";


    const total =
        seatNumbers.length * 180;


    document.getElementById(
        "totalPrice"
    ).textContent =
        total;

}


/* =====================================================
   CONFIRM BOOKING
===================================================== */

function confirmBooking() {

    const movie =
        document.getElementById(
            "bookingMovie"
        );

    const date =
        document.getElementById(
            "bookingDate"
        );

    const selectedSeats =
        document.querySelectorAll(
            ".seat.selected"
        );


    if (!movie || !movie.value) {

        alert(
            "Please select a movie."
        );

        return;

    }


    if (!date.value) {

        alert(
            "Please select a date."
        );

        return;

    }


    if (selectedSeats.length === 0) {

        alert(
            "Please select at least one seat."
        );

        return;

    }


    const seats =
        [...selectedSeats]
        .map(seat =>
            seat.textContent
        )
        .join(", ");


    const booking = {

        movie:
            movie.value,

        language:
            document.getElementById(
                "bookingLanguage"
            ).value,

        theatre:
            document.getElementById(
                "bookingTheatre"
            ).value,

        date:
            date.value,

        time:
            document.getElementById(
                "bookingTime"
            ).value,

        seats:
            seats,

        total:
            selectedSeats.length * 180

    };


    localStorage.setItem(
        "ksCinemaBooking",
        JSON.stringify(booking)
    );


    alert(

        "Booking confirmed successfully! 🎬\n\n" +

        "Movie: " +
        booking.movie +

        "\nSeats: " +
        booking.seats +

        "\nTotal: ₹" +
        booking.total

    );

}


/* =====================================================
   REVIEWS
===================================================== */

function populateReviewMovies() {

    const select =
        document.getElementById(
            "reviewMovie"
        );

    if (!select) {
        return;
    }


    movies.forEach(movie => {

        const option =
            document.createElement("option");

        option.value =
            movie.title;

        option.textContent =
            movie.title;

        select.appendChild(
            option
        );

    });

}


/* =====================================================
   DISPLAY REVIEWS
===================================================== */

function displayReviews() {

    const container =
        document.getElementById(
            "reviewsList"
        );

    if (!container) {
        return;
    }


    const savedReviews =
        JSON.parse(
            localStorage.getItem(
                "ksCinemaReviews"
            )
        ) || [];


    const defaultReviews = [

        {
            name: "Rahul",
            movie: "Interstellar",
            rating: 5,
            text:
                "Amazing movie experience. The visuals and story were incredible."
        },

        {
            name: "Sneha",
            movie: "Pushpa",
            rating: 5,
            text:
                "Loved the movie and the overall cinema experience."
        },

        {
            name: "Arjun",
            movie: "Kantara",
            rating: 4,
            text:
                "A powerful story with excellent performances."
        }

    ];


    const allReviews =
        [
            ...savedReviews,
            ...defaultReviews
        ];


    container.innerHTML =
        allReviews.map(review => {

            const stars =
                "★".repeat(
                    Number(review.rating)
                ) +
                "☆".repeat(
                    5 - Number(review.rating)
                );


            return `

                <div class="review-card">

                    <h3>
                        ${escapeHTML(review.name)}
                    </h3>

                    <span class="review-movie">
                        ${escapeHTML(review.movie)}
                    </span>

                    <div class="review-rating">
                        ${stars}
                    </div>

                    <p>
                        ${escapeHTML(review.text)}
                    </p>

                </div>

            `;

        }).join("");

}


/* =====================================================
   SUBMIT REVIEW
===================================================== */

function submitReview(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "reviewName"
        ).value.trim();

    const movie =
        document.getElementById(
            "reviewMovie"
        ).value;

    const rating =
        document.getElementById(
            "reviewRating"
        ).value;

    const text =
        document.getElementById(
            "reviewText"
        ).value.trim();


    if (!name || !movie || !rating || !text) {

        alert(
            "Please fill all review fields."
        );

        return;

    }


    const reviews =
        JSON.parse(
            localStorage.getItem(
                "ksCinemaReviews"
            )
        ) || [];


    reviews.unshift({

        name:
            name,

        movie:
            movie,

        rating:
            Number(rating),

        text:
            text

    });


    localStorage.setItem(
        "ksCinemaReviews",
        JSON.stringify(reviews)
    );


    alert(
        "Thank you for your review! ⭐"
    );


    document.getElementById(
        "reviewForm"
    ).reset();


    displayReviews();

}


/* =====================================================
   CONTACT FORM
===================================================== */

function submitContact(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "contactName"
        ).value.trim();

    const email =
        document.getElementById(
            "contactEmail"
        ).value.trim();

    const subject =
        document.getElementById(
            "contactSubject"
        ).value.trim();

    const message =
        document.getElementById(
            "contactMessage"
        ).value.trim();


    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {

        alert(
            "Please fill all contact fields."
        );

        return;

    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been sent successfully."
    );


    document.getElementById(
        "contactForm"
    ).reset();

}


/* =====================================================
   SECURITY HELPER
===================================================== */

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* HOME */

        displayMovies(movies);


        /* MOVIES PAGE */

        displayAllMovies(movies);


        /* BOOKING */

        populateBookingMovies();

        createSeats();


        const bookingInputs = [

            "bookingMovie",
            "bookingTheatre",
            "bookingDate",
            "bookingTime",
            "bookingLanguage"

        ];


        bookingInputs.forEach(id => {

            const element =
                document.getElementById(id);


            if (element) {

                element.addEventListener(
                    "change",
                    updateBookingSummary
                );

            }

        });


        /* REVIEWS */

        populateReviewMovies();

        displayReviews();


        const reviewForm =
            document.getElementById(
                "reviewForm"
            );


        if (reviewForm) {

            reviewForm.addEventListener(
                "submit",
                submitReview
            );

        }


        /* CONTACT */

        const contactForm =
            document.getElementById(
                "contactForm"
            );


        if (contactForm) {

            contactForm.addEventListener(
                "submit",
                submitContact
            );

        }

    }
);