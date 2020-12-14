import faker from 'faker';

const mount = (element) => {
  let cartText = `You have ${faker.random.number()} in the cart`;

  element.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const element = document.getElementById('dev-cart');

  /* Assuming our container does not have an element
  with id 'dev-products' */
  if (element) {
    mount(element);
  }
}

export { mount };