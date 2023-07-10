//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    let hasParkingFilter = parking[0].checked
    let hasImmediateFilter = immediate[0].checked
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms) &&
        (!hasParkingFilter || a.parking) &&
        (!hasImmediateFilter || a.immediate)
    )

    return relevantApts; 
}