document.addEventListener('DOMContentLoaded', function() {
    const jsonInput = document.getElementById('jsonInput');
    const formatBtn = document.getElementById('formatBtn');
    const clearBtn = document.getElementById('clearBtn');
    const output = document.getElementById('output');
    const example1 = document.getElementById('example1');
    const example2 = document.getElementById('example2');

    // Example data
    const examples = {
        simple: [
            { name: "John", age: 30, city: "New York" },
            { name: "Jane", age: 25, city: "Boston" },
            { name: "Bob", age: 35, city: "Chicago" }
        ],
        complex: [
            { id: 1, product: "Laptop", price: 999.99, category: "Electronics", stock: 15 },
            { id: 2, product: "Coffee Mug", price: 12.50, category: "Kitchen", stock: 50 },
            { id: 3, product: "Desk Chair", price: 199.00, category: "Furniture", stock: 8 },
            { id: 4, product: "Smartphone", price: 599.99, category: "Electronics", stock: 25 }
        ]
    };

    // Format button click handler
    formatBtn.addEventListener('click', function() {
        const jsonText = jsonInput.value.trim();
        
        if (!jsonText) {
            showError('Please enter some JSON data');
            return;
        }

        try {
            // Parse JSON
            const data = JSON.parse(jsonText);
            
            // Validate that it's an array
            if (!Array.isArray(data)) {
                showError('JSON data must be an array of objects');
                return;
            }
            
            if (data.length === 0) {
                showError('Array cannot be empty');
                return;
            }
            
            // Check if all items are objects
            if (!data.every(item => typeof item === 'object' && item !== null && !Array.isArray(item))) {
                showError('All array items must be objects');
                return;
            }
            
            // Format the table
            const formattedTable = formatTable(data);
            showOutput(formattedTable);
            
        } catch (error) {
            if (error instanceof SyntaxError) {
                showError('Invalid JSON format: ' + error.message);
            } else {
                showError('Error: ' + error.message);
            }
        }
    });

    // Clear button click handler
    clearBtn.addEventListener('click', function() {
        jsonInput.value = '';
        output.innerHTML = '';
        output.className = 'output';
    });

    // Example links
    example1.addEventListener('click', function(e) {
        e.preventDefault();
        jsonInput.value = JSON.stringify(examples.simple, null, 2);
    });

    example2.addEventListener('click', function(e) {
        e.preventDefault();
        jsonInput.value = JSON.stringify(examples.complex, null, 2);
    });

    // Helper functions
    function showOutput(text) {
        output.innerHTML = escapeHtml(text);
        output.className = 'output';
    }

    function showError(message) {
        output.innerHTML = `<div class="error">${escapeHtml(message)}</div>`;
        output.className = 'output';
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Allow Enter key to format (Ctrl+Enter or Cmd+Enter)
    jsonInput.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            formatBtn.click();
        }
    });
});