CREATE DATABASE IF NOT EXISTS realestatedb;
USE realestatedb;

CREATE TABLE Operations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(15) NOT NULL
);

CREATE TABLE Cities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);

CREATE TABLE Categories(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender CHAR(1) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    number VARCHAR(25) NOT NULL
);

CREATE TABLE Properties(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    main_image TEXT NOT NULL,
    description VARCHAR(255) NOT NULL,
    address VARCHAR(90) NOT NULL,
    id_operation INT NOT NULL,
    FOREIGN KEY (id_operation) REFERENCES Operations(id),
    id_city INT NOT NULL,
    FOREIGN KEY (id_city) REFERENCES Cities(id),
    id_category INT NOT NULL,
    FOREIGN KEY (id_category) REFERENCES Categories(id)
);

CREATE TABLE Images(
    id INT AUTO_INCREMENT PRIMARY KEY,
    url_image TEXT NOT NULL,
    description VARCHAR(50) NOT NULL,
    id_property INT NOT NULL,
    FOREIGN KEY (id_property) REFERENCES Properties(id)
);


INSERT INTO Categories (name)
VALUES ("house"), ("department");

INSERT INTO Cities (name, country)
VALUES ("Buenos Aires", "Argentina");

INSERT INTO Operations (type)
VALUES ("sale"), ("rental");

INSERT INTO Properties (title, price, main_image, description, address, id_operation, id_city, id_category)
VALUES
    ('Casa en Palermo Soho', 220000, 'https://www.lanacion.com.ar/resizer/v2/la-casa-esta-ubicada-en-el-pasaje-santa-rosa-SZF7Y42BINEMVHFZHDKBHEXFSM.JPG?auth=8f2c5904ea5c8c5e4ea9ede8970b041e1134efdcdd287014380664f5d448f877&width=880&height=586&quality=70&smart=false', 'Encantadora casa en el corazón de Palermo Soho con amplio patio.', 'Palermo Soho, Calle Armenia 1200', 1, 1, 1),
    ('Apartamento en Recoleta', 1900, 'https://static.tokkobroker.com/pictures/6412092102677553208141555872740261574003896798070208790684419091291126417594.jpg', 'Moderno apartamento en el elegante barrio de Recoleta.', 'Recoleta, Avenida Alvear 800', 2, 1, 2),
    ('Casa en San Telmo', 250000, 'https://arqa.com/wp-content/uploads/2017/01/01-estudio-geya-casa-bolivar-ph_federico_kulekdjian.jpg', 'Casa de estilo colonial en el histórico barrio de San Telmo.', 'San Telmo, Calle Defensa 500', 1, 1, 1),
    ('Apartamento en Belgrano', 180000, 'https://static.tokkobroker.com/pictures/58573510621417919583205067261531051035411614209000823226389842983872792349774.jpg', 'Amplio apartamento en el tranquilo barrio de Belgrano.', 'Belgrano, Calle Cabildo 2500', 1, 1, 2),
    ('Casa en La Boca', 1500, 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/55/4e.jpg', 'Colorida casa en el pintoresco barrio de La Boca.', 'La Boca, Calle Caminito 300', 2, 1, 1),
    ('Apartamento en Palermo Hollywood', 210000, 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/332947521.jpg?k=2fb95c444a50bb696ec72d6b58206d24136b9bc65c3590bec84fc46ef816bcb2&o=&hp=1', 'Elegante apartamento en la vibrante zona de Palermo Hollywood.', 'Palermo Hollywood, Calle Fitz Roy 1500', 1, 1, 2),
    ('Casa en Villa Urquiza', 1500, 'https://static1.sosiva451.com/60022141/3711774c-ea92-4bce-95f8-56b19f4b1eed_u_large.jpg', 'Casa familiar en el barrio residencial de Villa Urquiza.', 'Villa Urquiza, Calle Monroe 1700', 2, 1, 1),
    ('Apartamento en San Cristóbal', 1700, 'https://static1.sosiva451.com/4181358/0f6a01ab-5b7e-4210-8233-5936ba189b8b_u_large.jpg', 'Acogedor apartamento en el tradicional barrio de San Cristóbal.', 'San Cristóbal, Calle Boedo 900', 2, 1, 2),
    ('Casa en Mataderos', 1000, 'https://static.tokkobroker.com/water_pics/104873632684280222148943862891344722126375628426748592664790538277197228077987.jpg', 'Casa con amplio jardín en el barrio de Mataderos.', 'Mataderos, Calle Lisandro de la Torre 1200', 2, 1, 1),
    ('Apartamento en Barracas', 200000, 'https://static1.sosiva451.com/49333721/4fa7e8c7-2b07-4898-a5c6-e3ec9af69ad4_u_large.jpg', 'Moderno apartamento en el barrio de Barracas.', 'Barracas, Calle Suarez 800', 1, 1, 2);


INSERT INTO Images (url_image, description, id_property) VALUES 
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/26/75/59/1200x1200/1879902680.jpg", "property-11", 11),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/26/75/59/1200x1200/1879902677.jpg", "property-11", 11),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/45/49/85/1200x1200/1884069777.jpg", "property-12", 12),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/45/49/85/1200x1200/1884069772.jpg", "property-12", 12),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/51/20/20/29/1200x1200/1881604819.jpg", "property-13", 13),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/51/20/20/29/1200x1200/1856212032.jpg", "property-13", 13),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/31/47/79/1200x1200/1880963089.jpg", "property-14", 14),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/31/47/79/1200x1200/1880963056.jpg", "property-14", 14),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/37/52/83/1200x1200/1882283855.jpg", "property-15", 15),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/37/52/83/1200x1200/1882283860.jpg", "property-15", 15),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/51/94/78/38/1200x1200/1872578086.jpg", "property-16", 16),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/51/94/78/38/1200x1200/1872578100.jpg", "property-16", 16),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/25/91/35/1200x1200/1881810078.jpg", "property-17", 17),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/25/91/35/1200x1200/1881833278.jpg", "property-17", 17),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/38/29/24/1200x1200/1882476130.jpg", "property-18", 18),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/38/29/24/1200x1200/1882476135.jpg", "property-18", 18),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/04/03/58/1200x1200/1874669375.jpg", "property-19", 19),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/04/03/58/1200x1200/1874669352.jpg", "property-19", 19),    
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/19/93/71/1200x1200/1878551309.jpg", "property-20", 20),
    ("https://imgar.zonapropcdn.com/avisos/resize/1/00/52/19/93/71/1200x1200/1878551291.jpg", "property-20", 20)