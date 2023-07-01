

const siteUrl = document.location.host

const isGoogle = (siteUrl === 'www.google.com')

const timeout = 120

const timer = localStorage.getItem(siteUrl)

const minutesSinceLastVisit = Math.abs((Date.now() - timer) /60000);

const minutesTillNextAllowed = timer ? timeout - minutesSinceLastVisit : timeout

if (!timer || minutesTillNextAllowed > 0 && !isGoogle) {
    localStorage.setItem(siteUrl, Date.now())
    window.location.replace("https://www.google.com/")
}

if(isGoogle){
    const h1 = document.createElement("h1");
    h1.textContent = `${document.referrer} will be available in ${Math.ceil(minutesTillNextAllowed) || timeout} minutes.`;
    h1.className = 'mainHeading'
    document.body.insertBefore(h1, document.body.firstChild);
}


