const http = require("http");
const url = require("url");
const fs = require("fs");

// /** Exercise 3 */
// // create server
// const server = http.createServer((request, response) => {
//   // Process requests
//   response.writeHead(200, { "Content-Type": "text/html" });
//   let message;
//   if (request.url === `/about`) {
//     message = `<h1>Hi Bedir, Here is About page</h1>`;
//   } else {
//     message = `<h1>Hi Bedir, Here is home page</h1>`;
//   }
//   response.end(message);
// });

// /** Exercise 4 */
// // create server

// const server = http.createServer((request, response) => {
//   // Process requests
//   response.writeHead(200, { "Content-Type": "text/html" });
//   let message;

//   // URL'yi analiz et
//   const parsedUrl = url.parse(request.url, true);
//   // Analiz edilmiş URL'den sorgu parametrelerine eriş
//   const queries = parsedUrl.query;

//   if (parsedUrl.pathname === "/about") {
//     if (queries.location === "stockholm") {
//       message = `<p>You reach to <b>Stockholm</b> location</p>`;
//     } else {
//       message = `<p>Don't find <b>${queries.location}</b> About</p>`;
//     }
//   } else if (parsedUrl.pathname === "/") {
//     message = `<h1>Hi Bedir, Here is home page</h1>`;
//   }

//   response.end(message);
// });

/** Exercise 5 */
// create server

const server = http.createServer((request, response) => {
  // URL'yi analiz et
  const parsedUrl = url.parse(request.url, true);
  // Analiz edilmiş URL'den sorgu parametrelerine eriş
  const queries = parsedUrl.query;

  if (parsedUrl.pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    if (queries.kind === "animals") {
      if (queries.name === "panda") {
        fs.readFile("animals-panda.html", (err, data) => {
          if (err) {
            response.writeHead(500);
            return response.end("There is a problem on the server");
          }
          response.end(data);
        });
      } else if (queries.name === "wolf") {
        fs.readFile("animals-wolf.html", (err, data) => {
          if (err) {
            response.writeHead(500);
            return response.end("There is a problem on the server");
          }
          response.end(data);
        });
      } else {
        fs.readFile("animals.html", (err, data) => {
          if (err) {
            response.writeHead(500);
            return response.end("There is a problem on the server");
          }
          response.end(data);
        });
      }
    } else if (queries.kind === "cars") {
      if (queries.name === "audi") {
        fs.readFile("cars-audi.html", (err, data) => {
          if (err) {
            response.writeHead(500);
            return response.end("There is a problem on the server");
          }
          response.end(data);
        });
      } else if (queries.name === "luxury") {
        fs.readFile("cars-luxury.html", (err, data) => {
          if (err) {
            response.writeHead(500);
            return response.end("There is a problem on the server");
          }
          response.end(data);
        });
      } else {
        fs.readFile("cars.html", (err, data) => {
          if (err) {
            response.writeHead(500);
            return response.end("There is a problem on the server");
          }
          response.end(data);
        });
      }
    } else {
      //if no queries
      fs.readFile("home.html", (err, data) => {
        if (err) {
          response.writeHead(500);
          return response.end("There is a problem on the server");
        }
        response.end(data);
      });
    }
  } else if (parsedUrl.pathname === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    if (queries.football === "football") {
      fs.readFile("sweden-football-league.txt", (err, data) => {
        if (err) {
          response.writeHead(500);
          return response.end("There is a problem on the server");
        }
        // Create html content
        const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Build Server</title>
                  <style>
                  * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                  }
                  
                  header {
                    height: 60px;
                    padding: 0 20px;
                    font-size: 1.3rem;
                    background-color: teal;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                  }
                  ul {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    list-style-type: none;
                  }
                  li a {
                    text-decoration: none;
                    color: #fff;
                    padding: 3px 6px;
                    border: 1px solid teal;
                    border-radius: 8px;
                  }
                  h1 {
                    text-align: center;
                    padding: 20px
                  }
                  p {
                    text-aling: center;
                    padding: 20px;
                  }
                  .go-back {
                    text-align: center;
                    margin-top: 30px;
                    a{
                        padding: 4px 8px;
                        margin: 20px auto;
                        text-decoration: none;
                        color: teal;
                        border: 1px solid teal;
                        border-radius: 6px;
                    }
                  }
                </style>
                </head>
                <body>
                <header>
                <span>Build Server </span>
                    <nav>
                        <ul>
                        <li><a href="http://localhost:3000/">Home</a></li>
                        <li><a href="http://localhost:3000/about">About</a></li>
                        <li><a href="http://localhost:3000/contact">Contact</a></li>
                        <li><a href="http://localhost:3000/login">Login</a></li>
                        </ul>
                    </nav>
                </header>
                <h1> Allsvenskan </h1>
                  <p>
                    ${data}
                  </p>
                  <div class="go-back" ><a href="http://localhost:3000/about">Go Back</a></div>
                </body>
                </html>
              `;

        response.end(htmlContent);
      });
    } else if (queries.history === "history") {
      fs.readFile("sweden-history.txt", (err, data) => {
        if (err) {
          response.writeHead(500);
          return response.end("There is a problem on the server");
        }
        // Create html content
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Build Server</title>
              <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              header {
                height: 60px;
                padding: 0 20px;
                font-size: 1.3rem;
                background-color: teal;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 20px;
              }
              ul {
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style-type: none;
              }
              li a {
                text-decoration: none;
                color: #fff;
                padding: 3px 6px;
                border: 1px solid teal;
                border-radius: 8px;
              }
              h1 {
                text-align: center;
                padding: 20px
              }
              p {
                text-aling: center;
                padding: 20px;
              }
              .go-back {
                text-align: center;
                margin-top: 30px;
                a{
                    padding: 4px 8px;
                    margin: 20px auto;
                    text-decoration: none;
                    color: teal;
                    border: 1px solid teal;
                    border-radius: 6px;

                }
              }
            </style>
            </head>
            <body>
            <header>
            <span>Build Server </span>
                <nav>
                    <ul>
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/about">About</a></li>
                    <li><a href="http://localhost:3000/contact">Contact</a></li>
                    <li><a href="http://localhost:3000/login">Login</a></li>
                    </ul>
                </nav>
            </header>
            <h1> History of Sweden </h1>
              <p>
                ${data}
              </p>
              <div class="go-back" ><a href="http://localhost:3000/about">Go Back</a></div>
            </body>
            </html>
          `;

        response.end(htmlContent);
      });
    } else {
      fs.readFile("about.html", (err, data) => {
        if (err) {
          response.writeHead(500);
          return response.end("There is a problem on the server");
        }
        response.end(data);
      });
    }
  } else if (parsedUrl.pathname === "/contact") {
    response.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile("contact.html", (err, data) => {
      if (err) {
        response.writeHead(500);
        return response.end("There is a problem on the server");
      }
      response.end(data);
    });
  } else if (parsedUrl.pathname === "/login") {
    response.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile("login.html", (err, data) => {
      if (err) {
        response.writeHead(500);
        return response.end("There is a problem on the server");
      }
      response.end(data);
    });
  }
});

//Listen to the server on a specific port
const port = 3000;
server.listen(port, () => {
  //   console.log(`Server is working and listen the localhost:${port} .`);
  console.info(`Server is working and listen the http://localhost:${port}.`);
});
