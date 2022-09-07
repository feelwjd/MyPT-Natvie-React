function ServerConnect(path, data){
    fetch('http://localhost:8000/'+path, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        //Header Defination
        'Content-Type':'application/json',
      },
      json: true,
    })
    .then((response) => response.json())
    .then((responseJson) => {
    console.log(responseJson);
    return responseJson;
    })
}

export default ServerConnect;