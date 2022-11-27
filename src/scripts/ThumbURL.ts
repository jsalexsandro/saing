export function GetThumbURL(url:string) {
  const video = url.split(/[(\W)]/)
  let   outherUrlDetected = false
  let   name = ""

  for (var value of video) { // Try get the url image from url of video not shared
    if (value == "v"){
      outherUrlDetected = true
    } else {
      if (outherUrlDetected){
        name = value
        break
      }
    }
  }

  if (!outherUrlDetected){ // Try get the url shared
    name = url.split("/")[3]
  }

  return 'http://img.youtube.com/vi/' + name + '/0.jpg';
};