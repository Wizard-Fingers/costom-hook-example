#This lession was on createing your own React hooks
##how I started:

cd into the folder you want to create the project then run
npx create-react-app myProject

##how I installed Tailwind

cd into project
run:
yarn add -D tailwindcss postcss autoprefixer
then run:
npx tailwindcss init -p
go into the tailwind config file:

module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

terminal:

yarn run start

## however in this project I didn't bother with Tailwind as I wanted to focus on makeing my own React hooks

## install a json server

to install a json server use:
yarn add global json server

from here I did:

json-server --watch ./data/db.jason
this allowed me to use the json file in my project so that I could output the data and use it
