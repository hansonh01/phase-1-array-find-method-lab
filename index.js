// code your solution here
function superbowlWin(record){
    let foundWins = record.find(record => record.result === "W");
    if (foundWins){
        return foundWins.year;
    }
    return undefined;
}