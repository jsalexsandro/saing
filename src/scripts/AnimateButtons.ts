export function AnimateButton(isOpen: boolean){ // Animate Button of Menu Mobile
  const dashOne = document.getElementById("dash-1") as HTMLButtonElement;
  const dashTwo = document.getElementById("dash-2") as HTMLButtonElement;

  if (isOpen === false){
    dashOne.style.top = "44px";
    dashTwo.style.top = "44px";
    dashOne.style.transform = "rotate(45deg)";
    dashTwo.style.transform = "rotate(-45deg)";
  } else {
    dashOne.style.top = "36px";
    dashTwo.style.top = "56px";
    dashOne.style.transform = "rotate(0deg)";
    dashTwo.style.transform = "rotate(0deg)";
  }

}