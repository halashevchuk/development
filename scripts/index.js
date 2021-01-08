async function main() {


    let response = await fetch('http://jsonplaceholder.typicode.com/photos');

    let json = await response.json()




    var text = "";
    var i = 0;
    do {

        i++;
        let img = document.createElement('img');
        //img.style = 'position:fixed;top:10px;left:10px;width:100px';
        document.body.append(img);
        img.src = json[i].url
    }
    while (i < json.length);

}
main();
