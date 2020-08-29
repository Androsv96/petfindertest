/* React */
import React from 'react';

/* Material-ui */
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function App() {

  async function getApi() {
    let form = new FormData();
    form.append('grant_type', 'client_credentials');
    form.append('client_id', 'QjZE3qZXQnpsJ2iAWJLCv4AaTGJO8r4ki71V6g3RLZ8ZBu4cuG');
    form.append('client_secret', '9i1e56VXsfo1Kn0b2c73VdFlCWCLJuRwEXgqycxh');
    // https://api.petfinder.com/v2/oauth2/token
    // https://api.petfinder.com/v2/animals
    //https://api.petfinder.com/v2/types/
    let papias = await fetch("https://api.petfinder.com/v2/animals", {
      method: "get",
      // body: form,
      headers: {
        Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJRalpFM3FaWFFucHNKMmlBV0pMQ3Y0QWFUR0pPOHI0a2k3MVY2ZzNSTFo4WkJ1NGN1RyIsImp0aSI6IjE1Zjc0Y2RkNGMwNjYzMjY4ZGVlZWZmOGY5MjViZThjZGI5MDI3NmQ5Yzc0NTRlODRmNmQxM2FjMzU3ZmNmYWY3OWQ3Y2Q1Y2ZkOTYxYmM5IiwiaWF0IjoxNTk4NzE1Mjc1LCJuYmYiOjE1OTg3MTUyNzUsImV4cCI6MTU5ODcxODg3NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.CddTQFj0uqA7OR11KnLUjhTpxNSefxmYRRDoLWP5xanIjILWVtbalpg4QNNRiecMUY7Dd4is_0bQyOB1etmJi99AeepbuNccuXcjhHwFMg9vAhoXj7SzW1DH1bMaVTVN2gv52Owp1PKsZJY1q4FpTKTmzGkxyEnKaASv8_bPRP75GShI43ULFScVr6FsAkvXxxWtzt5Yj_aI3Soq824-7MGlq6xMxbIpNFv7VED21Kg5tu9lMS2a2VpwytLjISdhbFc64y4MkLuZV3dT04Gse1xlTLe36kLt85gO2KzA6JxU-vlgesjTuWex7oVv2yNUsKxy5S_UOPJfUEcNUySDpg"
      }
    }).then(response => response.json());

    console.log(papias)

  }

  return (
    <Box>
      <Button onClick={() => getApi()}>asdasd</Button>
    </Box>
  );
}

export default App;
