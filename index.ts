import * as readline from 'readline-sync';
import artists from './data/artists.json';
import { Artist} from './interfaces/IArtist';


console.log("Welcome to the JSON data viewer!");
console.log();
console.log("1. View all data");
console.log("2. Filter by ID");
console.log("3. Exit");
let userChoice: number = readline.questionInt("Please enter your choice: ");
console.log();

if (userChoice === 1) {
  // print only artists names
    artists.forEach((artist: Artist) => {
        console.log(`- ${artist.name} (${artist.id})`);
    });
} else if (userChoice === 2) {
    let artistId: string = readline.question("Please enter the ID you want to filter by: ");
    let artist: Artist | undefined = artists.find((a: Artist) => a.id === artistId);
    if (artist) {
        console.log(artist);
    } else {
        console.log("Artist not found");
    }
}

