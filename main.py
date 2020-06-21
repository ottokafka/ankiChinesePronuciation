import pyperclip

# todo how can I get multiple words and prepare sound files


#  paste the word (Note: paste will come from the; cmd + c)
paste = pyperclip.paste()
# lowercase everything
low = paste.lower()

aWord1 = []
pinyinNumber = []

# loop through the string; x i a n g - then push to an array
for letter in low:

    # if not ā or ē append all the normal letter to array
    if letter != "ā" and letter != "á" and letter != "ǎ" and letter != "à" and letter != "ē" and letter != "é" and letter != "ě" and letter != "è" and letter != "ī" and letter != "í" and letter != "ǐ" and letter != "ì" and letter != "ō" and letter != "ó" and letter != "ǒ" and letter != "ò" and letter != "ū" and letter != "ú" and letter != "ǔ" and letter != "ù":
        aWord1.append(letter)

    # change the letter to a normal letter
    if letter == "ā" or "á" or "ǎ" or "à" or letter == "ē" or "é" or "ě" or "è" or letter == "ī" or "í" or "ǐ" or "ì" or letter == "ō" or letter == "ó" or letter == "ǒ" or letter == "ò" or letter == "ū" or "ú" or "ǔ" or "ù":

        # append a number such as 1 2 3 4 if ā append 1
        if letter == "ā" or letter == "ē" or letter == "ī" or letter == "ō" or letter == "ū":
            pinyinNumber.append("1")
        if letter == "á" or letter == "é" or letter == "í" or letter == "ó" or letter == "ú":
            pinyinNumber.append("2")
        if letter == "ǎ" or letter == "ě" or letter == "ǐ" or letter == "ǒ" or letter == "ǔ":
            pinyinNumber.append("3")
        if letter == "à" or letter == "è" or letter == "ì" or letter == "ò" or letter == "ù":
            pinyinNumber.append("4")

# if a letter is ā é change it to a or e and append it to array
        # -------------------pinyin tone 1 -----------
        if letter == "ā":
            letter = "a"
            aWord1.append(letter)
        if letter == "ē":
            letter = "e"
            aWord1.append(letter)
        if letter == "ī":
            letter = "i"
            aWord1.append(letter)
        if letter == "ō":
            letter = "o"
            aWord1.append(letter)
        if letter == "ū":
            letter = "u"
            aWord1.append(letter)
        # -------------------pinyin tone 2 -----------
        if letter == "á":
            letter = "a"
            aWord1.append(letter)
        if letter == "é":
            letter = "e"
            aWord1.append(letter)
        if letter == "í":
            letter = "i"
            aWord1.append(letter)
        if letter == "ó":
            letter = "o"
            aWord1.append(letter)
        if letter == "ú":
            letter = "u"
            aWord1.append(letter)
        # -------------------pinyin tone 3 -----------
        if letter == "ǎ":
            letter = "a"
            aWord1.append(letter)
        if letter == "ě":
            letter = "e"
            aWord1.append(letter)
        if letter == "ǐ":
            letter = "i"
            aWord1.append(letter)
        if letter == "ǒ":
            letter = "o"
            aWord1.append(letter)
        if letter == "ǔ":
            letter = "u"
            aWord1.append(letter)
        # -------------------pinyin tone 4 -----------
        if letter == "à":
            letter = "a"
            aWord1.append(letter)
        if letter == "è":
            letter = "e"
            aWord1.append(letter)
        if letter == "ì":
            letter = "i"
            aWord1.append(letter)
        if letter == "ò":
            letter = "o"
            aWord1.append(letter)
        if letter == "ù":
            letter = "u"
            aWord1.append(letter)


# if word does not have a spacial tone make append 5
if pinyinNumber == []:
    pinyinNumber.append("5")
    num = pinyinNumber[0]
    #print(num)
else:
    num = pinyinNumber[0]
    #print(num)

    # join the array [a,p,p,l,e] ex: apple
a1 = "".join(aWord1)
    # add anki sound style [sound:zou1.mp3]
a1 = "[sound:" + a1 + num + ".mp3]"
print(a1)
copyIt = pyperclip.copy(a1)
