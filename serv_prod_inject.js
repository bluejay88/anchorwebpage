const servProdFull = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Services Product - Website Design</title>
    <style>
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&display=swap');

        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Poppins', sans-serif;
            background: #000;
        }

        .container {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 900px;
            height: 600px;
            background: white;
            margin: 20px;
        }

        .container .imgBx {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100%;
            background: #212121;
            transition: .3s linear;
        }

        .container .imgBx:before {
            content: 'Web Design';
            position: absolute;
            top: 0px;
            left: 24px;
            color: #000;
            opacity: 0.2;
            font-size: 9em;
            font-weight: 800;
        }

        .container .imgBx img {
            position: relative;
            width: 700px;
            transform: rotate(-30deg);
            left: -20px;
            transition: .9s linear;
        }

        .container .details {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 100%;
            box-sizing: border-box;
            padding: 40px;
        }

        .container .details h2 {
            margin: 0;
            padding: 0;
            font-size: 2.4em;
            line-height: 1em;
            color: #444;
        }

        .container .details h2 span {
            font-size: 0.4em;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #999;
        }

        .container .details p {
            max-width: 85%;
            margin-left: 15%;
            color: #333;
            font-size: 15px;
            margin-bottom: 36px;
        }

        .container .details h3 {
            margin: 0;
            padding: 0;
            font-size: 2.5em;
            color: #a2a2a2;
            float: left;
        }

        .container .details button {
            background: #000;
            color: #fff;
            border: none;
            outline: none;
            padding: 15px 20px;
            margin-top: 5px;
            font-size: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 600;
            border-radius: 40px;
            float: right;
        }

        .product-colors span {
            width: 26px;
            height: 26px;
            top: 7px;
            margin-right: 12px;
            left: 10px;
            border-radius: 50%;
            position: relative;
            cursor: pointer;
            display: inline-block;
        }

        .black {
            background: #000;
        }

        .red {
            background: #D5212E;
        }

        .orange {
            background: #F18557;
        }

        .product-colors .active:after {
            content: "";
            width: 36px;
            height: 36px;
            border: 2px solid #000;
            position: absolute;
            border-radius: 50%;
            box-sizing: border-box;
            left: -5px;
            top: -5px;
        }

        /* responsive */
        @media (max-width: 1080px) {
            .container {
                height: auto;
            }

            .container .imgBx {
                padding: 40px;
                box-sizing: border-box;
                width: 100% !important;
                height: auto;
                text-align: center;
                overflow: hidden;
            }

            .container .imgBx img {
                left: initial;
                max-width: 100%;
                transform: rotate(0deg);
            }

            .details {
                width: 100% !important;
                height: auto;
                padding: 20px;
            }

            .container .details p {
                margin-left: 0;
                max-width: 100%;
            }
        }

        footer {
            position: fixed;
            right: 16px;
            bottom: 12px;
        }

        footer a {
            color: #fff;
            text-decoration: none;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="imgBx">
            <img src="2.png" alt="Website Design">
        </div>
        <div class="details">
            <div class="content">
                <h2>Website Design <br>
                    <span>Designing Meaningful Websites</span>
                </h2>
                <p>
                    Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is
                    made for all-day, bouncy comfort.
                    Lightweight Breathability: Lightweight woven fabric with real or synthetic leather provides
                    breathable support.
                    Cushioned Comfort: A full-length foam midsole delivers lightweight, plush cushioning.
                    Secure Traction: Exaggerated herringbone-pattern outsole offers traction on a variety of surfaces.
                </p>
                <p class="product-colors">What's Your Business In?:
                    <span class="black active" data-color-primary="#000" data-color-sec="#212121" data-pic="2.png"></span>
                    <span class="red" data-color-primary="#7E021C" data-color-sec="#bd072d" data-pic="2.png"></span>
                    <span class="orange" data-color-primary="#CE5B39" data-color-sec="#F18557" data-pic="2.png"></span>
                </p>
                <h3>Contact Us For Pricing</h3>
                <button id="contact-button">Contact Us</button>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <footer>
        <a href="https://anchorwebsitedesignstudio.com" target="_blank">support@anchorwebsitedesignstudio.com</a>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const colorOptions = document.querySelectorAll(".product-colors span");

            colorOptions.forEach(function (option) {
                option.addEventListener("click", function () {
                    // Remove 'active' class from all options
                    colorOptions.forEach(function (opt) {
                        opt.classList.remove("active");
                    });

                    // Add 'active' class to the clicked option
                    this.classList.add("active");

                    // Get the data attributes from the clicked option
                    const primaryColor = this.getAttribute("data-color-primary");
                    const secondaryColor = this.getAttribute("data-color-sec");
                    const imageUrl = this.getAttribute("data-pic");

                    // Update the styles based on the selected option
                    document.body.style.backgroundColor = primaryColor;
                    document.querySelector(".content h2").style.color = secondaryColor;
                    document.querySelector(".content h3").style.color = secondaryColor;
                    document.querySelector(".container .imgBx").style.backgroundColor = secondaryColor;
                    document.querySelector(".container .details button").style.backgroundColor = secondaryColor;

                    // Update the image src to the new URL
                    const imageElement = document.querySelector(".imgBx img");
                    imageElement.src = imageUrl;

                    // Check if the image URL is valid
                    imageElement.onerror = function () {
                        console.error("Failed to load image at URL:", imageUrl);
                        // Optionally, you could set a fallback image here
                        // imageElement.src = "fallback-image.png";
                    };
                });
            });

            // Add event listener for the contact button
            document.getElementById("contact-button").addEventListener("click", function () {
                window.location.href = "contact_us.html";
            });
        });
    </script>
</body>
</html>
`;

// Function to inject the servProdFull content into an element with a specific ID
function displayServProdFull(id) {
    document.getElementById(id).innerHTML = servProdFull;
}
function displayServProdFull(id) {
    document.getElementById(id).innerHTML = servProdFull;
}