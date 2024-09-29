fetch('https://www.chrome.com')
    .then(rest => rest.text())
    .then(data => console.log(data));