var currentColor = "rgb(255,0,0)";
let paletteCounter = 0;

function savePalette() {
    var element1 = document.getElementById("first");
    const styles1 = window.getComputedStyle(element1);
    var color1 = styles1.getPropertyValue("background-color");
    var element2 = document.getElementById("second");
    const styles2 = window.getComputedStyle(element2);
    var color2 = styles2.getPropertyValue("background-color");
    var element3 = document.getElementById("third");
    const styles3 = window.getComputedStyle(element3);
    var color3 = styles3.getPropertyValue("background-color");
    var element4 = document.getElementById("fourth");
    const styles4 = window.getComputedStyle(element4);
    var color4 = styles4.getPropertyValue("background-color");
    var element5 = document.getElementById("fifth");
    const styles5 = window.getComputedStyle(element5);
    var color5 = styles5.getPropertyValue("background-color");

    console.log(color1, color2, color3, color4, color5);
    colors = [color1, color2, color3, color4, color5];
    createNewPalette(colors);
}

function createNewPalette(colors) {

    var parent = document.getElementById("palette");
    const newRow = document.createElement("div");
    newRow.className = "row pt-2";
    newRow.id = "palette-"+ paletteCounter;
    const button = document.createElement("button");
    button.className = "btn btn-light";

    button.textContent = "Remove"; // Set button text
    button.onclick = function() {
        deletePalette(newRow.id);
    };

    // Append the button to the newRow element
    

    for (var i = 0; i < 5; i++) {
        var col = document.createElement("div");
        col.className = "col colorBoxSmall";
        console.log(colors[i]);
        col.style.backgroundColor = colors[i];
        newRow.appendChild(col);
    }
    newRow.appendChild(button);
    
    //newCol.innerHTML = "<div class='col colorBox' id='first'></div><div class='col colorBox' id='second'></div><div class='col colorBox' id='third'></div><div class='col colorBox' id='fourth'></div><div class='col colorBox' id='fifth'></div>";
    parent.appendChild(newRow);

    paletteCounter++;
}

function deletePalette(idPalette) {
    console.log(idPalette);
    const elementToDelete = document.getElementById(idPalette);
    const parentNode = document.getElementById("palette");
    parentNode.removeChild(elementToDelete);
}

function changeColor(box) {
    var element;
    switch (box) {
        case 0:
            element = document.getElementById("first");
            break;
        case 1:
            element = document.getElementById("second");
            break;
        case 2:
            element = document.getElementById("third");
            break;
        case 3:
            element = document.getElementById("fourth");
            break;
        case 4:
            element = document.getElementById("fifth");
            break;
    }
    element.style.backgroundColor = getAlphaFromSlider();
}

function getColorFromSlider() {
    var slider = document.getElementById("colorPicker");
    var colorValue = slider.value;
    // red orange yellow green blue violet red
    // 1                  50              100

    // (255,0,0) 
    var red = 255;
    var blue = 0;
    var green = 0;
    var alpha = 1;
    
    // cervena --> zlta (255,0,0) -> (255,255,0)
    if (colorValue >= 0 & colorValue <= 25) {
        green = colorValue * (255 / 25);
    }
    // zlta --> zelena (255,255,0) -> (0,255,0)
    else if (colorValue > 25 & colorValue <= 50) {
        red = 255 - ((colorValue - 25) * (255 / 25));
        green = 255;
        blue = 0;
    }
    // zelena --> teal (0,255,0) -> (0,255,255) 
    else if (colorValue > 50 & colorValue <= 62) {
        red = 0;
        green = 255;
        blue = (colorValue - 50) * (255 / 13);
    }
    // teal - modra (0,255,255) -> (0,0,255)
    else if (colorValue > 62 & colorValue <= 75){
        red = 0;
        green = 255 - ((colorValue - 63) * (255 / 13));
        blue = 255;
    }
    // modra - fialova (0,0,255) -> (255,0,255)
    else if (colorValue > 75 & colorValue <= 88){
        red = (colorValue - 75) * (255 / 13);
        green = 0;
        blue = 255;
    }
    // fialova - cervena (255,0,255) -> (255,0,0)
    else {
        red = 255;
        green = 0;
        blue = 255-((colorValue - 88) * (255 / 13));
    }

    var rgbColor = "rgb("+red+","+green+","+blue+")"

    currentColor = rgbColor;
    updateHue(rgbColor);
    updateColor(rgbColor);
    updateAplha(rgbColor);
    return rgbColor;
}

