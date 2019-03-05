var AVGTeamJohn = (89 + 120 + 103)/3;
//var AVGTeamMike = (116 + 94 + 123)/3;
//var AVGTeamMary = (97 + 134 +105)/3;

var AVGTeamMike = (116 + 94 + 123)/3;
var AVGTeamMary = (116 + 94 + 123)/3;

console.log('AVGTeamJohn: '+AVGTeamJohn + ' AVGTeamMike: '+AVGTeamMike+' AVGTeamMary: '+AVGTeamMary);

if (AVGTeamJohn > AVGTeamMike && AVGTeamJohn > AVGTeamMary){
    console.log('Team John is the winner with average: ' + AVGTeamJohn);
} else if(AVGTeamMike > AVGTeamJohn && AVGTeamMike > AVGTeamMary) {
    console.log('Team Mike is the winner with average: ' + AVGTeamMike);
} else if(AVGTeamMary > AVGTeamJohn && AVGTeamMary > AVGTeamMike){
    console.log('Team Mary is the winner with average: ' + AVGTeamMary);
} else {
    console.log('Some teams have the same average: ' + AVGTeamJohn);
};
