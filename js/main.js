let containerHeight = document.getElementById("container").offsetHeight; // container height
let box = document.getElementById("box"); // blue box

box.style.top = "50px"; //initial position: 50px top
/*
    box animation direction
    0 -> bottom-right 
    1 -> top-left
*/
let direction = 0; //

const boxAnimation = () => {
  let PositionLeft = box.offsetLeft;
  let PositionTop = box.offsetTop;

  /*
    start from js animation direction 0
    if box offsetLeft < 0, change direction to 1
  */
  direction =
    PositionTop + 100 >= containerHeight
      ? 1
      : box.offsetLeft < 0
      ? 0
      : direction;

  /*
  moves 10 pixels right and 10 pixels down and vice versa
  */
  direction === 0
    ? ((PositionLeft = PositionLeft + 10), (PositionTop = PositionTop + 10))
    : ((PositionLeft = PositionLeft - 10), (PositionTop = PositionTop - 10));

  box.style.left = PositionLeft + "px";
  box.style.top = PositionTop + "px";

  setTimeout(function () {
    boxAnimation();
  }, 1000);
};
boxAnimation();
