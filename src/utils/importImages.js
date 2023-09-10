function getImgUrl(directory, fileName, ext){
    const url = new URL(`../assets/${directory}/${fileName}.${ext}`, import.meta.url).href;
    return url;
}

export default getImgUrl;