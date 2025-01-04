
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Bliss</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to Hotel Bliss</h1>
        <nav>
            <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#rooms">Rooms & Rates</a></li>
                <li><a href="#facilities">Facilities</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="about">
            <h2>About Us</h2>
            <p>Discover the luxurious Hotel Bliss, where comfort meets elegance.</p>
        </section>
        <section id="rooms">
            <h2>Rooms & Rates</h2>
            <table>
                <tr>
                    <th>Room Type</th>
                    <th>Price per Night</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>Deluxe</td>
                    <td>$150</td>
                    <td>King bed, sea view, breakfast included.</td>
                </tr>
            </table>
        </section>
        <section id="facilities">
            <h2>Facilities</h2>
            <ul>
                <li>Swimming Pool</li>
                <li>Restaurant</li>
                <li>Gym</li>
            </ul>
        </section>
        <section id="gallery">
            <h2>Gallery</h2>
            <img src="hotel1.jpg" alt="Hotel lobby">
            <img src="hotel2.jpg" alt="Swimming pool">
        </section>
        <section id="contact">
            <h2>Contact Us</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Hotel Bliss. All rights reserved.</p>
    </footer>
</body>
</html>
