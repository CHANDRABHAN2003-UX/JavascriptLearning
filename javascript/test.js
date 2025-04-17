console.log("hello golu")
function test() {
    let x = 1;
    if (true) {
      x = 2;           // Reassigning the same `x`
      console.log(x);  // 👉 Output: 2
    }
    console.log(x);    // 👉 Output: 2
  }
  function test() {
    var x;        // Declaration is hoisted to the top
    x = 1;        // Initialization
    if (true) {
      x = 2;      // Same `x`, just re-assigned
      console.log(x); // 2
    }
    console.log(x); // 2
  }
    