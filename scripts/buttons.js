document.addEventListener("DOMContentLoaded", function () {
    function populateLinks(blockId, links) {
        const block = document.getElementById(blockId);
        if (!block || !Array.isArray(links)) return;

        links.forEach(link => {
            if (!link.position || !link.name || !link.icon || !link.link) return;
            
            const linkElement = document.createElement("a");
            linkElement.href = link.link;
            linkElement.className = "linkItem";
            linkElement.target = "_blank";
            linkElement.style.gridColumn = link.position;
            
            const imgElement = document.createElement("img");
            imgElement.src = `assets/link_icons/${link.icon}`;
            imgElement.alt = link.name;
            
            const textElement = document.createElement("span");
            textElement.textContent = link.name;
            
            linkElement.appendChild(imgElement);
            linkElement.appendChild(textElement);
            block.appendChild(linkElement);
        });
    }

    populateLinks("linkBlock-1", CONFIG.firstLinkBlock);
    populateLinks("linkBlock-2", CONFIG.secondLinkBlock);
    populateLinks("linkBlock-3", CONFIG.thirdLinkBlock);
});
