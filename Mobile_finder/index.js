var mobiles = {
    apple: {
      iphonex: {
        imagee: "images/Apple/x.jpg",
        price: 150000,
        colors: "White,Black,Gold",
        memory: '3gb RAM',
        camera: 12 + " pixels",
        description: "Iphone X",
      },
      iphonexr: {
        imagee: "images/Apple/xr.jpg",
        price: 250000,
        colors: "Red,Blue,Black",
        memory: '3gb RAM',
        camera: 12 + " Pixels",
        description: "Iphone XR",
      },
      iphone13pro: {
        imagee: "images/Apple/13pro.jpg",
        price: 350000,
        colors: "Gold,Black,White",
        memory: '6gb RAm',
        camera: 12 + " Pixels",
        description: "Iphone 13 Pro",
      },
      iphone12pro: {
        imagee: "images/Apple/12pro.jpg",
        price: 280000,
        colors: "Gold,Black",
        memory: '4gb RAM',
        camera: 12 + " Pixels",
        description: "Iphone 12 Pro",
      },
      iphone11: {
        imagee: "images/Apple/11.jpg",
        price: 200000,
        colors: "Red,Blue,Green",
        memory: '4gb RAM',
        camera: 12 + " Pixels",
        description: "Iphone 11",
      },
    },
  
    infinix: {
      hot10s: {
        imagee: "images/Infinix/hot10s.jpg",
        price: 50000,
        colors: "Green,Purple",
        memory: '4gb RAM',
        camera: 48 + " Pixels",
        description: "Infinix Hot 10s",
      },
      hot10play: {
        imagee: "images/Infinix/hot10play.jpg",
        price: 35000,
        colors: "Morandi Green",
        memory: '4gb RAM',
        camera: 13 + " Pixels",
        description: "Infinix Hot 10 play",
      },
      note10: {
        imagee: "images/Infinix/note10.jpg",
        price: 70000,
        colors: "Nordic Secret",
        memory: '8gb RAM',
        camera: 64 + " Pixels",
        description: "Infinix Note 10",
      },
      note12: {
        imagee: "images/Infinix/note12.jpg",
        price: 100000,
        colors: "Black, White",
        memory: '8gb RAM',
        camera: 108 + " Pixels",
        description: "Infinix Note 12",
      }
    },
  
    samsung: {
      note8: {
        imagee: "images/Samsung/note8.jpg",
        price: 150000,
        colors: "Midnight Black",
        memory: '',
        camera: 25 + " Pixels",
        description: "Samsung Note 8",
      },
      note9: {
        imagee: "images/Samsung/note9.jpg",
        price: 250000,
        colors: "Metallic Copper",
        memory: '8gb RAM',
        camera: 12 + " Pixels",
        description: "Samsung Note 9",
      },
      a8: {
        imagee: "images/Samsung/a8.jpg",
        price: 60000,
        colors: "Black, orchid grey",
        memory: '4gb RAM',
        camera: 16 + " Pixels",
        description: "Samsung A8 (2018) ",
      },
      j5: {
        imagee: "images/Samsung/j5.jpg",
        price: 30000,
        colors: "Black , White",
        memory: '1.5gb RAM',
        camera: 13 + " Pixels",
        description: "Samsung J5",
      },
      galaxycore: {
        imagee: "images/Samsung/Core.jpg",
        price: 50000,
        colors: "Black , Blue",
        memory: '2gb RAM',
        camera: 8 + " Pixels",
        description: "Samsung Galaxy A03 Core ",
      },
    },
  
    vivo: {
      y55: {
        imagee: "images/Vivo/y55.jpg",
        price: 75000,
        colors: "Black , Ice Dawn",
        memory: '8gb RAM',
        camera: 50 + " Pixels",
        description: "Vivo Y55 ",
      },
      x80: {
        imagee: "images/Vivo/x80.jpg",
        price: 115000,
        colors: "Cosmic Black , Orange",
        memory: '12gb RAM',
        camera: 50 + " Pixels",
        description: "Vivo X80 Pro",
      },
      v23: {
        imagee: "images/Vivo/v23.jpg",
        price: 100000,
        colors: "Sunshine Gold, Stardust Black",
        memory: '12gb RAM',
        camera: 64 + " Pixels",
        description: "Vivo V23 Pro",
      },
      v23e: {
        imagee: "images/Vivo/v23e.jpg",
        price: 60000,
        colors: "Black, Aurora",
        memory: '8gb RAM',
        camera: 64 + " Pixels",
        description: "Vivo V23e",
      },
    },
  };
  
  
  //  CADS UI DESGIN
  
  // APPLE
  
  document.getElementById("img1").src = "images/Apple/x.jpg"
  document.getElementById("x").innerHTML = "Iphone X"
  
  document.getElementById("img2").src = "images/Apple/xr.jpg"
  document.getElementById("xr").innerHTML = "Iphone XR"
  
  document.getElementById("img3").src = "images/Apple/11.jpg"
  document.getElementById("11").innerHTML = "Iphone 11"
  
  document.getElementById("img4").src = "images/Apple/12pro.jpg"
  document.getElementById("12pro").innerHTML = "Iphone 12 Pro"
  
  document.getElementById("img5").src = "images/Apple/13pro.jpg"
  document.getElementById("13pro").innerHTML = "Iphone 13 Pro"
  
  // Infinix
  
  
  document.getElementById("img6").src = "images/Infinix/hot10play.jpg"
  document.getElementById("hot10play").innerHTML = "Infinix Hot 10 Play"
  
  document.getElementById("img7").src = "images/Infinix/hot10s.jpg"
  document.getElementById("hot10s").innerHTML = "Infinix Hot 10s"
  
  document.getElementById("img8").src = "images/Infinix/note10.jpg"
  document.getElementById("note10").innerHTML = "Infinix Note 10"
  
  document.getElementById("img9").src = "images/Infinix/note12.jpg"
  document.getElementById("note12").innerHTML = "Infinix Note 12"
  
  
  // Samsung
  
  document.getElementById("img10").src = "images/Samsung/a8.jpg"
  document.getElementById("a8").innerHTML = "Samsung A8"
  
  document.getElementById("img11").src = "images/Samsung/core.jpg"
  document.getElementById("core").innerHTML = "Samsung Core Prime"
  
  document.getElementById("img12").src = "images/Samsung/j5.jpg"
  document.getElementById("j5").innerHTML = "Samsung J5"
  
  document.getElementById("img13").src = "images/Samsung/note8.jpg"
  document.getElementById("note8").innerHTML = "Samsung Note 8"
  
  document.getElementById("img14").src = "images/Samsung/note9.jpg"
  document.getElementById("note9").innerHTML = "Samsung Note 9"
  
  
  // Vivo
  
  
  document.getElementById("img15").src = "images/Vivo/v23.jpg"
  document.getElementById("v23").innerHTML = "Vivo V23"
  
  document.getElementById("img16").src = "images/Vivo/v23e.jpg"
  document.getElementById("v23e").innerHTML = "Vivo V23e"
  
  document.getElementById("img17").src = "images/Vivo/x80.jpg"
  document.getElementById("v23").innerHTML = "Vivo X80"
  
  document.getElementById("img18").src = "images/Vivo/y55.jpg"
  document.getElementById("y55").innerHTML = "Vivo Y55"
  
  
  
  
  
  
  
  
  // ENDS HERE!
  for (var keys in mobiles) {
    var create_option = document.createElement('option');
    create_option.innerHTML = keys;
    var select = document.getElementById('dropDown');
    select.appendChild(create_option)
  }
  
  
  function searchValue() {
    document.getElementById("cardAreHere").style.display = "none"
    document.getElementById('result').style.display = "block"
    document.getElementById('Hidden').style.display = "block"
    var inputValue = document.getElementById("searchBar");
    console.log(inputValue)
    var option = document.getElementById('dropDown');
    var searchName = mobiles[option.value][inputValue.value];
    if (searchName === undefined) {
      document.getElementById("result").style.display = "none"
      swal("Opps!", "This Item is'nt available", "error");
      inputValue.value = "";
      option.value = "";
      return;
    }
    var searchImg = mobiles[option.value][inputValue.value].imagee;
    var searchPrice = mobiles[option.value][inputValue.value].price;
    var searchColor = mobiles[option.value][inputValue.value].colors;
    var searchMemory = mobiles[option.value][inputValue.value].memory;
    var searchCamera = mobiles[option.value][inputValue.value].camera;
    var searchDescription = mobiles[option.value][inputValue.value].description;
  
    var imageget = document.getElementById('img');
    var price = document.getElementById('price')
    var color = document.getElementById('color')
    var memory = document.getElementById('memory')
    var camera = document.getElementById('camera')
    var description = document.getElementById('description')
  
    imageget.src = searchImg;
    price.innerHTML = searchPrice
    color.innerHTML = searchColor
    memory.innerHTML = searchMemory
    camera.innerHTML = searchCamera
    description.innerHTML = searchDescription
  }