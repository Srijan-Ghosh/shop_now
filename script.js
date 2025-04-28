document.querySelector(".fa-magnifying-glass").addEventListener("click", function() {
    let searchBox = document.querySelector(".search-box");

    
    searchBox.style.display = "inline-block"; // Make it visible first

    setTimeout(() => {  // Small delay to ensure the transition works
        searchBox.style.opacity = "1"; 
        searchBox.style.width = "300px"; // Gradually expands width
    });
    
    document.querySelector(".fa-magnifying-glass").style.display = "none";
});
