async function main() {


  let response = await fetch('http://jsonplaceholder.typicode.com/photos');

  let json = await response.json()

  for (const item of json) {

    let img = document.createElement('img');
    // img.style = 'position:fixed;top:10px;left:10px;width:100px';
    document.body.append(img);
    img.src = item.url
  }
}
main();
