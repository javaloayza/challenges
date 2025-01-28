// Nodo para la lista enlazada
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Lista enlazada
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Agregar al final
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // Si está vacía
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Recorrer hasta el final
      }
      current.next = newNode; // Agregar nodo
    }
  }

  // Eliminar por valor
  remove(value) {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next; // Si es el primer nodo
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next; // Saltar el nodo a eliminar
    }
  }

  // Buscar un nodo por valor
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }
}

// Usando la lista enlazada
const tasksList = new LinkedList();
tasksList.append("Tarea1");
tasksList.append("Tarea2");
tasksList.append("Tarea3");

// Buscar tarea
console.log(tasksList.find("Tarea2")); // Output: Node { value: 'Tarea2', next: Node { ... } }

// Eliminar tarea
tasksList.remove("Tarea2");
