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

// Define the function
function myFunction(xi) {
  return 0.5 * Math.sin(xi) + 0.5 * Math.cos(xi) + Math.sin(2 * xi) + 2 * Math.sin(3.2 * xi);
}

// Generate data points
const dataPoints = [];
const labels = [];
for (let xi = 0; xi <= 4.3; xi += 0.1) {
  labels.push(xi.toFixed(1));
  dataPoints.push(myFunction(xi));
}

// Select the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create the Chart
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Probability Function',
      data: dataPoints,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: { display: true, text: 'Function Plot' }
    },
    scales: {
      x: { title: { display: true, text: 'x (range: 0 to 4.3)' } },
      y: { min: -4, max: 4, title: { display: true, text: 'y' } }
    }
  }
});

// Draggable Dot Logic
function makeDraggable(dotId) {
  const dot = document.getElementById(dotId);
  let offsetX, offsetY;

  dot.addEventListener('mousedown', startDrag);
  dot.addEventListener('touchstart', startDrag);

  function startDrag(e) {
    const isTouch = e.type === 'touchstart';
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    offsetX = clientX - dot.offsetLeft;
    offsetY = clientY - dot.offsetTop;
    dot.style.cursor = 'grabbing';

    document.addEventListener(isTouch ? 'touchmove' : 'mousemove', moveAt);
    document.addEventListener(isTouch ? 'touchend' : 'mouseup', stopDrag);
  }

  function moveAt(e) {
    const isTouch = e.type === 'touchmove';
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    dot.style.left = `${clientX - offsetX}px`;
    dot.style.top = `${clientY - offsetY}px`;
  }

  function stopDrag(e) {
    dot.style.cursor = 'grab';
    document.removeEventListener('mousemove', moveAt);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', moveAt);
    document.removeEventListener('touchend', stopDrag);
  }
}

// Apply draggable functionality
makeDraggable('dot1');
makeDraggable('dot2');
makeDraggable('dot3');

// Submit Button Logic
document.getElementById('submitBtn').addEventListener('click', () => {
  const canvas = document.getElementById('myChart');
  const canvasRect = canvas.getBoundingClientRect();
  const outputMessage = document.getElementById('outputMessage');

  const dots = ['dot1', 'dot2', 'dot3'].map(dotId => document.getElementById(dotId));

  let valid = true;
  const results = [];

  dots.forEach(dot => {
    const dotRect = dot.getBoundingClientRect();
    const xCanvas = dotRect.left - canvasRect.left;
    const yCanvas = dotRect.top - canvasRect.top;

    if (
      xCanvas < 0 ||
      xCanvas > canvasRect.width ||
      yCanvas < 0 ||
      yCanvas > canvasRect.height
    ) {
      valid = false;
      results.push(`${dot.id}: Outside plot`);
    } else {
      const xValue = (xCanvas / canvasRect.width) * 4.3;
      const yValue = ((canvasRect.height - yCanvas) / canvasRect.height) * (Math.max(...dataPoints) - Math.min(...dataPoints)) + Math.min(...dataPoints);
      if(yValue.toFixed(2)<0.25 || yValue.toFixed(2) > 1.2)
      {
        valid = false
        results.push(`${dot.id}: Outside y range`);
      }
      else
      {
        results.push(`${dot.id}: X=${xValue.toFixed(2)}, Y=${yValue.toFixed(2)}`)
      }
    }
  });

  if (valid) {
    outputMessage.style.color = 'green';
    outputMessage.textContent = `Valid: ${results.join(', ')}`;
  } else {
    outputMessage.style.color = 'red';
    outputMessage.textContent = `Invalid: ${results.join(', ')}`;
  }
});
document.getElementById('nextPageBtn').addEventListener('click', () => {
  window.location.href = 'effective_mass.html'; // Replace with the actual path of your next page
});

    
       // Check if the dot is outside the plot bounds
//      if (
//        dotRect.left < plotRect.left ||
//        dotRect.right > plotRect.right ||
//        dotRect.top < plotRect.top ||
//        dotRect.bottom > plotRect.bottom
//      ) {
//        errorMessages.push(`Dot ${index + 1} is outside the plot bounds.`);
//        allConditionsMet = false;
//        return;
//      }
//
//      const x =
//      ((dotRect.left + dotRect.width / 2 - plotRect.left) / plotRect.width) *
//        (rangeEnd - rangeStart) +
//      rangeStart;
//    const yScreen =
//      ((dotRect.top + dotRect.height / 2 - plotRect.top) / plotRect.height) *
//        2 -
//      1; // -1 to 1 range
//    const yGraph = -yScreen; // Flip y-axis for graph coordinates
//
//    // Check if the y value is within the valid range
//    if (yGraph < -1 || yGraph > 1) {
//      errorMessages.push(
//        `Dot ${index + 1} at x = ${x.toFixed(
//          2
//        )} is out of the valid y-range (-1 < y < 1).`
//      );
//      allConditionsMet = false;
//      return;
//    }
//
//
//      //// Check if the dot is on the corresponding function value at x
//      //const expectedY = myFunction(x);
//      //if (Math.abs(yGraph - expectedY) > 0.5) {
//      //  // Allowing a small error margin
//      //  errorMessages.push(
//      //    `Dot ${index + 1} at x = ${x.toFixed(
//      //      2
//      //    )} is not placed correctly on the function curve (expected y = ${expectedY.toFixed(
//      //      2
//      //    )}).`
//      //  );
//      //  allConditionsMet = false;
//      //  return;
//      //}
//
//      // Check if dots are placed on distinct positions
//      if (
//        positions.some(
//          (pos) =>
//            Math.abs(pos.x - x) < 0.1 && Math.abs(pos.y - yGraph) < 0.1
//        )
//      ) {
//        errorMessages.push(
//          `Dot ${index + 1} at (${x.toFixed(2)}, ${yGraph.toFixed(
//            2
//          )}) is overlapping with another dot.`
//        );
//        allConditionsMet = false;
//        return;
//      }
//
//      positions.push({ x, y: yGraph });
//    });
//
//    return { allConditionsMet, errorMessages };
//  }

  // Display the result message based on the condition check
//  const resultMessage = document.getElementById('resultMessage');
//  const { allConditionsMet, errorMessages } = checkConditions();
//  if (allConditionsMet) {
//    resultMessage.textContent = "Correct!";
//    resultMessage.style.color = "green";
//  } else {
//    resultMessage.innerHTML = errorMessages.join('<br>');
//    resultMessage.style.color = "red";
//  }
//});
//