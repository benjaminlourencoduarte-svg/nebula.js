# nebula.js
nebula.js is a javascript library
HOW TO USE:
- unzip the file
- get your html script ready
- add the script to the unzipped nebula file
- add <script src="./dist/nebula.js"></script> to your script at the "body" section of your html
-  here are some examples of use
  ## USAGE
  nebulajs.fadeIn(box, 1500);
  
  setTimeout(() => nebulajs.moveRot(box, { x: 200, y: 100, rotation: 180, duration: 2000 }), 2000);
  
nebulajs.fadeIn(circle, 1500);

nebulajs.fadeIn(star, 1500);

    // Circle pulses repeatedly
    setInterval(() => nebulajs.pulse(circle, 500, 1.4), 1000);

    // Star does a supernova effect after 5 seconds
    setTimeout(() => nebulajs.supernova(star, 2000), 5000);

    // Circle orbits around after 7 seconds
    setTimeout(() => nebulajs.orbit(circle, 150, 150, 100, 5), 7000);
