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
    //Hide Loader
    //setLoading(false);
    console.log(responseJson);
    // If server response message same as Data Matched
    return responseJson;
    })
}

export default ServerConnect;