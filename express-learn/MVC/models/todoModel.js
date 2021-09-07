const { readFile, writeFile } = require('fs/promises');
const { v4: uuidv4 } = require('uuid');
class Todo {
  constructor(list, status) {
    this.list = list;
    this.status = status;
  }

  static findAll = async () => {
    const data = await readFile('database/todo.json', 'utf8');
    const arr = JSON.parse(data);
    return arr;
  };

  static create = async todo => {
    const data = await readFile('database/todo.json', 'utf8');
    const arr = JSON.parse(data);
    arr.push({ id: uuidv4(), ...todo });
    await writeFile('database/todo.json', JSON.stringify(arr));
  };

  //   save() {
  //     if (this.id) {
  //       const update = async () => {
  //         const data = await readFile('database/todo.json', 'utf8');
  //         const arr = JSON.parse(data);
  //         const index = arr.findIndex(item => item.id === this.id);
  //         arr[index] = this;
  //         await writeFile('database/todo.json', JSON.stringify(arr));
  //       };
  //       update();
  //     } else {
  //       const create = async () => {
  //         const data = await readFile('database/todo.json', 'utf8');
  //         const arr = JSON.parse(data);
  //         arr.push({ id: uuidv4(), list: this.list, status: this.status });
  //         await writeFile('database/todo.json', JSON.stringify(arr));
  //       };
  //       create();
  //     }
  //   }
}

module.exports = Todo;
