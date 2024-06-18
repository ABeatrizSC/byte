export const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
        return;
    }
    window.scrollTo(0, 0);
}

export const scrollonLoad = () => {
    const { hash } = window.location;

    scrollToElement(hash.replace("#", ""));
}