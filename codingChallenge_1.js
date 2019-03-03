var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, bmiMarkHigher;

//Input mass values
massJohn = prompt('mass John? ');
massMark = prompt('mass Mark? ');
heightJohn = prompt('height John? ');
heightMark = prompt('heightMark? ');

/*
bmi calculation
bmi = mass /(height*height)
*/

//bmi calculation
bmiJohn = massJohn / (heightJohn*heightJohn);
bmiMark = massMark / (heightMark*heightMark);

//bmi Mark higher calcultion
bmiMarkHigher = (bmiMark > bmiJohn);

alert('Mark\'s bmi (' + bmiMark + ') is higher than John\'s (' + bmiJohn + ') ' + bmiMarkHigher);
