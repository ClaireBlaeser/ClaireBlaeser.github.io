const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const events = ["froze, began to hover, then floated away", "baked a delicious wedding cake and ate it all by themselves", "jumped into a manhole and reemerged as a chinchilla"];
const characters = ["Eren Jaeger", "Mikasa Ackerman", "Jean Kirstein", "Armin Arlert", "Connie Springer", "Sasha Blouse", "Levi Ackerman", "Hange Zoë", "Erwin Smith"];
const places = ["the gate", "Miami", "the Dungeon"];
function returnRandomStoryString() {
  const randomEvent = randomValueFromArray(events);
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  let storyText = `A titan appeared on a hot 94 Fahrenheit day and kicked down the city wall, so ${randomCharacter} went hysterical and screamed in terror. Thankfully they managed to reach ${randomPlace}, they waited in horror as titans flowed into Shiganshina, then, to manage their delirium, ${randomEvent}. Sasha saw the whole thing and was quite jealous — ${randomCharacter} always seems to get escape danger with plot armour the weight of 300 pounds.`;
  return storyText;
}
// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);
function generateStory() {
  let newStory = returnRandomStoryString();
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Sasha", name);
  }
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stone`;
    const temperature = `${Math.round((94-32)*(5/9))} Celsius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }
// TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}