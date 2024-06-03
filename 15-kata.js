const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
  const camiseta = products[i];
  if (camiseta.includes("Camiseta")) {
    console.log(camiseta);
  }
}
