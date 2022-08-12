var $ = document.querySelector("body");

var statusDiv = document.createElement("div");
statusDiv.classList.add("status-bar");

var statusColumnDiv1 = document.createElement("div");
statusColumnDiv1.classList.add("status-bar_column");

var statusColumnDiv2 = document.createElement("div");
statusColumnDiv2.classList.add("status-bar_column");

var statusColumnDiv3 = document.createElement("div");
statusColumnDiv3.classList.add("status-bar_column");

var batterySpan = document.createElement("span");
batterySpan.innerHTML = "100%";

var batteryIcon = document.createElement("i");
batteryIcon.classList.add("fas");
batteryIcon.classList.add("fa-battery-full");
batteryIcon.classList.add("fa");

var boltIcon = document.createElement("i");
boltIcon.classList.add("fas");
boltIcon.classList.add("fa-bolt");

var Timer = document.createElement("span");
Timer.innerHTML = "18:43";

var mySpan = document.createElement("span");
mySpan.innerHTML = "No Service";

statusColumnDiv2.prepend(Timer);

statusColumnDiv3.prepend(boltIcon);
statusColumnDiv3.prepend(batteryIcon);
statusColumnDiv3.prepend(batterySpan);

var WifiIcon = document.createElement("i");
WifiIcon.classList.add("fas");
WifiIcon.classList.add("fa-wifi");

statusColumnDiv1.prepend(WifiIcon);
statusColumnDiv1.prepend(mySpan);

statusDiv.prepend(statusColumnDiv3);
statusDiv.prepend(statusColumnDiv2);
statusDiv.prepend(statusColumnDiv1);

// 스크린 헤더

var screenDiv = document.createElement("div");
screenDiv.classList.add("screen-header");

var more = document.createElement("h1")
more.innerHTML = "More";

var sideIcon = document.createElement("div");
sideIcon.classList.add("side-icon");

var searchIcon = document.createElement("i");
searchIcon.classList.add("fas");
searchIcon.classList.add("fa-search");
searchIcon.classList.add("fa-lg");

var musicIcon = document.createElement("i");
musicIcon.classList.add("fas");
musicIcon.classList.add("fa-music");

var settingIcon = document.createElement("i");
settingIcon.classList.add("fas");
settingIcon.classList.add("fa-cog");
settingIcon.classList.add("fa-lg");

var dotDiv = document.createElement("div");
dotDiv.classList.add("dot");

var none = document.createElement("p")
none.innerHTML = " ";

sideIcon.prepend(dotDiv);

dotDiv.prepend(none); 


sideIcon.prepend(settingIcon);
sideIcon.prepend(musicIcon);
sideIcon.prepend(searchIcon);

screenDiv.prepend(sideIcon);
screenDiv.prepend(more);


// 메인 스크린

var mainDiv = document.createElement("div");
mainDiv.classList.add("main-screen");

var profile = document.createElement("img");
profile.src = "2.png";

var info = document.createElement("div");
info.classList.add("info");

var nameDiv = document.createElement("p");
nameDiv.innerHTML = "Ponyo";

var phoneNumDiv = document.createElement("div");
phoneNumDiv.classList.add("phone-number");

var phoneSmall = document.createElement("small");
phoneSmall.innerHTML = "+82 010-7517-9701"

var exSmall = document.createElement("small");
exSmall.innerHTML = "!"

var circleDiv = document.createElement("div");
circleDiv.classList.add("circle");

var none = document.createElement("p")
none.innerHTML = " ";

var talkDiv = document.createElement("div");
talkDiv.classList.add("talk-icon");

var talkIcon = document.createElement("i");
talkIcon.classList.add("fas");
talkIcon.classList.add("fa-comment");
talkIcon.classList.add("fa-3x");

talkDiv.prepend(talkIcon);

circleDiv.prepend(none);

phoneNumDiv.prepend(circleDiv);
phoneNumDiv.prepend(exSmall);
phoneNumDiv.prepend(phoneSmall);

info.prepend(phoneNumDiv);
info.prepend(nameDiv);

mainDiv.prepend(talkDiv);
mainDiv.prepend(info);
mainDiv.prepend(profile);




// more

var moreDiv = document.createElement("div");
moreDiv.classList.add("more-screen");

var moreDiv1 = document.createElement("div");
moreDiv1.classList.add("more-screen1");


var calenderDiv = document.createElement("div");
calenderDiv.classList.add("calendar")

var calenderIcn = document.createElement("i");
calenderIcn.classList.add("far");
calenderIcn.classList.add("fa-calendar-check");
calenderIcn.classList.add("fa-2x");

var calenderSpan = document.createElement("p");
calenderSpan.innerHTML = "calender";


var emotionsDiv = document.createElement("div");
emotionsDiv.classList.add("emotions")

var emotionsIcn = document.createElement("i");
emotionsIcn.classList.add("fas");
emotionsIcn.classList.add("fa-bomb");
emotionsIcn.classList.add("fa-2x");

var emotionsSpan = document.createElement("p");
emotionsSpan.innerHTML = "emotions";


var themesDiv = document.createElement("div");
themesDiv.classList.add("themes")

var themesIcn = document.createElement("i");
themesIcn.classList.add("fas");
themesIcn.classList.add("fa-palette");
themesIcn.classList.add("fa-2x");

var themesSpan = document.createElement("p");
themesSpan.innerHTML = "themes";


var accountDiv = document.createElement("div");
accountDiv.classList.add("account")

var accountIcn = document.createElement("i");
accountIcn.classList.add("fas");
accountIcn.classList.add("fa-file-invoice-dollar");
accountIcn.classList.add("fa-2x");

var accountSpan = document.createElement("p");
accountSpan.innerHTML = "account";


