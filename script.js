function editPhotos() {
    alert("Photo editing feature coming soon!");
}

function browseContent() {
    alert("Explore amazing content! Feature launching soon.");
}

async function requestStorageAccess() {
    try {
        const dirHandle = await window.showDirectoryPicker();
        const photoList = document.getElementById("photoList");
        photoList.innerHTML = "<h3>Loading Photos...</h3>";

        for await (const entry of dirHandle.values()) {
            if (entry.kind === "file" && entry.name.match(/\.(jpg|jpeg|png|gif)$/i)) {
                const file = await entry.getFile();
                const imgURL = URL.createObjectURL(file);
                const imgElement = document.createElement("img");
                imgElement.src = imgURL;
                photoList.appendChild(imgElement);
            }
        }

        alert("Storage access granted!");
    } catch (error) {
        alert("Access denied or not supported on this browser.");
    }
}
