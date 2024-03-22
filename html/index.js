const playlist = [1, 2, 3, 4, 5]

const objetos = [{ asd: 'asaaa', miau: 'aaaaaaaaaaaaaa' }]

function queRecibeUnArreglo ({ asd, miau }) {
  console.log(asd, miau)
}

queRecibeUnArreglo({ ...objetos[0] })
