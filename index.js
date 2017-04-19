var http = require("http");
const StoryFabricator = {
    getRandomStory() {
        return new Promise((fulfill, reject) => {
            http.get('http://storyfabricator.herokuapp.com/story.json', (res) => {
                const {statusCode} = res;
                if (statusCode !== 200) {
                    reject('Request Failed');
                }
                res.setEncoding('utf8');
                let rawData = '';
                res.on('data', (chunk) => {
                    rawData += chunk;
                });
                res.on('end', () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        fulfill(parsedData);
                    } catch (e) {
                        console.error(e.message);
                    }
                });
            });
        });
    }
};
module.exports = StoryFabricator;
