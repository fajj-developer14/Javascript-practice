async function makeTvSearchReq (title) {
    const config = {params: {q: title}};
    const resp = await axios.get("https://api.tvmaze.com/search/shows/", config);
    return resp.data;
}

const addTvShow = function (shows) {
    for (let show of shows) {   
        if (show.show.summary && show.show.image) { //if the summary and image of the show exits
            const showItem = document.createElement("li"); //creating the list element
            showItem.classList.add("showItem");
        
            const summary = document.createElement("p");
            summary.innerHTML = show.show.summary;
            
            const showImg = document.createElement("img");
            showImg.setAttribute("src", show.show.image.medium);
            
            showItem.append(summary, showImg);
            tvShowList.appendChild(showItem);
        }
    }
}
//Declarations
const tvForm = document.querySelector("#tvForm");
const tvInp = document.querySelector("#tvForm__inp");
const tvShowList = document.querySelector("#tvShowList");

tvForm.addEventListener("submit", async (evt) => {
    evt.preventDefault();
    const title = tvInp.value;
    
    if (tvShowList.children.length > 0) {
        for (let i = 0; i < tvShowList.children.length + i; i++) {
            tvShowList.firstChild.remove();
        }
    }


    try {
        if (title !== "") {
            const shows = await makeTvSearchReq(title); //gives back an array
            addTvShow(shows);
        }   
    }
    catch (e) {
        document.body.append("Show not found or currently unavailable :(");
        console.log(e);
    }
})
