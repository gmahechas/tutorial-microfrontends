import faker from 'faker';

const mount = (element) => {
  let products = '';

  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  element.innerHTML = products;
};

if(process.env.NODE_ENV === 'development') {
  const element = document.getElementById('dev-products');

  /* Assuming our container does not have an element
  with id 'dev-products' */
  if(element){
    mount(element);
  }
}

export { mount };