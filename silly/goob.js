// silly thing
let userAgent = window.navigator.userAgent, platform = window.navigator.platform;

function getBowser() {
    let bowser = "Fish Factory";
    
    if (userAgent.indexOf('Firefox') > -1) {
        bowser = 'Mozilla Firefox';
    } else if (userAgent.indexOf('SamsungBrowser') > -1) {
        bowser = 'Samsung Internet';
    } else if ((userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) && userAgent.indexOf('Nintendo Wii;') == -1) { // Uses the semicolon to differentiate between Wii and Wii U (and Opera on a PC)
        bowser = 'Opera';
    } else if (userAgent.indexOf('Trident') > -1) {
        bowser = 'Microsoft Internet Explorer';
    } else if (userAgent.indexOf('Edge') > -1) {
        bowser = 'Microsoft Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
        bowser = 'Google Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
        bowser = 'Apple Safari';
    } else if (userAgent.indexOf('NintendoBrowser') > -1) {
        if (userAgent.indexOf('Nintendo 3DS') > -1) {
            bowser = 'Nintendo 3DS Browser';
        } else if (userAgent.indexOf('Nintendo Switch') > -1) {
            bowser = userAgent.indexOf('WifiWebAuthApplet') > -1 ? "Nintendo Switch Captive Portal" : "Nintendo Switch Browser Applet";
        }
    } else if (userAgent.indexOf('Nintendo Wii') > -1) {
        // gotta differentiate between Internet Channel on the Wii and the Wii U's browser here
        if (userAgent.indexOf('WiiU') > -1) {
            bowser = "Wii U Internet Browser";
        } else {
            bowser = "Wii Internet Channel";
        }
    }
    return bowser;
}
window.onload = function () {
    document.getElementById('agent').textContent = userAgent;
    document.getElementById('os').textContent = platform;
    document.getElementById('browser').textContent = getBowser();
};