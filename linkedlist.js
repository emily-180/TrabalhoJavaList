class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  } 
//------------------------------------------------------------  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length=0;
    }
//------------------------------------------------------------  
    addLast(data) {
      const newNode = new Node(data);
      if(newNode===null)
        return false;
      if (this.head === null) 
        this.head = newNode;
        else {
        // Caso contrário, adiciona o novo nó à cauda e atualiza a cauda
        newNode.prev = this.tail;
        this.tail.next = newNode;
      }
      this.tail = newNode;
      this.length++;
      return true;
    }
//------------------------------------------------------------  
    addFirst(data) {
      console.log("addFirst");
      const newNode = new Node(data);
      if(newNode===null)
        return false;
      if (this.tail === null) 
        this.tail = newNode;
       else {
        // Caso contrário, adiciona o novo nó à cabeça e atualiza a cabeça
        newNode.next = this.head;
        this.head.prev = newNode;
      }
      this.head = newNode;
      this.length++;
      return true;
    }
//------------------------------------------------------------
    addAtIndex(posicao, data) { // add posicao
        if(posicao<=0)
          return this.addFirst(data);
        if(posicao>=this.length)
          return this.addLast(data);
        const newNode = new Node(data);
        let noAtual = this.head;
        let posAtual = 0;
        while(posAtual < posicao-1){
            noAtual = noAtual.next;
            posAtual++;
        } // fim while   
        newNode.prev = noAtual;
        newNode.next = noAtual.next;
        noAtual.next = newNode;
        newNode.next.prev = newNode;
        this.length++;
        return true;
  }// fim addAtIndex
//------------------------------------------------------------
    isEmpty() {
        return this.head === null; 
    }
//------------------------------------------------------------
    last() {
      return this.tail;
    }
//------------------------------------------------------------
    first(){
      return this.head;
    }
//------------------------------------------------------------
    forEach(callback) {
        let noAtual = this.head;
    
        while (noAtual !== null) {
          callback(noAtual.data);
          noAtual = noAtual.next;
        }
      }
//------------------------------------------------------------
  deleteFirst() {
    const removedData = this.head.data; // Salva o valor do elemento removido
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
    }
    else
      this.tail = null;
    this.length--;  
    return removedData; // Retorna o valor do elemento removido
  }
}
  
  