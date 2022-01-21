var cartarr = JSON.parse(localStorage.getItem("Cartarr")) || [];
  

var menuitem = [
      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg",
          name: "Steak Peppercorn",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbf71e27a78a237fd984_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg",
          name: "Homestyle Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbfab125b6b21baf1ac9_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg",
          name: "Cauliflower Shell Beef Bolognese",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bbfee93df882573f2857_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg",
          name: "Savory-Sweet Chicken Teriyaki Bowl",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e-p-800.jpeg",
          name: "Protein-Packed Chicken Parm",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc067781d935ac589515_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg",
          name: "Golden Oven-Fried Chicken & Mash",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106400aa25771202335c782_production-meal-image-1a05b254-2fc5-4eec-9cec-5b1cde753c06-p-500.jpeg",
          name: "Zingy Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc0c28709f5aed230b12_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg",
          name: "Protein-Packed Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg",
          name: "Chicken Livorno",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc12a9dd6b9a49263aa5_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9-p-500.jpeg",
          name: "Pork Carnitas",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc15eb42cf78056d37ba_production-meal-image-36a77436-ae4f-446d-885c-e9fd7ae139fa.jpeg",
          name: "Baja Pork Bowl",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc18e93df8f1943f313f_production-meal-image-d49fdb42-ecc3-4c0f-ae05-6968f1049a73.jpeg",
          name: "Chicken Tikka Masala",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc1bc2ba5c4a4abf26ae_production-meal-image-e184440d-cfea-4806-b7e3-1e5856975959.jpeg",
          name: "Masterful Mash (16 oz)",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401eb621bbc28987f309_production-meal-image-53e1a296-8d48-4ba8-acb3-0d9032960be2.jpeg",
          name: "Street Easts Thai",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc2128709f42f423136f_production-meal-image-09259aec-5f39-4b6a-8894-fed742f5ab3c.jpeg",
          name: "Indian Spiced Chickpea Curry Bowl",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc2528709fe39123147c_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",
          name: "BBQ Bison Burger",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc2528709fe39123147c_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",
          name: "BBQ Bison Burger",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc2528709fe39123147c_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg",
          name: "BBQ Bison Burger",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43-p-500.jpeg",
          name: "Middle Eastern Falafel",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2-p-500.jpeg",
          name: "Miso-Glazed Bowl",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc355b47cf883fec7806_production-meal-image-51fe566d-7bc5-4500-91b0-622d6c2e665c.jpeg",
          name: "Keto Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc3742e9341fa4b6eb26_production-meal-image-b845ba48-1300-4ecb-b9d0-d545b084f15a.jpeg",
          name: "Chicken Cordon",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc3a2c06a6c5a1adfdac_production-meal-image-8b7c8d85-e8de-423e-b1c8-fd1a18a542e7-p-500.jpeg",
          name: "Super Kale Pesto Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc3ea103d4bde151fca1_production-meal-image-fa4ff532-e487-4656-b98f-f489d59e73b6-p-500.jpeg",
          name: "Bangers & Mash",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc415b47cf48dbec781d_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952-p-500.jpeg",
          name: "Three Grain Harvest Bowl",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc44e93df8b7db3f412a_production-meal-image-2e64815b-800d-4a38-9664-c7a524148b2f.jpeg",
          name: "Country Chicken Stew",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc47e93df810ff3f42b3_production-meal-image-93be0073-891b-4443-a6a0-9ab21a1d309c-p-500.jpeg",
          name: "Shrimp",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc4acd9fa8c1899b8333_production-meal-image-933355a9-e575-456c-9961-d6ac01cb50da-p-500.jpeg",
          name: "Wintertime Turkey",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc4deb42cfce466d5b09_production-meal-image-b70b17ff-88b4-453d-b192-2be3cc18e849.jpeg",
          name: "Supper Club Top Steak",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc4f794572febbcc24f4_production-meal-image-197e49d6-cfcc-4a4b-b0ea-4854553694de-p-500.jpeg",
          name: "Very Verde Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc5208008e12e72ce9b4_production-meal-image-c92760b3-d1c8-463a-9721-8effc5cbc614.jpeg",
          name: "Chicken Cordon",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106406e186b52870a4ef9b9_production-meal-image-e11563a9-0714-42b4-aac9-239a7592018b-p-500.jpeg",
          name: "Creamy Mushroom",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc5908008ece832cebc1_production-meal-image-2f53a0bb-c83f-48f7-b920-53e9157ac5e1.jpeg",
          name: "Baked Balls",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc5deb42cf72856d640f_production-meal-image-2d36ad62-ae02-42fe-9c16-f2064587d892-p-500.jpeg",
          name: "Dijon Chop",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc60eb42cf68066d66c2_production-meal-image-207ee5a9-50b6-4d3f-a0bb-e31354d0e606-p-500.jpeg",
          name: "Country Chicken Stew",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc6408008eda342cedd3_production-meal-image-8f27cccd-b0db-405a-9341-3f4adabcbe9c.jpeg",
          name: "Chicken cordon",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc68421a962a476d1689_production-meal-image-603e4274-71b0-48a1-8072-c11baab58220.jpeg",
          name: "Bangers Mash",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc6ee93df8293d3f4c0f_production-meal-image-b22511da-67a6-428b-a50d-10212f5cea17.jpeg",
          name: "Chipotle Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc72f9383b7ab7888551_production-meal-image-4aa973ed-846f-4957-9341-272c1125725d.jpeg",
          name: "Dijon Chop",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc75957fd83ea41d0b6a_production-meal-image-2669cb60-58b3-4b43-b88a-6defd9b581cc.jpeg",
          name: "Very Verde Chicken",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc7860386661542b7193_production-meal-image-dd5b71cb-e0fc-4917-bd2b-52678a77f47b.jpeg",
          name: "Super Kale Pesto",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc7bf9383b25b1889023_production-meal-image-79ab8e74-c2fa-404a-a107-a6756aba68fa-p-500.jpeg",
          name: "Super Club Top",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064033d2877aaa317edab7_production-meal-image-f28dfb4e-efc8-4dff-b95c-9239797edcb0-p-500.jpeg",
          name: "Three Grain Harvest",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc8139a1eecc646be1d9_production-meal-image-0a3b0cc8-11c7-4dd7-9b62-21a8a91c6a07-p-800.jpeg",
          name: "Country Chicken Stew",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc85e93df8947f3f574d_production-meal-image-d5e81f22-3f38-4eaa-932a-c0bca23a021c.jpeg",
          name: "Chicken Cordon",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc8708008e112d2cf81f_production-meal-image-b8bb2dcf-52be-4f84-be7c-bf019107f2cc.jpeg",
          name: "Chicken Special",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

      {
          image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61e3bc8a6038663b1b2b71da_production-meal-image-93da874b-3677-4881-9674-1a9f3a39ba38.jpeg",
          name: "Chicken Bowl",
          desc: "600 Cal | Gluten Free | Sigle-Serve"
      },

  ]

  menuitem.map(function (data) {

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
      btn.textContent = "ADD";
      btn.addEventListener("click", function () {
          buttonfun(data);
      });


      divup.append(image)
      divdown.append(name, div1);

      div1.append(div2, btn);
      div2.append(para1, para2);

      maindiv.append(divup, divdown)
      document.querySelector("#maincontainerclass").append(maindiv);
  })

  function buttonfun(data) {
      console.log(data);
      cartarr.push(data);
      localStorage.setItem("Cartarr", JSON.stringify(cartarr));
      alert("Item Added to the  cart");

  }




  var get_startedBtn = document.querySelector('#meals_btn')
  get_startedBtn.addEventListener('click', function getStarted(){
    window.location.href = 'signup.html'
  })