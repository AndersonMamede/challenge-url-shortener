function sortItensByHits (itens) {
  itens.sort((a, b) => {
    if (a.hits > b.hits) {
      return -1;
    } else if (a.hits < b.hits) {
      return 1;
    } else {
      return 0;
    }
  });
}

function getTopFive () {
  return new Promise((resolve, reject) => {
    const url = 'https://raw.githubusercontent.com/AndersonMamede/challenge-url-shortener/master/mock-data.json';
    fetch(url)
      .then(response => response.json())
      .then(itens => {
        if (!itens || !itens.length) {
          return resolve([]);
        }

        sortItensByHits(itens);
        const topFive = itens.slice(0, 5);
        resolve(topFive);
      })
      .catch(reject);
  });
};

export default getTopFive;
