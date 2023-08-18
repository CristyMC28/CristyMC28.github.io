document.addEventListener("DOMContentLoaded", function () {
    const filterElements = document.querySelector(".categories");
    const galleryItems = document.querySelectorAll(".gallery-card");
    filterElements.addEventListener("click",(event)=>{
        if(event.target.classList.contains("filter-item")){
            filterElements.querySelector(".active").classList.remove("active")
            event.target.classList.add("active");
            const filterValue = event.target.getAttribute("data-filter");
            galleryItems.forEach(item=>{
                if(item.classList.contains(filterValue) || filterValue == "all" ){
                    item.classList.remove("hide")
                    item.classList.add("show")
                }
                else{
                    item.classList.add("hide")
                    item.classList.remove("show")
                }
            }
                )
        }

        
    })

});