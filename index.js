class SortedList {
  constructor(){
    this.items = []
    this.length = 0
  }
  add(item){
    this.items.push(item)
    this.items.sort((n1, n2) => n1 - n2);
    this.length = this.items.length
  }
  get(pos){
      if(pos > this.length){
         throw new Error("OutOfBounds")
      }
      else{
        return this.items.indexOf(pos)
      }
  }
  max(){
      if(this.length == 0){
        throw new Error("EmptySortedList");
      }
      else{
        return Math.max(...this.items)
      }
  }
  min(){
      if(this.length == 0){
        throw new Error("EmptySortedList");
      }
      else{
        return Math.min(...this.items)
      }
  }
  avg(){
      if(this.length == 0){
        throw new Error("EmptySortedList");
      }
      else{
        return (this.items.reduce((output, ele) => output + ele) / this.length)
      }
  }

  sum(){
      if(this.length == 0){
        return 0;
      }
      else{
        return this.items.reduce((output, ele) => output + ele)
      }
  }
};

module.exports = SortedList;
