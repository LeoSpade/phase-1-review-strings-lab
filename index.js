// Write your code in this file!
const currentUser = "Tom Hardaway";

const firstInitial = currentUser.charAt(0);

const lastName = currentUser.slice(4, 12)

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`

const shortGreeting = `Welcome, ${firstInitial} ${lastName}!`