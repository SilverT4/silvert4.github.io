
const theHateList = [ "DJT", "TSLA", "META", "RBLX", "SPOT", "MSFT", "AAPL", "GOOG", "DIS", "AMD", "INTC", "NVDA", "NFLX", "TGT", "WMT", "SNAP", "WBA", "MCD", "WEN", "KO", "PEP", "T", "SBUX", "PINS", "7974.T", "NTDOY", "UBI.PA", "EA", "SAVEQ", "WBD", "7832.T" ];
const theNameList = [ "Donald Trump", "Tesla", "Meta", "Roblox", "Spotify", "Microsoft", "Apple", "Google", "Disney", "AMD", "Intel", "Nvidia", "Netflix", "Target", "Walmart", "Snap", "Walgreens", "McDonald's", "Wendy's", "Coca-Cola", "Pepsi", "AT&T", "Starbucks", "Pinterest", "Nintendo (Tokyo Stock Exchange)", "Nintendo (US OTC)", "Ubisoft", "Electronic Arts", "Spirit Airlines", "Warner Bros", "BANDAI NAMCO Holdings" ];
const theHateReasons = {
    DJT: "He's a rapist, a racist, and a liar. He's a convicted felon who should not be in the oval office.",
    TSLA: "Mainly because of Elon Musk, but I couldn't find a better symbol. Also the Cybertruck is terrible.",
    META: "fuck facebook i ain't givin' em any more of my data",
    RBLX: "don't really hate roblox, just wanna see their stonks fall when the users hate a decision they make 💀",
    SPOT: "again don't really hate spotify (but i wanna break from the ads)",
    MSFT: "windows 11.",
    AAPL: "phones are too expensive even if they're good",
    GOOG: "monopolised the search industry lets bsfr",
    DIS: "the mouse would take me down if i said it",
    AMD: "ehh i use an AMD processor so i don't really have that much hate for them. i just added them for the bit",
    INTC: "ditto, for the bit.",
    NVDA: "AI",
    NFLX: "too expensive, doesn't let you share passwords to save money anymore. piracy has moral justifications sometimes",
    TGT: "they rolled back DEI policies because of the trump administration. ew.",
    WMT: "ditto.",
    SNAP: "too pushy with the ads and they lock too many good features behind a paywall. did you know they sell physical snapchat+ gift cards?? i didn't.",
    WBA: "i dunno i dont have anything against them, its just for the bit.",
    MCD: "good food but still not healthy. i love mcdonalds so this is for the bit",
    WEN: "oh come on you expect me to hate a fast food chain that trolls their fans on twitter? nahh this is for the bit bro",
    KO: "i am an equal opportunity hater when it comes to the soda war",
    PEP: "ditto",
    T: "why isn't this t-mobile's symbol? lmao anyway AT&T is kinda bad",
    PINS: "too hard to find good things that aren't constantly reposted",
    "7974.T": "nintendo is cool and all but the nintendo ninjas are insane. emulation isn't piracy u fuckwads",
    NTDOY: "read 7974.T",
    "UBI.PA": "ubisoft is terrible. they make the same game over and over again and they don't even try to hide it.",
    EA: "insert unoriginal joke about EA here",
    SAVEQ: "sure spirit is cheap but they should make their inflight wifi free. also the seats are kinda cramped"
};
// i dont need a "love" list, this is for hating
function populateHateTable() {
    const lastUpdated = 1745443861.577712;
    const lastUpdatedDate = new Date(lastUpdated * 1000).toLocaleString("en-US", { timeZone: "America/New_York" });
    const hateTable = document.getElementById("thehate");
    const timeSpan = document.getElementById("updateTime");
    timeSpan.textContent = lastUpdatedDate;
    // Add a header row with two columns: Symbol and Name
    const headerRow = document.createElement("tr");
    const symbolHeader = document.createElement("th");
    symbolHeader.textContent = "Symbol";
    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Company Name";
    const reasonHeader = document.createElement("th");
    reasonHeader.textContent = "Reason for Hate";
    headerRow.appendChild(symbolHeader);
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(reasonHeader);
    hateTable.appendChild(headerRow);

    // Populate the table with symbols and names
    theHateList.forEach((symbol, index) => {
        const row = document.createElement("tr");

        // Symbol cell
        const symbolCell = document.createElement("td");
        symbolCell.textContent = symbol;
        row.appendChild(symbolCell);

        // Name cell
        const nameCell = document.createElement("td");
        nameCell.textContent = theNameList[index];
        row.appendChild(nameCell);

        // Reason cell
        const reasonCell = document.createElement("td");
        reasonCell.textContent = theHateReasons[symbol] || "for the bit";
        row.appendChild(reasonCell);

        hateTable.appendChild(row);
    });

}
document.addEventListener("DOMContentLoaded", populateHateTable);
