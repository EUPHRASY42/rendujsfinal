function patisserie(url) {
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        const title = document.getElementById("titre");
        let revue = document.createElement("h1");
            title.appendChild(revue);
            revue.textContent =data["nomCommercial"];
            console.log(revue);
            const paragraphe=document.createElement("p");
            paragraphe.textContent=data["phraseAccroche"];
title.appendChild(paragraphe);

const boutton=document.createElement("button");
boutton.textContent=data["texteAppelAction"];
title.appendChild(boutton);

data.avantagesClients.forEach(element => {
    const table=document.getElementById("tableau");
    let avantages=document.createElement("div");
    avantages.textContent=element;
    table.appendChild(avantages);
    

});
            
        data.produits.forEach(element => {
        const produits=document.getElementById("produits") ;
        let creation=document.createElement("div");
        creation.textContent=element["nom"];
        let paragraphe=document.createElement("p");
        paragraphe.textContent=element["description"];
        // creation.textContent=element["description"];
        // setAttribute("src","img-url")
        // creation.setAttribute=element["image-url"];
        let image=document.createElement("img");
        image.src=textContent=element["image-url"];
        produits.appendChild(creation)
        produits.appendChild(paragraphe);
        produits.appendChild(image);
    });
      data.temoignages.forEach(element => {
        
        const commentaires=document.getElementById("commentaires");
        let creer=document.createElement("h4");
        creer.textContent=element["prenom"];
        let expérience=document.createElement("p");
        expérience.textContent=element["commentaire"];
        commentaires.appendChild(creer);
        commentaires.appendChild(expérience);
      });
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        })
        .catch(error => {
            
            console.error('Erreur lors du fetch :', error);
        });
        
    }
        patisserie('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/patisserie.json')