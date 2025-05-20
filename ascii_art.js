const asciiFistPointing = `
           ___________    ____
    ______/   \\__//   \\__/____\\
  _/   \\_/  :           //____\\\\
 /|      :  :  ..      /        \\
| |     ::     ::      \\        /
| |     :|     ||     \\ \\______/
| |     ||     ||      |\\  /  |
 \\|     ||     ||      |   / | \\
  |     ||     ||      |  / /_\\ \\
  | ___ || ___ ||      | /  /    \\
   \\_-_/  \\_-_/ | ____ |/__/      \\
                _\\_--_/    \\      /
               /____             /
              /     \\           /
              \\______\\_________/
`;

const asciiFistRockLeft = `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`;

const asciiFistRockRight = `
     _______
    (___    '---
    (_____)     
    (_____)     
    (____)      
    (____)__.---
`;

const asciiFistPaperLeft = `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`;

const asciiFistPaperRight = `
        _______    
  _____(___    '--- 
 (______           
(_______           
 (_______          
   (__________.----
`;

const asciiFistScissorsLeft = `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`;

const asciiFistScissorsRight = `
       ______    
  ____(___   '---
 (______         
(__________      
     (____)      
      (___)__.---
`;

const asciiVS = `
__     ______   
\\ \\   / / ___|  
 \\ \\ / /\\___ \\  
  \\ V /  ___) | 
   \\_/  |____(_)
`;

const asciiHuman = `
 _   _ _   _ __  __    _    _   _ 
| | | | | | |  \\/  |  / \\  | \\ | |
| |_| | | | | |\\/| | / _ \\ |  \\| |
|  _  | |_| | |  | |/ ___ \\| |\\  |
|_| |_|\\___/|_|  |_/_/   \\_\\_| \\_|
`;

const asciiCom = `
  ____ ___  __  __ ____  _   _ _____ _____ ____  
 / ___/ _ \\|  \\/  |  _ \\| | | |_   _| ____|  _ \\ 
| |  | | | | |\\/| | |_) | | | | | | |  _| | |_) |
| |__| |_| | |  | |  __/| |_| | | | | |___|  _ < 
 \\____\\___/|_|  |_|_|    \\___/  |_| |_____|_| \\_\\
`;

const asciiWin = `
__   _____  _   _  __        _____ _   _ _ 
\\ \\ / / _ \\| | | | \\ \\      / /_ _| \\ | | |
 \\ V / | | | | | |  \\ \\ /\\ / / | ||  \\| | |
  | || |_| | |_| |   \\ V  V /  | || |\\  |_|
  |_| \\___/ \\___/     \\_/\\_/  |___|_| \\_(_)
`;

const asciiLose = `
__   _____  _   _   _     ___  ____  _____ _ 
\\ \\ / / _ \\| | | | | |   / _ \\/ ___|| ____| |
 \\ V / | | | | | | | |  | | | \\___ \\|  _| | |
  | || |_| | |_| | | |__| |_| |___) | |___|_|
  |_| \\___/ \\___/  |_____\\___/|____/|_____(_)
`;

const asciiDraw = `
 ____  ____      ___        ___ 
|  _ \\|  _ \\    / \\ \\      / / |
| | | | |_) |  / _ \\ \\ /\\ / /| |
| |_| |  _ <  / ___ \\ V  V / |_|
|____/|_| \\_\\/_/   \\_\\_/\\_/  (_)
`;

/* console.log("=== Rock (Left) ===");
console.log(asciiFistRockLeft);

console.log("=== Rock (Right) ===");
console.log(asciiFistRockRight);

console.log("=== Paper (Left) ===");
console.log(asciiFistPaperLeft);

console.log("=== Paper (Right) ===");
console.log(asciiFistPaperRight);

console.log("=== Scissors (Left) ===");
console.log(asciiFistScissorsLeft);

console.log("=== Scissors (Right) ===");
console.log(asciiFistScissorsRight);

console.log("=== VS ===");
console.log(asciiVS);

console.log("=== Human ===");
console.log(asciiHuman);

console.log("=== Computer ===");
console.log(asciiCom);

console.log("=== WIN ===");
console.log(asciiWin);

console.log("=== LOSE ===");
console.log(asciiLose);

console.log("=== DRAW ===");
console.log(asciiDraw); */

