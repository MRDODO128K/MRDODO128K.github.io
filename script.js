document.addEventListener('DOMContentLoaded', function() {
    const siButton = document.getElementById('siButton');
    const noButton = document.getElementById('noButton');
    const yeiContainer = document.getElementById('yeiContainer');;

    noButton.addEventListener('mouseenter', function() {
        moveButton();
        siButton.style.fontSize = parseInt(siButton.style.fontSize || '18px') * 1.2 + 'px';
        showRandomImage();
    });

    siButton.addEventListener('click', function() {
        clearScreen();
        showYei();
        showLoveText();

    });

    function moveButton() {
        const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    }
    const shownImages = new Set(); // Conjunto para almacenar las URLs de las imágenes que ya se han mostrado

    function showRandomImage() {
        const imageUrls = ['imagen6.jpg','imagen7.jpg', 'imagen8.jpg', 'imagen9.jpg', 'imagen10.jpg', 'imagen11.jpg', 'imagen12.jpg', 'imagen14.jpg', 'imagen16.jpg', 'imagen17.jpg', 'imagen18.jpg' ];
        let availableImages = imageUrls.filter(url => !shownImages.has(url)); // Filtramos las imágenes que no se han mostrado
    
        if (availableImages.length === 0) {
            // Si todas las imágenes ya se han mostrado, reiniciamos el conjunto
            shownImages.clear();
            availableImages = imageUrls;
        }
    
        const randomIndex = Math.floor(Math.random() * availableImages.length);
        const randomImageUrl = availableImages[randomIndex];
    
        shownImages.add(randomImageUrl); // Agregamos la URL de la imagen al conjunto de imágenes mostradas
    
        const img = new Image();
        img.src = randomImageUrl;
        img.style.position = 'absolute';
        img.style.left = noButton.offsetLeft + 'px';
        img.style.top = noButton.offsetTop + noButton.offsetHeight + 'px';
        img.style.width = '150px'; // Ajusta el tamaño de la imagen según tus necesidades
    
        document.body.appendChild(img);
        setTimeout(function() {
            document.body.removeChild(img);
        }, 3500);
    }
    function clearScreen() {
        document.body.innerHTML = ''; // Eliminar todos los elementos del cuerpo
       
        showLoveText();
        const gifImage = document.createElement('img');
        gifImage.src = 'arriba.gif'; // Ruta de tu GIF
        gifImage.style.width = '200px'; // Ancho del GIF
        gifImage.style.height = '200px'; // Alto del GIF
        gifImage.style.position = 'absolute'; // Posición absoluta
        gifImage.style.top = '30%'; // Posición vertical centrada
        gifImage.style.left = '50%'; // Posición horizontal centrada
        gifImage.style.transform = 'translate(-50%, -50%)'; // Centrar el GIF
        document.body.innerHTML = '';
        // Crear y posicionar el botón
        
        const newButton = document.createElement('button');
        newButton.textContent = 'Presiona aqui <3"';
        newButton.style.position = 'absolute';
        newButton.style.top = '55%'; // Cambia la posición vertical del botón
        newButton.style.left = '43%'; // Cambia la posición horizontal del botón
        newButton.addEventListener('click', function() {
            // Mostrar la ventana emergente con el texto "patata"
            alert('Eres lo mejor que me ha pasado te amo demasiado, te esperan mas sorpresas para cuando vaya');
            // Obtener referencia al nuevo botón
        });

    

    // Agregar el botón al cuerpo del documento
    document.body.appendChild(newButton);
    document.body.appendChild(gifImage);
    createHearts();
    }

    function showYei() {
        yeiContainer.classList.remove('hidden'); // Mostrar el contenedor "Yei!!"
    }
    function createHearts() {
        for (let i = 0; i < 50; i++) { // Puedes ajustar el número de corazones según tu preferencia
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.animationDelay = Math.random() * 3 + 's'; // Ajusta el retardo para una apariencia más natural
            document.body.appendChild(heart);
        }
    }
    function showLoveText() {
        const loveText = document.createElement('h2');
        loveText.id = 'loveText';
        loveText.textContent = 'Te amo mucho <3';
        document.body.appendChild(loveText);
    }
    onload = () =>{
        document.body.classList.remove("container");
    };
    function showGif() {



    }

   

 
});



