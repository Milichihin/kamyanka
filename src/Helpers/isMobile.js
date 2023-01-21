export const isMobile =()=>{

    let heigth;
    let width;
    let b;

    window.addEventListener('resize',(e) => {
        // heigth = window.outerHeight;
        // width = window.outerWidth;
        if (window.outerHeight < 450) {
            b = true;
        } else if (window.outerWidth < 450) {
            b = true;
        } else {
            b = false;
        }
    });

    return b;

    // if (heigth < 450) {
    //     return true;
    // } else if (width < 450) {
    //     return true;
    // } else {
    //     return false;
    // }
}