let main = document.querySelector("main");
let body = document.querySelector("body");
let joke1 = "I don’t trust stairs. They are always up to something.";
let joke2 = "I searched for a lighter on Amazon, but all I could find were 6,000 matches.";
let joke3 = "Studies show that women who carry extra weight live longer than men who bring it up.";

let end = document.createElement('p');
end.textContent="That's all folks!"

const jokes = `
  <h2>My Jokes</h2>
  <ul>
    <li>${joke1}</li>
    <li>${joke2}</li>
    <li>${joke3}</li>
  </ul>
`;

main.innerHTML = jokes;
body.appendChild(end);