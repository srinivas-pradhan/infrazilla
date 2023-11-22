const ImageData = [
    {
      alt: "BG1",
      src: "/slider1_1.jpg"
    },
    {
      alt: "BG2",
      src: "/slider2.jpg"
    },
    {
      alt: "BG3",
      src: "/slider3.jpg"
    },
    {
      alt: "BG4",
      src: "/slider4.jpg"
    },
    {
      alt: "BG5",
      src: "/slider1.jpg"
    }
]

const SwipeConfig = {
  mousewheel: true,
  dynamicBullets: true,
  clickable: true,
  delay: "30000",
  disableOnInteraction: false,
  spaceBetween: 50,
  slidesPerView: 1,
  loop: true
}
export {
  ImageData,
  SwipeConfig
}