function updateColor(color) {
    updateSaturationPicker(color);
    updateBrightnessPicker(color);
    updateAplhaPicker(color);
    updateFullColorPicker(color);
}

function updateSaturationPicker(currentRgb) {
    var saturationPicker = document.getElementById("saturationPicker");
    saturationPicker.style.backgroundImage = "linear-gradient(to right, white, "+ currentRgb + ")";
}

function updateBrightnessPicker(currentRgb) {
    var fullBrightnessPicker = document.getElementById("brightnessPicker");
    fullBrightnessPicker.style.backgroundImage = "linear-gradient(to right, black, " + currentRgb + ")";
}

function updateAplhaPicker(currentRgb) {
    var alphaPicker = document.getElementById("alphaPicker");
    alphaPicker.style.backgroundImage = "linear-gradient(to right, white, "+currentRgb + ")";
}

function updateFullColorPicker(currentRgb) {
    var fullScalePickerColor = document.getElementById("fullScalePickerColor");
    fullScalePickerColor.style.backgroundImage = "linear-gradient(to right, white, " + currentRgb + ")";
}

function updateHue(currentRgb) {
    var outputHue = document.getElementById("outputHue");
    outputHue.style.backgroundColor = currentRgb;
}

function updateSaturation(currentRgb) {
    var outputSaturation = document.getElementById("outputSaturation");
    outputSaturation.style.backgroundColor = currentRgb;
}

function updateBrightness(currentRgb) {
    var outputBrightness = document.getElementById("outputBrightness");
    outputBrightness.style.backgroundColor = currentRgb;
}

function updateAplha(currentRgb) {
    var outputAlpha = document.getElementById("outputAlpha");
    outputAlpha.style.backgroundColor = currentRgb;
}

function getAlphaFromSlider() {
    var slider = document.getElementById("alphaPicker");
    var alphaValue = slider.value/100;

    //var rgbColor = getColorFromSlider();
    var rgbColor = currentColor;
    var newColor = rgbColor.replace(')', ','+alphaValue+')');
    newColor = newColor.replace('rgb', 'rgba');

    updateAplha(newColor);
    return newColor;
}

function getSaturationFromSlider() {
    var slider = document.getElementById("saturationPicker");
    var saturationValue = slider.value;
    //var rgbColor = getColorFromSlider();
    var rgbColor = currentColor;
    
    var objColor = parseColor(rgbColor);

    let colors = rgbColor.match(/\d+/g);
    var red = colors[0];
    var green = colors[1];
    var blue = colors[2];

    //red = (((red+1)*((100-saturationValue)*2.55))-red)*(red/255);
    red = (red+1)*((100-saturationValue)*2.55);
    green = (green+1)*((100-saturationValue)*2.55);
    blue = (blue+1)*((100-saturationValue)*(2.55));

    objColor.setRed(red);
    objColor.setGreen(green);
    objColor.setBlue(blue);

    var newColor = objColor.getColorString();
    
    //var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    updateSaturation(newColor);
    return newColor;
}

function getBrightnessFromSlider() {
    var slider = document.getElementById("brightnessPicker");
    var brightnessValue = slider.value;
    var rgbColor = getColorFromSlider();
    //var rgbColor = currentColor;
    
    let colors = rgbColor.match(/\d+/g);
    var red = colors[0] - (255 - brightnessValue*2.5);
    var green = colors[1] - (255 - brightnessValue*2.5);
    var blue = colors[2] - (255 - brightnessValue*2.5);
    var alpha = 1;
    if (colors[3] != '255') {
        alpha = colors[3];
    }

    var newColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";

    updateBrightness(newColor);
    return newColor;
}
