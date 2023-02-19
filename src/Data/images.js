function imageArr(arr1, arr2) {
    let arr = [];
    arr2.forEach((el) => {
      arr.push(arr1[el - 1]);
    });
    return arr;
  }


const initial = {
    original: [
        "./images/original/1.webp",
        "./images/original/2.webp",
        "./images/original/3.webp",
        "./images/original/4.webp",
        "./images/original/5.webp",
        "./images/original/6.webp",
        "./images/original/7.webp",
        "./images/original/8.webp",
        "./images/original/9.webp",
        "./images/original/10.webp",
        "./images/original/11.webp",
        "./images/original/12.webp",
        "./images/original/13.webp",
        "./images/original/14.webp",
        "./images/original/15.webp",
        "./images/original/16.webp",
        "./images/original/17.webp",
        "./images/original/18.webp",
        "./images/original/19.webp",
        "./images/original/20.webp",
        "./images/original/21.webp",
        "./images/original/22.webp",
        "./images/original/23.webp",
        "./images/original/24.webp",
        "./images/original/25.webp",
        "./images/original/26.webp",
        "./images/original/27.webp",
        "./images/original/28.webp",
        "./images/original/29.webp",
        "./images/original/30.webp",
        "./images/original/31.webp",
        "./images/original/32.webp",
        "./images/original/33.webp",
        "./images/original/34.webp",
        "./images/original/35.webp",
        "./images/original/36.webp",
        "./images/original/37.webp"
    ],
    compressed: [
        "./images/700w/1.webp",
        "./images/700w/2.webp",
        "./images/700w/3.webp",
        "./images/700w/4.webp",
        "./images/700w/5.webp",
        "./images/700w/6.webp",
        "./images/700w/7.webp",
        "./images/700w/8.webp",
        "./images/700w/9.webp",
        "./images/700w/10.webp",
        "./images/700w/11.webp",
        "./images/700w/12.webp",
        "./images/700w/13.webp",
        "./images/700w/14.webp",
        "./images/700w/15.webp",
        "./images/700w/16.webp",
        "./images/700w/17.webp",
        "./images/700w/18.webp",
        "./images/700w/19.webp",
        "./images/700w/20.webp",
        "./images/700w/21.webp",
        "./images/700w/22.webp",
        "./images/700w/23.webp",
        "./images/700w/24.webp",
        "./images/700w/25.webp",
        "./images/700w/26.webp",
        "./images/700w/27.webp",
        "./images/700w/28.webp",
        "./images/700w/29.webp",
        "./images/700w/30.webp",
        "./images/700w/31.webp",
        "./images/700w/32.webp",
        "./images/700w/33.webp",
        "./images/700w/34.webp",
        "./images/700w/35.webp",
        "./images/700w/36.webp",
        "./images/700w/37.webp"
    ]
};


export const closeButton = "./images/circle-icon-cross.png";

export const arrow = "./images/arrow.png";

export const logo = "./images/logo_kamyanka_low.png";

export const logomonochrome = "./images/logo_vertical_white_low.png";

export const logovertical = "./images/logo_vertical_color_low.png";

export const wallpaper = ((document.documentElement.scrollWidth >= 700)
    ? "./images/original/greating-wallpaper2.webp"
    : "./images/700w/greating-wallpaper2.webp");

export const mainGallery = (document.documentElement.scrollWidth >= 700)
    ? imageArr(initial.original, [36, 33, 35, 9, 1, 4, 2, 3, 8, 6, 5, 30])
    : imageArr(initial.compressed, [36, 33, 35, 9, 1, 4, 2, 3, 8, 6, 5, 30]);

export const firstQueue  = (document.documentElement.scrollWidth >= 700)
? imageArr(initial.original, [33, 36, 1, 2, 8, 6])
: imageArr(initial.compressed, [33, 36, 1, 2, 8, 6]);

export const secondQueue  = (document.documentElement.scrollWidth >= 700)
? imageArr(initial.original, [35, 9, 4, 3, 5, 30])
: imageArr(initial.compressed, [35, 9, 4, 3, 5, 30]);

export const thirdQueue  = (document.documentElement.scrollWidth >= 700)
? imageArr(initial.original, [13, 12, 23, 27, 17, 20])
: imageArr(initial.compressed, [13, 12, 23, 27, 17, 20]);