class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }
  set(item, value) {
    const keyItem = this._hash(item)
  
    
    if(!this.data[keyItem]) {
      this.data[keyItem] = []
      this.data[keyItem].push([item, value])
      
    } else {

      this.data[keyItem].push([item, value])
    }  
      return this.data;
  }
  get(key) {
    const keyItem = this._hash(key)
    const currentBucket = this.data[keyItem];
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key ) {
          return currentBucket[i][1]
        }
      }
    }

    return undefined;
  }

}

const myHashTable = new HashTable(2);
console.log(myHashTable.set('grapes', 100000));
console.log(myHashTable.set('man', 8000));
console.log(myHashTable.set('apples', 999));
console.log(myHashTable.set('mango', 95699));
console.log(myHashTable.set('pine', 9956349));
console.log(myHashTable.set('things', 1111));
console.log(myHashTable.get('things'));
console.log(myHashTable.get('man'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.get('mango'));
console.log(myHashTable.get('grapes'));

