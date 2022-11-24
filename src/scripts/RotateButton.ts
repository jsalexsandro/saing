
export const RotateButton = async (is:boolean, set:(value:any) => any) => {
  const icon = document.getElementById('icon') as HTMLDivElement;
  const time = 400 // time in milliseconds


  if (is == false){
    icon.style.transition = `${time}ms`
    icon.style.transform = 'rotate(359deg)'
    set(true);
  } 
  setTimeout(() => {
    icon.style.transition = "0s"
    icon.style.transform = 'rotate(0deg)'
    set(false)
  }, time)

}