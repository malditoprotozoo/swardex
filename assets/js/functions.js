const getInfo = text => {
  const response = fetch(`https://swapi.co/api/people/?search=${text}`);
  response
    .then(data => data.json())
    .then(data => {
      if (data.count !== 0) {
        postInfoModal(data.results);
      } else if (data.count === 0) {
        if (checkName(text) === undefined) {
          console.log('error');
        } else {
          getInfoOutApi(checkName(text));
        }
      }
    });
};

const postInfo = (data) => {
  let results = data.map((obj) => {
    $('#result-container').append(`<h2>${obj.name}</h2>`);
  });
};

const getInfoModal = text => {
  const response = fetch(`https://swapi.co/api/people/?search=${text}`);
  response
    .then(data => data.json())
    .then(data => postInfoModal(data.results));
};

const postInfoModal = (data) => {
  let results = data.map((obj) => {
    let planet;
    console.log(`Name: ${obj.name}`);
    console.log(`Height: ${obj.height}`);
    console.log(`Hair Color: ${obj['hair_color']}`);
    console.log(`Skin Color: ${obj['skin_color']}`);
    console.log(`Mass: ${obj.mass}`);
    console.log(`Eye Color: ${obj['eye_color']}`);
    console.log(`Birth Year: ${obj['birth_year']}`);
    console.log(`Gender: ${obj.gender}`);
    const planetResponse = fetch(`${obj.homeworld}`);
    planetResponse
      .then(data => data.json())
      .then(data => {
        planet = data.name;
        console.log(`Homeworld: ${planet}`);
      });
    // console.log(``);
  });
};

const getPlanetOrigin = url => {
  const response = fetch(`${url}`);
  response
    .then(data => data.json())
    .then(data => {
      return data['name'];
    });
};

const checkName = text => {
  let textLow = text.toLowerCase();
  for (let i = 0; i < characters.length; i++) {
    let name = characters[i].name.toLowerCase();
    let nick = characters[i].nickname.toLowerCase();
    if (name.includes(textLow) || nick.includes(textLow)) {
      return characters[i].name;
    }
  }
  return undefined;
};

const getInfoOutApi = text => {
  characters.map((obj) => {
    if (obj.name.includes(text) === true) {
      console.log(`Name: ${obj.name}`);
      console.log(`Height: ${obj.height}`);
      console.log(`Hair Color: ${obj['hair_color']}`);
      console.log(`Skin Color: ${obj['skin_color']}`);
      console.log(`Mass: ${obj.mass}`);
      console.log(`Eye Color: ${obj['eye_color']}`);
      console.log(`Birth Year: ${obj['birth_year']}`);
      console.log(`Gender: ${obj.gender}`);
      console.log(`Homeworld: ${obj.homeworld}`);
    };
  });
};