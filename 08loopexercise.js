// Write a loop program that prints an emoji as many times as we have given a number.

// Start time 08:36pm ⌚
let emoji = "❤";
for (let index = 0; index < 10; index++) {
    console.log(emoji);
}
// end time 08:38pm 🎉

// If we want to show emoticons next to each other

const emoticon = "💕";
let word = "";
const timeToShowEmoticons = 10;
for (let index = 0; index < timeToShowEmoticons; index++) {
    word = word + emoticon;
}
console.log(word);