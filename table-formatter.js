// Simplified browser-compatible table formatter based on console-table-printer
class TableFormatter {
    constructor() {
        this.rows = [];
        this.columns = [];
    }

    // Add data rows
    addRows(data) {
        if (!Array.isArray(data)) {
            throw new Error('Data must be an array');
        }
        
        this.rows = data;
        
        // Extract column names from first row
        if (data.length > 0) {
            this.columns = Object.keys(data[0]);
        }
        
        return this;
    }

    // Calculate column widths
    calculateColumnWidths() {
        const widths = {};
        
        // Initialize with column header widths
        this.columns.forEach(col => {
            widths[col] = col.length;
        });
        
        // Check data widths
        this.rows.forEach(row => {
            this.columns.forEach(col => {
                const cellValue = String(row[col] || '');
                if (cellValue.length > widths[col]) {
                    widths[col] = cellValue.length;
                }
            });
        });
        
        // Add padding
        Object.keys(widths).forEach(col => {
            widths[col] += 2; // Add padding
        });
        
        return widths;
    }

    // Create horizontal border
    createBorder(widths, style = 'middle') {
        let left, middle, right, junction;
        
        switch (style) {
            case 'top':
                left = '┌'; middle = '─'; right = '┐'; junction = '┬';
                break;
            case 'bottom':
                left = '└'; middle = '─'; right = '┘'; junction = '┴';
                break;
            case 'middle':
            default:
                left = '├'; middle = '─'; right = '┤'; junction = '┼';
                break;
        }
        
        let border = left;
        this.columns.forEach((col, index) => {
            border += middle.repeat(widths[col]);
            if (index < this.columns.length - 1) {
                border += junction;
            }
        });
        border += right;
        
        return border;
    }

    // Create a row string
    createRowString(rowData, widths, isHeader = false) {
        let rowString = '│';
        
        this.columns.forEach(col => {
            const cellValue = String(rowData[col] || '');
            const padding = widths[col] - cellValue.length;
            const leftPad = Math.floor(padding / 2);
            const rightPad = padding - leftPad;
            
            rowString += ' '.repeat(leftPad) + cellValue + ' '.repeat(rightPad) + '│';
        });
        
        return rowString;
    }

    // Render the complete table
    render() {
        if (this.rows.length === 0) {
            return 'No data to display';
        }
        
        const widths = this.calculateColumnWidths();
        let output = [];
        
        // Top border
        output.push(this.createBorder(widths, 'top'));
        
        // Header row
        const headerRow = {};
        this.columns.forEach(col => {
            headerRow[col] = col;
        });
        output.push(this.createRowString(headerRow, widths, true));
        
        // Header separator
        output.push(this.createBorder(widths, 'middle'));
        
        // Data rows
        this.rows.forEach((row, index) => {
            output.push(this.createRowString(row, widths));
            
            // Add separator between rows (optional)
            if (index < this.rows.length - 1) {
                // output.push(this.createBorder(widths, 'middle'));
            }
        });
        
        // Bottom border
        output.push(this.createBorder(widths, 'bottom'));
        
        return output.join('\n');
    }
}

// Simple function similar to printTable from console-table-printer
function formatTable(data) {
    const table = new TableFormatter();
    table.addRows(data);
    return table.render();
}