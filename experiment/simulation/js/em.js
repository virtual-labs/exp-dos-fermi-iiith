document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".v-collapsible");

    collapsibles.forEach((collapsible) => {
        collapsible.addEventListener("click", () => {
            const content = collapsible.nextElementSibling;
            collapsible.classList.toggle("is-active");

            if (content.style.maxHeight) {
                // Close the collapsible
                content.style.maxHeight = null;
            } else {
                // Open the collapsible
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
const rightItems = document.querySelectorAll('.right-column li');
const svg = document.getElementById('lines');
let selectedLeft = null;
let selectedRight = null;
const matches = new Map();

// Create the two plots using Chart.js
const plot1 = document.getElementById('plot1').getContext('2d');
const plot2 = document.getElementById('plot2').getContext('2d');

// Plot y = 2x^2
// Plot y = 2x^2
new Chart(plot1, {
    type: 'line',
    data: {
      labels: Array.from({ length: 21 }, (_, i) => i - 10), // x values from -10 to 10
      datasets: [{
        label: 'y = 2x²',
        data: Array.from({ length: 21 }, (_, i) => 2 * Math.pow(i - 10, 2)), // y = 2x^2
        borderColor: '#4caf50',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: false,
      scales: {
        y: {
          min: 0, // Minimum y-value
          max: 200, // Maximum y-value
          title: {
            display: true,
            text: 'y-axis'
          }
        },
        x: {
          title: {
            display: true,
            text: 'x-axis'
          }
        }
      }
    }
  });
  
  // Plot y = 0.5x^2
  new Chart(plot2, {
    type: 'line',
    data: {
      labels: Array.from({ length: 21 }, (_, i) => i - 10), // x values from -10 to 10
      datasets: [{
        label: 'y = 0.5x²',
        data: Array.from({ length: 21 }, (_, i) => 5*Math.pow(i - 10, 2)), // y = 0.5x^2
        borderColor: '#2196f3',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: false,
      scales: {
        y: {
          min: 0, // Minimum y-value
          max: 200, // Maximum y-value
          title: {
            display: true,
            text: 'y-axis'
          }
        },
        x: {
          title: {
            display: true,
            text: 'x-axis'
          }
        }
      }
    }
  });
  

// Add event listeners for selecting graphs and right-column items
document.getElementById('plot1').addEventListener('click', () => selectLeft('1'));
document.getElementById('plot2').addEventListener('click', () => selectLeft('2'));

rightItems.forEach(item => {
  item.addEventListener('click', () => {
    clearSelections('right');
    item.classList.add('selected');
    selectedRight = item;
    checkMatch();
  });
});

function selectLeft(id) {
  clearSelections('left');
  selectedLeft = id;
  document.getElementById(`plot${id}`).style.borderColor = '#4caf50';
}

function clearSelections(column) {
  if (column === 'left') {
    document.querySelectorAll('canvas').forEach(plot => (plot.style.borderColor = '#ddd'));
  } else {
    rightItems.forEach(item => item.classList.remove('selected'));
  }
}

function checkMatch() {
  if (selectedLeft && selectedRight) {
    const leftId = selectedLeft;
    const rightId = selectedRight.dataset.id;

    matches.set(leftId, rightId);

    drawLine(document.getElementById(`plot${leftId}`), selectedRight);

    document.getElementById(`plot${leftId}`).style.borderColor = '#aaa';
    selectedRight.classList.add('matched');

    selectedLeft = null;
    selectedRight = null;
  }
}

function drawLine(leftPlot, rightItem) {
  const leftRect = leftPlot.getBoundingClientRect();
  const rightRect = rightItem.getBoundingClientRect();
  const containerRect = svg.getBoundingClientRect();

  const x1 = leftRect.right - containerRect.left;
  const y1 = leftRect.top + leftRect.height / 2 - containerRect.top;
  const x2 = rightRect.left - containerRect.left;
  const y2 = rightRect.top + rightRect.height / 2 - containerRect.top;

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', '#4caf50');
  line.setAttribute('stroke-width', '2');

  svg.appendChild(line);
}

document.getElementById('submit').addEventListener('click', () => {
  const correctAnswers = { 1: '2', 2: '1' }; // Correct mappings
  let score = 0;

  for (const [key, value] of matches) {
    if (correctAnswers[key] === value) {
      score++;
    }
  }

  document.getElementById('result').innerText = `You got ${score} out of ${Object.keys(correctAnswers).length} correct!`;
});

document.getElementById('prevPageBtn').addEventListener('click', () => {
  window.location.href = 'simulation.html'; // Replace with the actual path of your next page
});