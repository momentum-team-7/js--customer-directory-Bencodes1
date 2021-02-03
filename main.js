console.log("main check")

const container = document.querySelector(".customers")

const monthlist = [
    { numeric: 01, name: 'Jan' },
    { numeric: 02, name: 'Feb' },
    { numeric: 03, name: 'Mar' },
    { numeric: 04, name: 'Apr' },
    { numeric: 05, name: 'May' },
    { numeric: 06, name: 'Jun' },
    { numeric: 07, name: 'Jul' },
    { numeric: 08, name: 'Aug' },
    { numeric: 09, name: 'Sep' },
    { numeric: 10, name: 'Oct' },
    { numeric: 11, name: 'Nov' },
    { numeric: 12, name: 'Dec' },
]

function monthName (num) {
    const tempobj = monthlist[num-1]
    console.log(tempobj)
    return tempobj.name
}

for (let customer of customers){

    console.log(customer.name.first)

    // create a dom element for customer image
    const customerImg = document.createElement("img")
    // set src attribute
    customerImg.src = customer.picture.large
    // insert it into the DOM
    container.appendChild(customerImg)

    const customerHeader = document.createElement("h3")
    customerHeader.innerText = customer.name.first + " " + customer.name.last
    // This step inserts it into the dom
    container.appendChild(customerHeader)

    const customerEmail = document.createElement("h4")
    customerEmail.innerText = customer.email
    container.appendChild(customerEmail)
    
    const customerAddress1 = document.createElement("p")
    customerAddress1.innerText = customer.location.street.number + " " + customer.location.street.name 
    container.appendChild(customerAddress1)

    const customerAddress2 = document.createElement("p")
    customerAddress2.innerText = customer.location.city + ", " + nameToAbbr(customer.location.state) + " " + customer.location.postcode
    container.appendChild(customerAddress2)

    let customerBday = document.createElement("p")
    let yearString = customer.dob.date.substring(0,4)
    let parsedYear = parseInt(yearString, 10)
    let monthString = customer.dob.date.substring(5,7)
    let parsedMonth = parseInt(monthString, 10)
    let dayString = customer.dob.date.substring(8,10)
    let parsedDay = parseInt(dayString, 10)
    let monthAbb = monthName(parsedMonth)


    customerBday.innerText = "DOB: " + monthAbb + " " + parsedDay +  ", " + parsedYear
    container.appendChild(customerBday)

    customerSince = document.createElement("p")
    yearString = customer.registered.date.substring(0,4)
    parsedYear = parseInt(yearString, 10)
    monthString = customer.registered.date.substring(5,7)
    parsedMonth = parseInt(monthString, 10)
    dayString = customer.registered.date.substring(8,10)
    parsedDay = parseInt(dayString, 10)
    monthAbb = monthName(parsedMonth)


    customerSince.innerText = "Customer Since: " + monthAbb + " " + parsedDay +  ", " + parsedYear
    container.appendChild(customerSince)



}
