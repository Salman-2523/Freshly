var cartitem = JSON.parse(localStorage.getItem("Cartarr")) || [];
    // console.log(cartitem.length)
    display(cartitem);



    function display(cartitem) {
        document.querySelector("#cartcontent").innerHTML = null;
        cartitem.map(function (data, index) {
            // console.log(data);

            var maindiv = document.createElement("div");
            maindiv.setAttribute("class", "mainitem");

            var divup = document.createElement("div");
            divup.setAttribute("class", "up");

            var image = document.createElement("img");
            image.setAttribute("src", data.image);

            var divdown = document.createElement("div");
            divdown.setAttribute("class", "down");

            var name = document.createElement("p");
            name.textContent = data.name;

            var div1 = document.createElement("div");
            div1.setAttribute("class", "inner");

            var div2 = document.createElement("div");

            var para1 = document.createElement("p");
            para1.textContent = data.desc;

            var para2 = document.createElement("p");
            para2.textContent = data.price;



            var btn = document.createElement("button");
            btn.textContent = "Remove";
            btn.addEventListener("click", function () {
                btnfun(index);
            });

            divup.append(image)
            divdown.append(name, div1);

            div1.append(div2, btn);
            div2.append(para1, para2);

            maindiv.append(divup, divdown)
            document.querySelector("#cartcontent").append(maindiv);

        })
        total();
    }



    function btnfun(index) {
        console.log(index)
        cartitem.splice(index, 1);
        localStorage.setItem("Cart", JSON.stringify(cartitem));
        display(cartitem);
    }