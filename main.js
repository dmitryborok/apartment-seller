
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

// Handlebars.registerHelper('notempty', function (obj) {
//     return (obj.apartments.length > 0);
// });

const renderApts = function (data) {
    $("#results").empty()
    console.log(data)     //array of apartments to render

    const source = $("#apartment-template").html();
    const template = Handlebars.compile(source);
    let newHTML = template({apartments: data});
    $("#results").append(newHTML);
}

renderApts(apartments) //renders apartments when page loads