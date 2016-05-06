//1
function getNumbers(string) {
  var array = [];
  for (var i = 0; i < string.length ; i++){
    var numb = parseInt(string[i]);
      if(!isNaN(numb)) array.push(numb);
    }
    return array;
}

//2
function getNumericSum(string) {
  var all = 0;
  for (var i = 0; i < string.length ; i++){
    var numb = parseInt(string[i]);
      if (!isNaN(numb)) all += numb;
    }
    return all;
}

//3 
function getQuanOfUniqueElements(string) {
        var a = 0;
        var b = [];
        for (i = 0; i < string.length; i++) {
            if (b.indexOf(string[i]) == -1) {
                b.push(string[i]);
            }
            a = b.length;
        } return a;

    }
//4

function getQuanOfUniqueCharacters(string) {
    var all = 0;
      string.split("").sort().forEach(function(item,i,array){
        if(array[i] != array[i + 1]) all++;
    });
    return all;
};
//5

function getPensionersName(string) {
    var Pensioners_Name = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i].age >= 65) {
            Pensioners_Name = (string[i].name);
        }
    }
    return Pensioners_Name;
}
