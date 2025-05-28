const table = document.getElementById("tableau");


function patisserie(url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const title = document.getElementById("titre");
            let revue = document.createElement("h1");
            title.appendChild(revue);
            revue.textContent = data["nomCommercial"];
            console.log(revue);
            const paragraphe = document.createElement("p");
            paragraphe.textContent = data["phraseAccroche"];
            title.appendChild(paragraphe);

            const boutton = document.createElement("button");
            boutton.textContent = data["texteAppelAction"];
            title.appendChild(boutton);
            let section = document.createElement("section");
            section.classList.add("customer")

            data.avantagesClients.forEach(element => {
                let avantages = document.createElement("p");

                // avantages.classList.add("clients");
                avantages.textContent = element;
                section.appendChild(avantages);


            });
            title.appendChild(section);

            data.produits.forEach(element => {
                const produits = document.getElementById("produits");
                let decouvrir=document.createElement("p")
                // decouvrir.textContent=("Decouvrez nos meilleurs produits")
                // produits.appendChild(decouvrir)
                let creation = document.createElement("div");
                creation.classList.add("card");
                let intitule = document.createElement("h3")
                intitule.textContent = element["nom"];
                let image = document.createElement("img");
                image.src = textContent = element["image-url"];
                creation.appendChild(intitule)
                let paragraphe = document.createElement("p");
                paragraphe.textContent = element["description"];
                // creation.textContent=element["description"];
                // setAttribute("src","img-url")
                // creation.setAttribute=element["image-url"];
                
                produits.appendChild(creation)
                creation.appendChild(image);
                creation.appendChild(paragraphe);
                
            });
            data.temoignages.forEach(element => {

                const commentaires = document.getElementById("commentaires");
                let division=document.createElement("div");
                division.classList.add("look");
                let creer = document.createElement("h4");
                creer.textContent = element["prenom"];
                let expérience = document.createElement("p");
                expérience.textContent = element["commentaire"];

            //     let notation=document.createElement("img")
            // image.src = textContent = ("étoiles.jpg");


            //     division.appendChild(notation);

                commentaires.appendChild(division);
                division.appendChild(creer);
                division.appendChild(expérience);
                document.createElement
            });



















        })
        .catch(error => {

            console.error('Erreur lors du fetch :', error);
        });

}
patisserie('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json')