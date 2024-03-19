/* // Function to create a new iframe and add a plot
function addPlot(selectedValue) {
    // Create a new iframe element
    var newIframe = document.createElement('iframe');
    newIframe.style.border = 'none';
    newIframe.style.width = '100%';
    newIframe.style.height = '400px';

    // Set the src attribute of the new iframe based on the selected option
    if (selectedValue === 'Budget') {
        newIframe.src = '../graphs/htmlfiles/Category1/3relation_years/year_budget.html';
    } else if (selectedValue === 'Rating') {
        newIframe.src = '../graphs/htmlfiles/Category1/3relation_years/year_rating.html';
    } else if (selectedValue === 'Revenue') {
        newIframe.src = '../graphs/htmlfiles/Category1/3relation_years/year_revenue.html';
    } else if (selectedValue === 'Votes') {
        newIframe.src = '../graphs/htmlfiles/Category1/3relation_years/year_votes.html';
    }

    // Append the new iframe to the parent element
    var parentElement = document.getElementById('output_graph_cat1_relation');
    parentElement.appendChild(newIframe);
}

// Function to update the iframe source based on the selected option
function updateIframe(selectedValue) {
    // Call the addPlot function to add a new plot
    addPlot(selectedValue);
}
 */



