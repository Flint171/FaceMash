let Characters;

async function CharactersLoader(){
    const res = await fetch("Characters.json");
    Characters = await res.json();}

CharactersLoader().then(() => {
    let girl1_index = Math.floor(Math.random() * Characters.length);
    let girl2_index = Math.floor(Math.random() * Characters.length);
    const GirlImage1 = document.getElementById('girl1');
    const GirlImage2 = document.getElementById('girl2');
    GirlImage1.src = `FaceMashImages/${Characters[girl1_index]["image"]}`;
    GirlImage2.src = `FaceMashImages/${Characters[girl2_index]["image"]}`;

    document.getElementById('girl1').addEventListener("click", ChangePic1);
    document.getElementById('girl2').addEventListener("click", ChangePic2);
    document.getElementById('girl1Name').textContent = Characters[girl1_index]["name"];
    document.getElementById('girl2Name').textContent = Characters[girl2_index]["name"];
    document.getElementById('girl1Title').textContent = Characters[girl1_index]["anime"];
    document.getElementById('girl2Title').textContent = Characters[girl2_index]["anime"];

    function ChangePic1(){
         girl1_index = Math.floor(Math.random() * Characters.length)
         girl2_index = Math.floor(Math.random() * Characters.length)

        do{
            girl2_index = Math.floor(Math.random() * Characters.length);} while (girl2_index === girl1_index)

        GirlImage1.src = (`FaceMashImages/${Characters[girl1_index]["image"]}`)
        GirlImage2.src = (`FaceMashImages/${Characters[girl2_index]["image"]}`)
        document.getElementById('girl1Name').textContent = Characters[girl1_index]["name"];
        document.getElementById('girl1Title').textContent = Characters[girl1_index]["anime"];
        document.getElementById('girl2Name').textContent = Characters[girl2_index]["name"];
        document.getElementById('girl2Title').textContent = Characters[girl2_index]['anime'];
        }

    function ChangePic2(){
        ChangePic1()}
});