const asciiNumbers = {
    0: `
  ___  
 / _ \\ 
| | | |
| | | |
| |_| |
 \\___/ 
`,
    1: `
 __ 
/_ |
 | |
 | |
 | |
 |_|
`,
    2: `
 ___  
|__ \\ 
   ) |
  / / 
 / /_ 
|____|
`,
    3: `
 ____  
|___ \\ 
  __) |
 |__ < 
 ___) |
|____/ 
`,
    4: `
 _  _   
| || |  
| || |_ 
|__   _|
   | |  
   |_|  
`,
    5: `
 _____ 
| ____|
| |__  
|___ \\ 
 ___) |
|____/ 
`,
    6: `
   __  
  / /  
 / /_  
| '_ \\ 
| (_) |
 \\___/ 
`,
    7: `
 ______ 
|____  |
    / / 
   / /  
  / /   
 /_/    
`,
    8: `
  ___  
 / _ \\ 
| (_) |
 > _ < 
| (_) |
 \\___/ 
`,
    9: `
  ___  
 / _ \\ 
| (_) |
 \\__, |
   / / 
  /_/  
`,
    "-": `
       
  ___  
 |___| 
       
`,
    ":": `
       
  _    
 (_)   
       
  _    
 (_)   
`,
};



/* const charsToPrint = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    ":",
];

for (const char of charsToPrint) {
    console.log(`=== ${char} ===`);
    console.log(asciiNumbers[char]);
} */

function asciiFrame(content, label = "") {
  const contentLines = content.trim().split("\n");
  const labelLine = label ? ` ${label.trim()} ` : "";
  const contentWidth = Math.max(...contentLines.map(line => line.length));
  const frameWidth = Math.max(contentWidth, labelLine.length);

  const topBorder = `╔${"═".repeat(frameWidth)}╗`;
  const labelRow = label
    ? `║${labelLine.padEnd(frameWidth, " ")}║`
    : null;
  const separator = `╠${"═".repeat(frameWidth)}╣`;

  const framedLines = contentLines.map(
    line => `║${line.padEnd(frameWidth, " ")}║`
  );

  const bottomBorder = `╚${"═".repeat(frameWidth)}╝`;

  const fullFrame = [
    topBorder,
    ...(labelRow ? [labelRow, separator] : []),
    ...framedLines,
    bottomBorder,
  ];

  return fullFrame.join("\n");
}



/* function asciiFrameSideBySide(leftContent, leftLabel, rightContent, rightLabel, gap = 4) {
  const leftLines = leftContent.trimEnd().split('\n');
  const rightLines = rightContent.trimEnd().split('\n');

  // Get max width per side
  const leftWidth = Math.max(...leftLines.map(l => l.length));
  const rightWidth = Math.max(...rightLines.map(l => l.length));

  // Normalize height
  const maxHeight = Math.max(leftLines.length, rightLines.length);
  while (leftLines.length < maxHeight) leftLines.push(' '.repeat(leftWidth));
  while (rightLines.length < maxHeight) rightLines.push(' '.repeat(rightWidth));

  // Pad all lines to width
  for (let i = 0; i < maxHeight; i++) {
    leftLines[i] = leftLines[i].padEnd(leftWidth, ' ');
    rightLines[i] = rightLines[i].padEnd(rightWidth, ' ');
  }

  const gapSpaces = ' '.repeat(gap);
  const mysteriousSpace = 3;

  // Prepare labels padded to widths
  const leftLabelPadded = ` ${leftLabel} `.padEnd(leftWidth, ' ');
  const rightLabelPadded = ` ${rightLabel} `.padEnd(rightWidth, ' ');

  const frameWidth = leftWidth + gap + rightWidth;

  const topBorder = '╔' + '═'.repeat(frameWidth + mysteriousSpace ) + '╗';
  const labelRow = '║' + leftLabelPadded + (gapSpaces + ' '.repeat(mysteriousSpace - 1)) + rightLabelPadded + '║';
  const separatorRow = '╠' + '═'.repeat(frameWidth + mysteriousSpace) + '╣';

  const contentRows = leftLines.map((leftLine, i) =>
    '║' + leftLine + gapSpaces + 'vs.' + rightLines[i] + '║'
  );

  const bottomBorder = '╚' + '═'.repeat(frameWidth + mysteriousSpace) + '╝';

  return [topBorder, labelRow, separatorRow, ...contentRows, bottomBorder].join('\n');
} */

