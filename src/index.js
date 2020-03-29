const getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
    }
    const body = await res.json();
    return  body;
};


getResource('https://swapi.co/api/people/1453/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('eerr', err);
    });