accountDiv.prepend(accountSpan);
accountDiv.prepend(accountIcn);

themesDiv.prepend(themesSpan);
themesDiv.prepend(themesIcn);

emotionsDiv.prepend(emotionsSpan);
emotionsDiv.prepend(emotionsIcn);

calenderDiv.prepend(calenderSpan);
calenderDiv.prepend(calenderIcn);

moreDiv1.prepend(accountDiv);
moreDiv1.prepend(themesDiv);
moreDiv1.prepend(emotionsDiv);
moreDiv1.prepend(calenderDiv);


//more2
var moreDiv2 = document.createElement("div");
moreDiv2.classList.add("more-screen2");


var openchatDiv = document.createElement("div");
openchatDiv.classList.add("openchat")

var openchatIcn = document.createElement("i");
openchatIcn.classList.add("far");
openchatIcn.classList.add("fa-comments");
openchatIcn.classList.add("fa-2x");

var openchatSpan = document.createElement("p");
openchatSpan.innerHTML = "openchat";


var driveDiv = document.createElement("div");
driveDiv.classList.add("drive")

var driveIcn = document.createElement("i");
driveIcn.classList.add("fas");
driveIcn.classList.add("fa-download");
driveIcn.classList.add("fa-2x");

var driveSpan = document.createElement("p");
driveSpan.innerHTML = "drive";


var gameDiv = document.createElement("div");
gameDiv.classList.add("game")

var gameIcn = document.createElement("i");
gameIcn.classList.add("fas");
gameIcn.classList.add("fa-gamepad");
gameIcn.classList.add("fa-2x");

var gameSpan = document.createElement("p");
gameSpan.innerHTML = "game";


var giftDiv = document.createElement("div");
giftDiv.classList.add("gift")

var giftIcn = document.createElement("i");
giftIcn.classList.add("fas");
giftIcn.classList.add("fa-gift");
giftIcn.classList.add("fa-2x");

var giftSpan = document.createElement("p");
giftSpan.innerHTML = "gift";


giftDiv.prepend(giftSpan);
giftDiv.prepend(giftIcn);

gameDiv.prepend(gameSpan);
gameDiv.prepend(gameIcn);

driveDiv.prepend(driveSpan);
driveDiv.prepend(driveIcn);

openchatDiv.prepend(openchatSpan);
openchatDiv.prepend(openchatIcn);

moreDiv2.prepend(giftDiv);
moreDiv2.prepend(gameDiv);
moreDiv2.prepend(driveDiv);
moreDiv2.prepend(openchatDiv);

moreDiv.prepend(moreDiv2);
moreDiv.prepend(moreDiv1);


// suggestions

var suggestionDiv = document.createElement("div");
suggestionDiv.classList.add("more-suggestions");

var weathersSpan = document.createElement("span");
weathersSpan.innerHTML = "Sowon-Ajou Univ";

var weatherDiv = document.createElement("div");
weatherDiv.classList.add("weather");

var weatherIcn = document.createElement("i");
weatherIcn.classList.add("fas");
weatherIcn.classList.add("fa-cloud");
weatherIcn.classList.add("fa-2x");

var temparatureSpan = document.createElement("h1");
temparatureSpan.innerHTML = "29°";

var subtextDiv = document.createElement("div");
subtextDiv.classList.add("subtext");

var todayTempSpan = document.createElement("span");
todayTempSpan.innerHTML = "어제보다 3°C 낮아요";

var dustDiv = document.createElement("div");
dustDiv.classList.add("dust");

var dustSpan1 = document.createElement("span");
dustSpan1.innerHTML = "초미세먼지";

var dustSpan2 = document.createElement("span");
dustSpan2.innerHTML = "보통";

var locationDiv = document.createElement("div");
locationDiv.classList.add("location");

var locationIcn = document.createElement("i");
locationIcn.classList.add("fas");
locationIcn.classList.add("fa-location-arrow");



locationDiv.prepend(locationIcn);

dustDiv.prepend(dustSpan2);
dustDiv.prepend(dustSpan1);

subtextDiv.prepend(dustDiv);
subtextDiv.prepend(todayTempSpan);

weatherDiv.prepend(locationDiv);
weatherDiv.prepend(subtextDiv);
weatherDiv.prepend(temparatureSpan);
weatherDiv.prepend(weatherIcn);


suggestionDiv.prepend(weatherDiv);
suggestionDiv.prepend(weathersSpan);

// 네비

var navDiv = document.createElement("div");
navDiv.classList.add("nav");

var profileIc = document.createElement("i");
profileIc.classList.add("fas");
profileIc.classList.add("fa-user");
profileIc.classList.add("fa-2x");

var chatIc = document.createElement("i");
chatIc.classList.add("fas");
chatIc.classList.add("fa-comment");
chatIc.classList.add("fa-2x");

var searchIc = document.createElement("i");
searchIc.classList.add("fas");
searchIc.classList.add("fa-search");
searchIc.classList.add("fa-2x");

var sesettingIc = document.createElement("button");
sesettingIc.classList.add("fas");
sesettingIc.classList.add("fa-ellipsis-h");
sesettingIc.classList.add("fa-2x");

navDiv.prepend(sesettingIc);
navDiv.prepend(searchIc);
navDiv.prepend(chatIc);
navDiv.prepend(profileIc);


$.prepend(suggestionDiv);
$.prepend(moreDiv);
$.prepend(navDiv);
$.prepend(mainDiv);
$.prepend(screenDiv);
$.prepend(statusDiv);



const onclick = () => {
    var onclik = document.createElement("a");
    window.open("index03.html") ;
}

sesettingIc.addEventListener("click", onclick);
