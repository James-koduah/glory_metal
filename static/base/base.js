function preload_all_images(images){
    function preload_image(im_url) {
        let img = new Image();
        img.src = im_url;
    }
    for (let img of images){
        preload_image(img)
    }
}


let images = [
    '/images/structural1.jpg',
    '/images/fence2.jpg',
    '/images/balcony35.jpg',
    '/images/stairs2.webp'
]

preload_all_images(images)