// jQuery Area
$(document).ready(function() {
    // Progress
    $(window).scroll(function() {
        let getScrollTop = $(this).scrollTop(),
            getScrollHeight = document.documentElement.scrollHeight,
            getClientHeight = document.documentElement.clientHeight;
        let getCalcVal = Math.floor(getScrollTop / (getScrollHeight - getClientHeight) * 100);
        $(".progress-container").css("background", `conic-gradient( purple ${getCalcVal}%, #eee ${getCalcVal}%)`);
        $(".progress-value").text(getCalcVal + "%");
    });

    // LightBox2 Library
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        "albumLabel": ""
    });
});

// JS area
// Header Section

// start header img auto
const getHeader = document.querySelector("header");
function* genFun() {
    let index = 8;
    while (true) {
        if (index > 13) index = 8;else yield index++;
    }
}

let getGen = genFun();

getHeader.style.backgroundImage = `url(./assets/img/banner/banner${getGen.next().value}.jpg)`;

function autoLoad() {
    getHeader.style.backgroundImage = `url(./assets/img/banner/banner${getGen.next().value}.jpg)`;
}

setInterval(autoLoad,3000);
// end header img auto

// start dropdown area
let getDropdownlists = document.querySelectorAll(".dropdown-list");
const getSearch = document.getElementById("search");

document.addEventListener('click', e => {
    const isDropdownbutton = e.target.matches("[data-dropdown-button]") || e.target.parentElement.matches("[data-dropdown-button]");
    const currentdropdown = e.target.closest("[data-dropdown]");
    if (isDropdownbutton) {
        currentdropdown.classList.toggle("active");
        getDropdownlists.forEach(getDropdownlist => getDropdownlist.style.display = "block");
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropDown => {
        // Method(1) will popup one only dropdown
        if (dropDown === currentdropdown) return;
        // Method(2) will popup related dropdown and can popup multiple dropdowns
        // if (currentdropdown) return;
        dropDown.classList.remove("active");
    });
});

// start dropdown filter

getSearch.addEventListener("keyup", (e) => {
    const getval = e.target.value.toLowerCase();
    getDropdownlists.forEach(getDropdownlist => {
        if (getDropdownlist.textContent.toLowerCase().indexOf(getval)) {
            getDropdownlist.style.display = "none";
        } else {
            getDropdownlist.style.display = "block";
        }
    });
});
// end Dropdown Filter
// start DropDownlist Close after clicked
getDropdownlists.forEach(getDropdownlist => {
    getDropdownlist.onclick = (e) => {
        getSearch.value = "";
        e.target.closest("[data-dropdown]").classList.remove("active");
    };
});
// End DropDownlist Close after clicked
// end dropdown area
// End Header Section

// Start Testimonials Section

const testimonialsContent = [
    {
        name: "Rich Star Restaurant",
        position: "Our Outlet",
        test: "This restaurant has a fine reputation."
    },

    {
        name: "48 Sky Bar Cafe",
        position: "Our Partner",
        test: "This cafe is a rendezvous for writers and artists."
    },

    {
        name: "Chaung Thar SPA",
        position: "Our Business",
        test: "Guests at the health Chaung Thar spa receive a range of beauty and fitness treatments."
    },

    {
        name: "52 Beach Hotel",
        position: "Our Branch",
        test: "The hotel has exclusive access to the beach."
    },

    {
        name: "Cool Land Swimming Pool",
        position: "Our Client",
        test: "The swimming pool is drained and cleaned every week"
    }
];

let idx = 0;

function wordsChange() {
    const {name, position, test} = testimonialsContent[idx];

    document.getElementById("companyHeader").innerHTML = name;
    document.getElementById("companyRole").textContent = position;
    document.getElementById("role-info").innerText = test;

    if (idx >= testimonialsContent.length -1) {
        idx = 0;
    } else {
        idx++;
    }
}
wordsChange();
setInterval(wordsChange, 10000);

// End Testimonials Section

// Start Properties Section
const getPropertyLists = document.querySelectorAll(".propertylists"),
    getFilters = document.querySelectorAll(".filters");

getPropertyLists.forEach(getPropertyList => {
    getPropertyList.addEventListener("click", e => {
        getPropertyLists.forEach(getPropertyList => getPropertyList.classList.remove("active"));
        e.target.classList.add("active");
        let getContent = e.target.textContent.toLowerCase();

        for (let i = 0; i < getFilters.length; i++) {

            if (getContent === "all") {
                getFilters[i].style.display = "block";
            } else if(getFilters[i].classList.contains(getContent)) {
                getFilters[i].style.display = "block";
            } else {
                getFilters[i].style.display = "none";
            }

        }
    });
});

getPropertyLists[0].click();
// End Properties Section

// Start Contact Section

function tab(evt, link, color) {

    const getTabpanes = document.querySelectorAll(".tab-pane"),
        getTablinks = document.querySelectorAll(".tab-links");

    for (let i = 0; i < getTabpanes.length; i++) {
        getTabpanes[i].style.display = "none";
        getTablinks[i].style.backgroundColor = "";
    }

    document.getElementById(link).style.display = "block";
    document.getElementById(link).style.backgroundColor = color;
    evt.currentTarget.style.backgroundColor = color;

}

document.getElementById("autoClick").click();

// End Contact Section

// Start autoYear Section
document.getElementById("autoYear").innerText = new Date().getUTCFullYear();
// End autoYear Section

// Start ChatBox
function closeBox(evt) {

    evt.target.closest("[data-dropdown]").classList.remove("active");

}
//End ChatBox