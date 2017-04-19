var request = require("request");
const StoryFabricator = {
	getRandomStory() {
		return new Promise((fulfill, reject) => {
			request({uri: "http://storyfabricator.herokuapp.com/"}, (error, response, body) => {
				if(error) {
					reject(error);
				}
				let text = body.split('<div class="story">')[1].split('</div>')[0];
				fulfill(text);
			});
		});
	}
};
module.exports = StoryFabricator;
