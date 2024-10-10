const currentUser = "Grace Hopper";


const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const unexcitedWelcomeMessage = welcomeMessage.toLocaleLowerCase();

console.log(unexcitedWelcomeMessage)

const shortGreeting = `Welcome, ${currentUser.slice(0,5)}!`;

