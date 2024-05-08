class Color {
    constructor(red, green, blue, alpha) {
      this.red = red;
      this.green = green;
      this.blue = blue;
      this.alpha = alpha;
    }
  
    getRed() {
      return this.red;
    }
  
    getGreen() {
      return this.green;
    }
  
    getBlue() {
      return this.blue;
    }
  
    getAlpha() {
      return this.alpha;
    }
  
    setRed(red) {
      this.red = red;
    }
  
    setGreen(green) {
      this.green = green;
    }
  
    setBlue(blue) {
      this.blue = blue;
    }
  
    setAlpha(alpha) {
      this.alpha = alpha;
    }
  
    getColorString() {
      return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }

  }

  function parseColor(rgbString) {
    var numbers = rgbaString.match(/[\d.]+/g);
    var rgbaArray = numbers.map(Number);
    return new Color(rgbaArray[0], rgbaArray[1], rgbaArray[2],rgbaArray[3]);
  }
  
  // Example usage
  let color = new Color(255, 0, 0, 1); // Red color with alpha 1
  console.log(color.getColorString()); // Output: rgba(255, 0, 0, 1)
  
  // Update alpha value
  color.setAlpha(0.5);
  console.log(color.getColorString()); // Output: rgba(255, 0, 0, 0.5)
  