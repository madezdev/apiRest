const fs = require("fs").promises;

class Contenedor {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    const leer = await fs.readFile(this.path, "utf-8");
    return JSON.parse(leer);
  }

  async getById(id) {
    try {
      const leer = await fs.readFile(this.path, "utf-8");
      const data = JSON.parse(leer);
      const obj = data.find((obj) => obj.id === id);

      if (!obj) {
        return `Error, producto no encontrado`;
      }
      return obj;
    } catch (err) {
      console.log(err);
    }
  }

  async save(objeto) {
    try {
      const leer = await fs.readFile(this.path, "utf-8");
      const data = JSON.parse(leer);

      const arrayOfIds = data.map((product) => product.id);
      const maxId = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds);
      const id = maxId + 1;

      const newProducto = { id, ...objeto };
      data.push(newProducto);

      await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8");

      return newProducto;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteByid(id) {
  
    try {
      const leer = await fs.readFile(this.path, "utf-8");
      const data = JSON.parse(leer);
      delete data.id;
    //   const obj = data.find((obj) => obj.id === id);
      await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8");
    } catch (err) {
      console.log(err);
    }
  }

}

module.exports = Contenedor;
