//status bar

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


// settings

var settingsDiv = document.createElement("div");
settingsDiv.classList.add("settings-bar");

var arrowIc = document.createElement("span");
arrowIc.innerHTML =  "<"

var settingsSpan = document.createElement("span");
settingsSpan.innerHTML = "Settings";

var searchIc = document.createElement("i");
searchIc.classList.add("fas");
searchIc.classList.add("fa-search");
searchIc.classList.add("fa-2x");

settingsDiv.append(arrowIc);
settingsDiv.append(settingsSpan);
settingsDiv.append(searchIc);

// list

var listDiv = document.createElement("div");
listDiv.classList.add("list");

var noticeDiv = document.createElement("div");
noticeDiv.classList.add("noticeDiv");

var noticeIc = document.createElement("i");
noticeIc.classList.add("fas");
noticeIc.classList.add("fa-bullhorn");
noticeIc.classList.add("fa-2x");

var noticeSpan = document.createElement("span");
noticeSpan.innerHTML = "Notices";

var kakaoDiv = document.createElement("div");
kakaoDiv.classList.add("kakaoDiv");

var labIc = document.createElement("i");
labIc.classList.add("fas");
labIc.classList.add("fa-flask");
labIc.classList.add("fa-2x");

var labSpan = document.createElement("span");
labSpan.innerHTML = "KaKao Lab";

var versionDiv = document.createElement("div");
versionDiv.classList.add("versionDiv");

var versionIc = document.createElement("i");
versionIc.classList.add("fas");
versionIc.classList.add("fa-comment");
versionIc.classList.add("fa-2x");

var versionSpan = document.createElement("span");
versionSpan.innerHTML = "Version";

var version_subSpan = document.createElement("span");
version_subSpan.innerHTML = "Latest Version";


noticeDiv.append(noticeIc);
noticeDiv.append(noticeSpan);

kakaoDiv.append(labIc);
kakaoDiv.append(labSpan);

versionDiv.append(versionIc);
versionDiv.append(versionSpan);
versionDiv.append(version_subSpan);

listDiv.append(noticeDiv);
listDiv.append(kakaoDiv);
listDiv.append(versionDiv);

$.append(statusDiv);
$.append(settingsDiv);
$.append(listDiv);
$.append(navDiv);








