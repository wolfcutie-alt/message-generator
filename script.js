const message = ['Your sign is sun.', 'You are having a good luck.', 'You should: "trust no one."'];

const randomMessage = () => {
    const randomIndex = Math.floor(Math.random() * message.length);
    console.log(message[randomIndex]);
};

randomMessage();