function asciiFrameSideBySide(leftContent, leftLabel, rightContent, rightLabel, totalWidth = 45, gap = 4) {
  // Fixed total inner width (excluding borders)
  const innerWidth = totalWidth;

  // Split and trim input lines
  const leftLines = leftContent.trimEnd().split('\n');
  const rightLines = rightContent.trimEnd().split('\n');

  // Reserve gap spaces between left and right content
  const gapSpaces = ' '.repeat(gap);
  const contentWidth = innerWidth - gap; // total width minus gap spaces

  // Divide width roughly evenly between left and right
  const leftWidth = Math.floor(contentWidth / 2);
  const rightWidth = contentWidth - leftWidth;

  // Normalize heights
  const maxHeight = Math.max(leftLines.length, rightLines.length);
  while (leftLines.length < maxHeight) leftLines.push(' '.repeat(leftWidth));
  while (rightLines.length < maxHeight) rightLines.push(' '.repeat(rightWidth));

  // Pad or truncate each line to fit the fixed widths
  for (let i = 0; i < maxHeight; i++) {
    leftLines[i] = leftLines[i].padEnd(leftWidth, ' ').slice(0, leftWidth);
    rightLines[i] = rightLines[i].padEnd(rightWidth, ' ').slice(0, rightWidth);
  }

  // Prepare labels (truncate or pad)
  const leftLabelPadded = ` ${leftLabel} `.padEnd(leftWidth, ' ').slice(0, leftWidth);
  const rightLabelPadded = ` ${rightLabel} `.padEnd(rightWidth, ' ').slice(0, rightWidth);

  // Compose frame borders
  const topBorder = '╔' + '═'.repeat(innerWidth) + '╗';
  const labelRow = '║' + leftLabelPadded + gapSpaces + rightLabelPadded + '║';
  const separatorRow = '╠' + '═'.repeat(innerWidth) + '╣';

  // Compose content rows
  const contentRows = leftLines.map((leftLine, i) =>
    '║' + leftLine + gapSpaces + rightLines[i] + '║'
  );

  const bottomBorder = '╚' + '═'.repeat(innerWidth) + '╝';

  // Join all rows
  return [topBorder, labelRow, separatorRow, ...contentRows, bottomBorder].join('\n');
}


console.log(asciiFrameSideBySide(asciiFistRockLeft, "YOU PICKED", asciiFistRockRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistPaperLeft, "YOU PICKED", asciiFistRockRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistScissorsLeft, "YOU PICKED", asciiFistRockRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistRockLeft, "YOU PICKED", asciiFistPaperRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistPaperLeft, "YOU PICKED", asciiFistPaperRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistScissorsLeft, "YOU PICKED", asciiFistPaperRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistRockLeft, "YOU PICKED", asciiFistScissorsRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistPaperLeft, "YOU PICKED", asciiFistScissorsRight, "COMPUTER PICKED"));
console.log(asciiFrameSideBySide(asciiFistScissorsLeft, "YOU PICKED", asciiFistScissorsRight, "COMPUTER PICKED"));

console.log(asciiFrame(asciiWin, "RESULT"));
console.log(asciiFrame(asciiLose, "RESULT"));
console.log(asciiFrame(asciiDraw, "RESULT"));
