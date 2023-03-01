# 🎮 STRANGER THINGS



Stranger Things is a browser game based on the Netflix series! How many times can you click the demogorgon before time runs out?!
<br></br>
Project Link: https://terra-game-pearl.vercel.app/


![Stranger Things Game Home Page](https://github.com/comeworkwith-me/stranger-things/blob/main/public/Stranger%20Things.png?raw=true)
![Stranger Things Game About Page](https://github.com/comeworkwith-me/stranger-things/blob/main/public/Stranger%20Things%202.png?raw=true)
![Stranger Things Game Play Page](https://github.com/comeworkwith-me/stranger-things/blob/main/public/Stranger%20Things%203.png?raw=true)


<br></br>


# 🛠️ HOW IT'S MADE

Tech Stack: HTML, CSS, Javascript, and React on the frontend. Docker Compose, Node, and Rust on the backend.
<br></br>

I started with the backend. The env setup required Docker Compose, Node.js, Rust, Terrain and LocalTerra. This project explores the Terra blockchain so in order to deploy and test my smart contract, I used Terrain - a development environment easily accessible from the terminal. I used LocalTerra to run a local version of the Terra network to easily test my smart contract as I build. Next, I used Rust to write the smart contract for the game. I compiled the Rust code into WASM bytecode so it could run on Terra's blockchain. 
<br></br>

Now that I have a smart contract I can read and write data to, I move on to the frontend. I start by adding the Terra wallet provider so users can connect their wallet. From here I setup the menu using React Router and create the pages for the web app. Lastly, I write the logic to read and write data from my smart contract before polishing any last details and deploying the app.


