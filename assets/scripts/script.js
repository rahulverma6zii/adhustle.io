let serviceCardRow=document.querySelector(".service-card-row");

let services=[
    {
        symbol:"S",
        meaning:"Support",
        description:"Our specialists take the accountability of all hard work including swapping offers, caps allocation, fluctuating performance. "

    },
    {
        symbol:"L",
        meaning:"Smartlink",
        description:"Our unique traffic optimization algorithm boosts conversion rates and profits while outperforming competitors."
        
    },
    {
        symbol:"D",
        meaning:"Data",
        description:"Advanced data gathering and analysis based on GEO, Device, Isp, User preferences."
        
    },
    {
        symbol:"C",
        meaning:"Capacity",
        description:"Quality traffic including high fill rate through diversified publishers."
        
    },
    {
        symbol:"U",
        meaning:"Usability",
        description:"We build our solutions fast, reliable and user friendly. Complete integration with all tracking platforms."
        
    },
    {
        symbol:"A",
        meaning:"Accuracy",
        description:"Setting security rules, key attributes, conversion rate thresholds and overcaping."
        
    }
]
services.forEach((service)=>{

    serviceCardRow.innerHTML+=`<div class="col-12 col-lg-4 col-md-2">
    <div class="card text-center p-3">
        <h2 class="col-2 bg-warning border border-3  border-white    rounded-circle m-auto">${service.symbol}</h2>
        <div class="card-body">
            <h5 class="card-title">${service.meaning}</h5>
            <p class="card-text">${service.description}</p>
        </div>
    </div>
</div>`
})
