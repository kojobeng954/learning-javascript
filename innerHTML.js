        const buyButton = document.getElementById("buy-btn");
        buyButton.innerHTML = "<button onclick='buyclick()'>BUY!</button>"

        function buyclick(){
            buyButton.innerHTML += "<p>Thank you for buying.</p>"
        }