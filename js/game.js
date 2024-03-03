// Define the number of apples for each button
const appleCounts = [1, 2, 3,4,5];

// Function to generate apple buttons dynamically
function generateAppleButtons() {
  const appleMenu = document.getElementById('apple-menu');

  appleCounts.forEach(count => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-transparent', 'apple-button');
    button.setAttribute('onclick', `addApples(${count})`);

    for (let i = 0; i < count; i++) {
      const appleImg = document.createElement('img');
      appleImg.src = 'images/apple.webp';
      appleImg.alt = 'Apple';
      appleImg.classList.add('draggable');
      button.appendChild(appleImg);
    }

    appleMenu.appendChild(button);
  });
}

// Call the function to generate apple buttons
generateAppleButtons();

document.getElementById("apple").addEventListener("click", function() {
    addApples(1); // Add two apples directly when the image is clicked
  });
  
  function addApples(count) {
    const basket = document.getElementById('basket');
    const appleCount = document.getElementById('apple-count');
    const apple = document.getElementById('apple');
    
    let applesInBasket = parseInt(appleCount.textContent) || 0;
    applesInBasket += count;
    appleCount.textContent = `${applesInBasket} apple${applesInBasket !== 1 ? 's' : ''}`;
  
    // Create cloned apples and add them to the basket
    for (let i = 0; i < count; i++) {
    //   const clonedApple = apple.cloneNode(true);
    //   clonedApple.classList.add('animated-apple');
    //   basket.appendChild(clonedApple);
    }
  }
  
  function eatApples() {
    const basket = document.getElementById('basket');
    const appleCountElement = document.getElementById('apple-count');
    const eatApplesInput = document.getElementById('eat-apples-input');
    const eatAmount = parseInt(eatApplesInput.value);
  
    let currentAppleCount = parseInt(appleCountElement.textContent) || 0;
  
    // Check if the input is a valid number and subtract apples accordingly
    if (!isNaN(eatAmount) && eatAmount > 0 && currentAppleCount >= eatAmount) {
      currentAppleCount -= eatAmount;
      appleCountElement.textContent = `${currentAppleCount} apple${currentAppleCount !== 1 ? 's' : ''}`;
      // Don't clear the input field
    } else {
      alert('Invalid input or insufficient apples in the basket.');
    }
  }
  