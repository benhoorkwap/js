
// const pattern = /\B(?=(\d{3})+(?!\d))/g;

const pattern = /\B(?=(\d{3})+(?!\d))/g

const message = '1100000000';

const isMatch = (message, pattern) => {
    if(message.match(pattern)) {
        console.log(`${message} matched ${pattern}`)
    }
    else {
        console.log(`${message} DID NOT matched ${pattern}`)
    }
}

const replace = (message, pattern, replacer) => {
    if(message.match(pattern)){
        const newMessage = message.replace(pattern, replacer);
        console.log(`${message} matched ${pattern} and is replaced`)
        console.log(`Result: ${newMessage}`)
    }
    else {
        console.log(`${message} DID NOT matched ${pattern}`)
    }
}

replace(message, pattern, ',')