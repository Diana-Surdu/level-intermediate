class NumberContainer {
  // HW1: try to set initial values through constructor
  constructor(val_0, val_1, val_2) {
    this.val_0 = val_0 //undefined
    this.val_1 = val_1 //undefined
    this.val_2 = val_2 //undefined
  }

  get length() {
      /*if (this.val_0 == undefined) {
        return 0
      } else if (this.val_1 == undefined ) {
        return 1
      } else if (this.val_2 == undefined) {
        return 2
      } else {
        return 3
      }*/

      //Code optimization
      for ( let i=0; i < 3; i++) {
        if ( this[`val_${i}`] == undefined) {
            return i
        }  
      }
      return 3
  }

  //HW2: try to avoid anything else than numbers
  push (number) {
    /*if (typeof number === "number") {
          if (this.length == 0) 
              this.val_0 = number
          else if (this.length == 1) 
              this.val_1 = number
          else if (this.length == 2) 
              this.val_2 = number
          else 
              console.error("Container is full!!!")
    } else {
      console.error ("The input is not a number!!!")
    }*/

    //Code optimization
    if (length == 3) {
        console.error("Container is full!!!")
        return
    }
    this[`val_${this.length}`] = number
  }
    

  forEach( cb ) {
    //this works like a loop

    /*if(this.length > 0) {
      cb(this.val_0)
    }
    if (this.length > 1) {
      cb(this.val_1)
    }
    if (this.length > 2) {
      cb(this.val_2)
    }*/

    //Code optimization
    for ( let i = 0; i < this.length; i++) {
        cb (this[`val_${i}`])
    }
  }

  //HW3: try to do a forEachReverse( cb(val) )
  forEachReverse ( cb ) {
    //this works like a loop
    if(this.length > 0) {
      cb(this.val_2)
    }
    if (this.length > 1) {
      cb(this.val_1)
    }
    if (this.length > 2) {
      cb(this.val_0)
    }
  }

  reduce ( cb ) {
    let acc = 0
    //this works like a loop
    /*if (this.length > 0) {
      acc = cb(this.val_0, acc)
    }
    if (this.length > 1) {
      acc = cb(this.val_1, acc)
    }
    if (this.length > 2) {
      acc = cb(this.val_2, acc)
    }
      return acc*/
  

   //HW4: Code optimization for .reduce()
    for ( let i = 0; i < this.length; i++) {
        acc = cb (this[`val_${i}`], acc)
    }  
    return acc
  }
}