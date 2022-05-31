const Api = () =>{

    document.querySelector(".subContent").classList.add("ativo")

    const gerarApi = async (names) =>{

        const createImg = (tag, conteudo, classe) =>{
            const elemento = document.createElement(tag);
            elemento.src = conteudo;
            elemento.classList.add(classe);
            return elemento;
        }

        const url = `https://pixabay.com/api/?key=27676150-1af88998807daeae995cefd65&q=${names}&per_page=50`

        const request = await fetch(url, {})
        .then(response => response.json())
        .then((data) =>{
            const imgsPix = data.hits;

            if(data.total === 0){
                document.querySelector(".notFound").classList.add('active');

                document.querySelector(".subContent").classList.remove("ativo");
                
            }else{
                const mapImg = imgsPix.map((img) =>{
                    return img.largeImageURL;

                }).forEach(element => {
                    const img = element;
                    const tagImg = createImg("img", img, "imagem");
                    document.querySelector(".subContent").appendChild(tagImg);
                });
            }

        }).catch(error => {
            console.log(error);
        });
        
    }
    gerarApi(document.querySelector(".input").value)
    document.querySelector(".subContent").innerHTML = "";
    document.querySelector(".wellc").classList.add("desactive");
}
export default Api;