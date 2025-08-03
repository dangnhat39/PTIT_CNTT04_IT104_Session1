const response = {
    data: {
        id: 1,
        title: "Destructuring in JS",
        author: {
            name: "Dev",
            email: "Dev@gmail.com"
        }
    }
};

const {
    data: {
        title,
        author: { name: authorName, email: authorEmail }
    }
} = response;

console.log(`Title: ${title}`);
console.log(`AuthorName: ${authorName}`);
console.log(`AuthorEmail: ${authorEmail}`);
