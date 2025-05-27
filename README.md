# Music Streaming Application

A full-featured music streaming web application built with JavaScript, PHP, HTML, and CSS. This project features a user authentication system, dynamic playlists, search functionality, and a responsive, interactive player. Developed as part of the CodeClause Internship.

---

## Features

- **User Authentication:** Secure sign-up and login using PHP and MySQL.
- **Music Playback:** Play, pause, skip, shuffle, and repeat tracks. Dynamic UI feedback with wave animations and cover art.
- **Search Songs:** Real-time song search/filtering in the playlist.
- **Download Tracks:** Download any currently playing song.
- **Curated Playlists:** Browse playlists by popular songs or artist (e.g., Arijit Singh).
- **Popular Artists section:** Navigate to dedicated pages for featured artists.
- **Responsive Design:** Modern UI with adaptive layouts for various screens.
- **Volume and Seek Controls:** Adjust volume and seek within tracks.
- **Recent and Recommended:** Playlist sidebar allows browsing by category.
- **Built with:** 
  - JavaScript (client logic)
  - PHP (backend, authentication, DB connection)
  - MySQL (user storage)
  - HTML5/CSS3 (UI/UX)
  - Bootstrap Icons for UI

---

## Usage

- **Sign Up:** Create a new user account via the sign-up form.
- **Login:** Log in with your credentials.
- **Browse:** Explore playlists, recent, and recommended songs.
- **Play & Control:** Click play to listen, use the player for next, previous, shuffle, repeat, seek, and volume.
- **Download:** Download the current track with the download button.
- **Search:** Use the search bar for instant song filtering.
- **Artist Pages:** Click on an artist (e.g., Arijit Singh) for their dedicated playlist.

---

## Project Structure

```
.
├── audio/                 # MP3 files for songs (audio/1.mp3, audio/arijit/1.mp3, etc.)
├── images/                # Cover images and artist images
├── index.html             # Main homepage
├── Application.js         # Main JS for homepage music player
├── Arijit.html            # Dedicated artist page (e.g., Arijit Singh)
├── Arijit.js              # Music logic for artist page
├── style1.css             # Main stylesheet
├── login.php              # Login form (PHP)
├── signup.php             # Registration form (PHP)
├── db_connect.php         # Database connection (PHP)
└── README.md              # Project documentation
```

---

## Technologies Used

- **Frontend:** 
  - HTML5, CSS3, JavaScript
  - Bootstrap Icons
- **Backend:**
  - PHP (user authentication, DB connection)
- **Database:**
  - MySQL

---

## Contribution

Contributions are welcome! Please fork this repository and submit a pull request for bug fixes, improvements, or new features.

---

> Developed by [Deepak14-12](https://github.com/Deepak14-12) as part of the CodeClause Internship.
