let currentCalculation = '';

function appendOperation(operation) {
    if (operation === 'DEL') {
        currentCalculation = '';
        updateDisplay();
        return;
    }

    if (operation === 'result') {
        calculateResult();
        return;
    }

    currentCalculation += operation;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('resultArea').innerHTML = currentCalculation || '0';
}

function calculateResult() {
    try {
        
        let calculation = currentCalculation.replace(/x/g, '*');
        
        let result = eval(calculation);
        
        result = Math.round(result * 100000000) / 100000000;
        
        currentCalculation = result.toString();
        updateDisplay();
    } catch (error) {
        currentCalculation = 'Error';
        updateDisplay();
        setTimeout(() => {
            currentCalculation = '';
            updateDisplay();
        }, 1500);
    }
}