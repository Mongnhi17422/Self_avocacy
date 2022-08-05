fetch("https://60bc32b7b8ab37001759ee4d.mockapi.io/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
