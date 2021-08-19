const fetch = require("node-fetch");

(async () => {
    await fetch('https://www.reddit.com/r/samoyeds/top/.json')
      .then(response => response.json())
      //.reddit_video.fallback_url
      .then(res => {
        const d = new Date();
        const hour = d.getHours() + 1;
        console.log(hour);
        const number = hour;
        console.log(res.data.children);
        if (res.data.children[number].data.media) {
          console.log(res.data.children[number].data.media.reddit_video.fallback_url);
        } else if (res.data.children[number].data.url) {
          console.log(res.data.children[number].data.url);
        } else if (res.data.children[25].data.media) {
          console.log(res.data.children[number].data.media.reddit_video.fallback_url);
        } else if (res.data.children[25].data.url) {
          console.log(res.data.children[number].data.url);
        } else {
          console.log('no file to display 🙉');
        }
    });
})();
