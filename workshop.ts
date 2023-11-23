class Book {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    score: number[];
    available: boolean;
    [key: string]: any;
    constructor(
      title: string,
      author: string,
      genre: string,
      publicationYear: number,
      score: number[],
      available: boolean
    ) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.publicationYear = publicationYear;
      this.score = score;
      this.available = available;
    }
  }
  

const library: Book[] = [
{
    title: "Necronomicon",
    author: "H. P. Lovecraft",
    genre: "Fantasy",
    publicationYear: 2005,
    score: [69, 81, 34, 89, 76],
    available: true,
},
{
    title: "The Legend of Zelda Encyclopedia",
    author: "Nintendo",
    genre: "Fantasy",
    publicationYear: 2018,
    score: [100, 94, 97, 99, 96],
    available: false,
},
{
    title: "Blaming the users",
    author: "Disgruntled Dave",
    genre: "Technical",
    publicationYear: 2015,
    score: [65, 78, 77, 75, 84],
    available: true,
},
{
    title: "The Lesser Key of Solomon",
    author: "Johann Weyer",
    genre: "History",
    publicationYear: 1600,
    score: [66, 66, 74, 75, 70],
    available: true,
},


{
    title: "Dragalia Lost Official Art Book",
    author: "Nintendo & Cygames",
    genre: "Fantasy",
    publicationYear: 2019,
    score: [100, 100, 100, 100, 100],
    available: false,
},
{
    title: "How to quit vim",
    author: "CS qt pi",
    genre: "Technical",
    publicationYear: 1987,
    score: [18, 5, 23, 74, 81],
    available: true,
},
{
    title: "Malbolge basics",
    author: "Dante Alighieri",
    genre: "Technical",
    publicationYear: 2006,
    score: [88, 74, 84, 81, 83],
    available: true,
},
{
    title: "Programming while Crossdressing",
    author: "CS qt pi",
    genre: "Technical",
    publicationYear: 2017,
    score: [69, 80, 80, 55, 69],
    available: true,
},
];

  //code here
  
