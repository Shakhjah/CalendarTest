const React = require('react');


export default function Calendar () {
    return (
        <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
          <link rel="stylesheet" href=
"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"></link>
         <link rel="stylesheet" href="../css/Calendar.css" />
        </head>
        <body>
        <div className="calendar-container">
        <header className="calendar-header">
            <p className="calendar-current-date"></p>
            <div className="calendar-navigation">
                <span id="calendar-prev" 
                    className="material-symbols-rounded">
                    chevron_left
                </span>
                <span id="calendar-next" 
                    className="material-symbols-rounded">
                    chevron_right
                </span>
            </div>
        </header>
          
        <div className="calendar-body">
            <ul className="calendar-weekdays">
                <li>Вс</li>
                <li>Пн</li>
                <li>Вт</li>
                <li>Ср</li>
                <li>Чт</li>
                <li>Пт</li>
                <li>Сб</li>
            </ul>
            <ul className="calendar-dates"></ul>
        </div>
    </div>
    <script defer src="../js/Calendar.js" />
</body>
      </html>
    )};