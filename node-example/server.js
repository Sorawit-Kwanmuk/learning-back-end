const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (request, response) => {
  //   console.log(request.url);
  //   console.log(request.method);
  //   const indexFile = await fs.readFile('./index.html', 'utf8');
  //   response.end('<h1>Welcome to My first Server</h1>');
  //   response.end(indexFile);
  switch (request.url) {
    case '/': {
      const indexFile = await fs.readFile('./index.html', 'utf8');
      response.end(indexFile);
      break;
    }
    case '/about': {
      const aboutFile = await fs.readFile('./about.html', 'utf8');
      response.end(aboutFile);
      break;
    }
    case '/contactUs': {
      const contactUsFile = await fs.readFile('./contactUs.html', 'utf8');
      response.end(contactUsFile);
      break;
    }
    case '/login': {
      const loginFile = await fs.readFile('./login.html', 'utf8');
      response.end(loginFile);
      break;
    }
    case '/postlogin': {
      //case success Login send response to Home Page
      response.end('<h1>Home</h1>');
      //case fail Login send response to Login Page
      break;
    }
    default: {
      response.end('<h1>404 Page Not Found</h1>');
    }
  }
});

server.listen(9999, () => console.log('Server running on port 9999'));
