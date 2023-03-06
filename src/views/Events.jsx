const React = require('react');
import Calendar from './Calendar/Calendar';

module.exports = function Events({ allEvents }) {
    return (
        <>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link rel="stylesheet" href="../css/Events.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
                </head>
                <body>
                    <div className='All' >
                        <div className='EventPlusBut'>
                            <h4 className='BIG'>Ближайшие <br /> мероприятия</h4>
                            <div className='EvBut' >
                                <div className='Event'>
                                    <>
                                        <div className='EventDate'>{allEvents.date.toString()}</div>
                                        <div className='EventName'>{allEvents.title}</div>
                                        <div className='EventText'>{allEvents.text}</div>
                                        <div className='EventOrganizator'>{allEvents.organizator}</div>
                                    </>
                                </div>
                                <div className='but'><button className='EventButton'>Запись</button></div>
                            </div>
                        </div>
                        <Calendar />
                    </div>
                </body>
            </html>
        </>
    );
};