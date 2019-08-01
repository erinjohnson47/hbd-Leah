const randomRGB = () => {
    let red, green, blue;
    red = Math.floor(Math.random() *256);
    green = Math.floor(Math.random() *256);
    blue = Math.floor(Math.random() *256);
    $('body').css("background-color", `rgb(${red}, ${green}, ${blue}`);
}
randomRGB();

const facts = [“We send eachother nerdy programming jokes that our other peoples don’t get.”, “Leah enthusiastically cheers me on when I try something new!”, "Leah is Funny AF!", "Leah is SUPER SMART", "Leah's plants are growing like gangbusters!!!", "Leah has cute cats with cool names.", "Leah laughs at my jokes", "Leah makes me laugh", "Leah helps me when I get stuck on a coding problem.", "Leah is fun to hang out with", "Leah is an honorable carpenter-ant warrior.", "Leah and Erin never run out of things to laugh and talk about!", "Leah isn't fooled by the rocks that I got.", “Leah sends the greatest, most absurd snapchats to brighten my day.”]

const random = [45, 52, 376, 11, 237, 68, 92, 183, 22, 8, 109, 88, 297, 16]

const $button = $('button');
const $leah = $('#Leah');

$button.on('click', () => {
    let answerNum = Math.floor(Math.random()* Math.floor(facts.length));
    $leah.text((`Why I love Leah reason number ${random[answerNum]}: ${facts[answerNum]}`))
    randomRGB();
}) 
