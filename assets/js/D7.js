console.log("online");

/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const stringa1 = "divdiufhosidvc";
const stringa2 = "ò,òloplk.p";

const strResult = (str1, str2) => str1.slice(0, 2) + str2.slice(-3);
console.log(strResult(stringa1, stringa2).toUpperCase());

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const casualArray = () => {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = Math.floor(Math.random() * 101);
  }
  return array;
};

const exampleArray = casualArray();
console.log(casualArray());
console.log(exampleArray);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const evenArray = (arr) => {
  return arr.filter((num) => num % 2 === 0);
};

const arrayEven = evenArray(exampleArray);

console.log(arrayEven);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const letSum = (arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
};

console.log(letSum(arrayEven));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const letSum2 = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(letSum2(arrayEven));

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const incrementElement = (arr, n) => {
  return arr.map((elem) => elem + n);
};

console.log(incrementElement(arrayEven, 10));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

stringArray = ["fdgds", "er", "45kk"];
console.log(stringArray);

// const lengthStrings = (arr) => {
//   let newArr = arr.map((str) => str.length);
//   return newArr;
// };

const lengthStrings = (arr) => arr.map((str) => str.length);

console.log(lengthStrings(stringArray));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const oddNumberArray = () => {
  const oddArray = [];
  oddArray[0] = 1;
  for (let i = 1; i < 50; i++) {
    oddArray[i] = oddArray[i - 1] + 2;
  }
  return oddArray;
};

console.log(oddNumberArray());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

// function olderFilm(arr) {
//   let olderFilm = parseInt(arr[0].Year);
//   let olderFilmName = arr[0].Title;
//   for (let i = 0; i < arr.length; i++) {
//     if (parseInt(arr[i].Year) < olderFilm) {
//       olderFilm = parseInt(arr[i].Year);
//       olderFilmName = arr[i].Title;
//     }
//   }
//   return olderFilmName;
// }

function olderFilm(arr) {
  let olderFilm = parseInt(arr[0].Year);
  let olderFilmName = arr[0].Title;
  arr.forEach((movie) => {
    if (parseInt(movie.Year) < olderFilm) {
      olderFilm = parseInt(movie.Year);
      olderFilmName = movie.Title;
    }
  });

  let count = 0;
  arr.forEach((movie) => {
    if (parseInt(movie.Year) === olderFilm) {
      count += 1;
    }
  });

  // if (count === 1) {
  //   return olderFilmName;
  // } else {
  //   let olderFilmNameArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (parseInt(arr[i].Year) === olderFilm) {
  //       olderFilmNameArr.push(arr[i].Title);
  //     }
  //   }
  //   olderFilmName = olderFilmNameArr.join(", ");
  //   return olderFilmName;
  // }

  if (count === 1) {
    return olderFilmName;
  } else {
    let olderFilmNameArr = [];
    arr.forEach((movie) => {
      if (parseInt(movie.Year) === olderFilm) {
        olderFilmNameArr.push(movie.Title);
      }
    });
    olderFilmName = olderFilmNameArr.join(", ");
    return olderFilmName;
  }
}

console.log(olderFilm(movies));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const moviesNumber = (arr) => arr.length;

console.log(moviesNumber(movies));

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const moviesTitle = (arr) => arr.map((movie) => movie.Title);

console.log(moviesTitle(movies));

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const moviesNewmillennium = (arr) => {
  return arr.filter((movie) => movie.Year > 2000);
};

console.log(moviesNewmillennium(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const yearsSum = (arr) => arr.reduce((accumulator, value) => accumulator + parseInt(value.Year), 0);

console.log(yearsSum(movies));

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const findImdbID = (arr, id) => arr.find((element) => element.imdbID === id);

console.log(findImdbID(movies, "tt0848228"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

const findMovieIndex = (arr, y) => arr.findIndex((movie) => movie.Year === y);

console.log(findMovieIndex(movies, "1984"));
