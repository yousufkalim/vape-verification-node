/**
 * Page 404 - Not Found
 * @author Yousuf Kalim
 */
const page404 = (path: string): string => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Oops! Lost in Space</title>

    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:900" rel="stylesheet" />

    <style>
      * {
        box-sizing: border-box;
      }

      body {
        padding: 0;
        margin: 0;
        font-family: "Cabin", sans-serif;
        background-color: #DEFCF9;
        color: #362FD9;
      }

      #notfound {
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .notfound {
        text-align: center;
        animation: bounceIn 2s;
      }

      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: translateY(-200px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .notfound-404 h1 {
        font-size: 150px;
        margin: 0;
        font-weight: 900;
        color: #3C84AB;
      }

      .notfound h2 {
        font-size: 24px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 15px;
        text-transform: uppercase;
      }

      .notfound h2 code {
        font-family: "Courier New", monospace;
        background-color: #85CDFD;
        padding: 2px 6px;
        border-radius: 3px;
      }

      .notfound a {
        display: inline-block;
        padding: 10px 25px;
        border-radius: 3px;
        background-color: #362FD9;
        color: #DEFCF9;
        text-decoration: none;
        margin-top: 20px;
        transition: background-color 0.3s, color 0.3s;
      }

      .notfound a:hover {
        background-color: #3C84AB;
        color: #362FD9;
      }

      @media only screen and (max-width: 767px) {
        .notfound-404 h1 {
          font-size: 120px;
        }
      }

      @media only screen and (max-width: 480px) {
        .notfound-404 h1 {
          font-size: 80px;
        }
        .notfound h2 {
          font-size: 18px;
        }
      }
    </style>
  </head>

  <body>
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Oops! We can't find the planet you're looking for.</h2>
        <h2>Maybe it's in another galaxy or at path: <code>${path}</code></h2>
        <a href="/">Back to Homebase</a>
      </div>
    </div>
  </body>
</html>
`;
};

export default page404;
