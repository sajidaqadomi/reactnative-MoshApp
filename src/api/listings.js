import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const addListings = (listing, updateProgress) => {
    // console.log(listing.images, 'images')
    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('categoryId', listing.category.value)
    data.append('description', listing.description)

    listing.images.forEach((image, index) => {
        // console.log(image)
        data.append("images", {
            name: "image" + index + ".jpg",
            type: "image/jpeg",
            uri: image,
        })
    }

    );

    if (listing.location)
        data.append("location", JSON.stringify(listing.location));


    return client.post(endpoint, data, {
        onUploadProgress: (progress) => updateProgress(progress.loaded / progress.total)
    });

}
export default {
    addListings,
    getListings,
};