// The sandwich making function
function makeSandwich() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your Sandwich is ready!");
    }, 2000); // Simulating 2 seconds of sandwich making time 
  });
};

// The ordering function using async/await 
async function placeOrder() {
  console.log("Placing your sandwich order...");
  const result = await makeSandwich();
  console.log(result);
  console.log("Enjoy your sandwich ;)");
};

// Calling the ordering function
placeOrder();

// console.log("Doing something else...");
