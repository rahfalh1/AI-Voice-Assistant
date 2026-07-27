# AI-Voice-Assistant

## Overview

This project is a simple AI Voice Assistant web application developed using HTML, CSS, JavaScript, and PHP. It allows users to send text messages through a web interface, communicate with a PHP backend, and receive responses in real time. It also includes basic voice input support using the browser's Speech Recognition API.

## Technologies

- HTML5
- CSS3
- JavaScript
- PHP
- XAMPP

## Features

- Modern chat interface
- Send messages to the server
- PHP backend processing
- Voice input support
- Real-time responses
- Clear chat button
- Displays current date and time
- Responsive design

## Project Structure

```
AI-Voice-Assistant/
│── index.html
│── style.css
│── script.js
│── chat.php
│── Screenshot.png
└── README.md
```

## Screenshot

![Application Screenshot](Screenshot.png)

## Installation

1. Install XAMPP.
2. Copy the project folder into `htdocs`.
3. Start Apache.
4. Open:
   `http://localhost/Voice-Assistant-Web`

## Problem

The web application was unable to communicate properly with the PHP backend, causing server connection errors when sending messages.

## Solution

The PHP backend was updated to correctly handle POST requests. The frontend communication was implemented using the Fetch API, and the server timezone was configured correctly to ensure accurate date and time responses.

## Result

The application successfully exchanges messages between the frontend and the PHP backend without connection errors.
