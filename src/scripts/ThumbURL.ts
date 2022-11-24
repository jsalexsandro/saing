export function GetThumbURL(url:string) {

  const video = url.split('/')[3]
  console.log(url.split('/'))
  return 'http://img.youtube.com/vi/' + video + '/0.jpg';
};