


//  paste the w||d (Note: paste will come from the; cmd + c)
//paste = pyperclip.paste()
//var deletethis = "rú guǒ tā zài nǔ lì yī diǎn, jiù kě néng yǐ jīng chéng gōng le ba";




//var paste = userInput;
// lowercase everything

//var low = paste.toLowerCase();

//array.push(low)
//var splitItArr = low.split(' ')

var a1;
var anki;
var ankiArray = [];
var ankiOutput;
//for (var i = 0; i < splitItArr.length; i++) {anikMake(splitItArr[i])}






    document.getElementById("output").innerHTML = "<textarea id='pinyin'>" +"</textarea>"+
        "<button onclick='checkPinyin()'>" + "click" +"</button>";



function checkPinyin() {

    var userInput = document.getElementById("pinyin").value;

    userInput = userInput.toLowerCase()
     userInput = userInput.split(' ')


    for (var pinyin of userInput){
        //console.log(i);

        anikMake(pinyin)

    }
}




function anikMake(str) {
    var aWord = [];
    var pinyinNumber = [];
    var num;


// loop through the string; x i a n g - then push to an array
    for (var letter of str) {


        // if not ā || ē push all the n||mal letter to array
        if (letter != "ā" &&
            letter != "á"
            &&
            letter != "ǎ"
            &&
            letter != "à"
            &&
            letter != "ē"
            &&
            letter != "é"
            &&
            letter != "ě"
            &&
            letter != "è"
            &&
            letter != "ī"
            &&
            letter != "í"
            &&
            letter != "ǐ"
            &&
            letter != "ì"
            &&
            letter != "ō"
            &&
            letter != "ó"
            &&
            letter != "ǒ"
            &&
            letter != "ò"
            &&
            letter != "ū"
            &&
            letter != "ú"
            &&
            letter != "ǔ"
            &&
            letter != "ù") {
            aWord.push(letter)
            //console.log(aWord);
        }


        // change the letter to a normal letter
        if (letter == "ā" ||
            "á"
            ||
            "ǎ"
            ||
            "à"
            ||
            letter == "ē"
            ||
            "é"
            ||
            "ě"
            ||
            "è"
            ||
            letter == "ī"
            ||
            "í"
            ||
            "ǐ"
            ||
            "ì"
            ||
            letter == "ō"
            ||
            letter == "ó"
            ||
            letter == "ǒ"
            ||
            letter == "ò"
            ||
            letter == "ū"
            ||
            "ú"
            ||
            "ǔ"
            ||
            "ù") {

            if (letter == "ā" ||
                letter == "ē"
                ||
                letter == "ī"
                ||
                letter == "ō"
                ||
                letter == "ū") {
                pinyinNumber.push("1")
            }

            if (letter == "á" ||
                letter == "é"
                ||
                letter == "í"
                ||
                letter == "ó"
                ||
                letter == "ú") {
                pinyinNumber.push("2")
            }

            if (letter == "ǎ" ||
                letter == "ě"
                ||
                letter == "ǐ"
                ||
                letter == "ǒ"
                ||
                letter == "ǔ") {
                pinyinNumber.push("3")
            }

            if (letter == "à" ||
                letter == "è"
                ||
                letter == "ì"
                ||
                letter == "ò"
                ||
                letter == "ù") {
                pinyinNumber.push("4")
            }
        }

// push a number such as 1 2 3 4 if ā push 1





// if a letter is ā é change it to a || e && push it to array
        // -------------------pinyin tone 1 -----------
        if (letter == "ā") {
            letter = "a"
            aWord.push(letter)
        }

        if (letter == "ē") {
            letter = "e"
            aWord.push(letter)
        }

        if (letter == "ī") {
            letter = "i"
            aWord.push(letter)
        }
        if (letter == "ō") {
            letter = "o"
            aWord.push(letter)
        }
        if (letter == "ū") {
            letter = "u"
            aWord.push(letter)
        }

        // -------------------pinyin tone 2 -----------
        if (letter == "á") {
            letter = "a"
            aWord.push(letter)
        }

        if (letter == "é") {
            letter = "e";
            aWord.push(letter)
        }

        if (letter == "í") {
            letter = "i"
            aWord.push(letter)
        }

        if (letter == "ó") {
            letter = "o"
            aWord.push(letter)
        }

        if (letter == "ú") {
            letter = "u"
            aWord.push(letter)
        }

        // -------------------pinyin tone 3 -----------
        if (letter == "ǎ") {
            letter = "a"
            aWord.push(letter)
        }

        if (letter == "ě") {
            letter = "e"
            aWord.push(letter)
        }

        if (letter == "ǐ") {
            letter = "i"
            aWord.push(letter)
        }

        if (letter == "ǒ") {
            letter = "o"
            aWord.push(letter)
        }

        if (letter == "ǔ") {
            letter = "u"
            aWord.push(letter)
        }

        // -------------------pinyin tone 4 -----------
        if (letter == "à") {
            letter = "a"
            aWord.push(letter)
        }

        if (letter == "è") {
            letter = "e"
            aWord.push(letter)
        }

        if (letter == "ì") {
            letter = "i"
            aWord.push(letter)
        }

        if (letter == "ò") {
            letter = "o"
            aWord.push(letter)
        }

        if (letter == "ù") {
            letter = "u"
            aWord.push(letter)
        }



// if word does not have a spacial tone make push 5
        //console.log(pinyinNumber);


    }

// yī diǎn ni

    num = pinyinNumber[0];
    console.log(pinyinNumber);
    console.log(pinyinNumber.length);
    //num = pinyinNumber[0];
    //console.log(num);
    if (pinyinNumber.length === 0) {
        //console.log("no number inside");
           pinyinNumber.push("5");

        //console.log(num);
         num = pinyinNumber[0]
    }





    a1 = aWord.join();
    a1.replace(/\,/g, "");
    anki = a1.replace(/\,/g, "");
    //console.log("Bottom "+anki);
    // add anki sound style [sound:zou1.mp3]
    anki = "[sound:" + anki + num + ".mp3]";
    //console.log(aWord);

    console.log(anki);

ankiArray.push(anki);








    document.getElementById("output").innerHTML = "<textarea id='pinyin'>" +"</textarea>"+
        "<textarea id='ankiResult'>"+ ankiArray +"</textarea>"+ "<button onclick='checkPinyin()'>" + "click" +"</button>" + "<button onclick='reset()'>" + "Reset" +"</button>";

    //document.getElementById("output").innerHTML = "<textarea id='ankiResult'>"+ ankiArray +"</textarea>"

     ankiOutput = document.getElementById("ankiResult").value;

    //setClipboard(ankiOutput)
}





function setClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}



function reset() {
    ankiArray = []

    document.getElementById("output").innerHTML = "<textarea id='pinyin'>" +"</textarea>"+
        "<textarea id='ankiResult'>"+ ankiArray +"</textarea>"+ "<button onclick='checkPinyin()'>" + "click" +"</button>";


}






