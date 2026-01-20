let totalAmount = 0
//Add ₹500
totalAmount = totalAmount + 500

//Add ₹1200
totalAmount = totalAmount + 1200

//Apply ₹200 discount
totalAmount = totalAmount - 200

//Add 18% GST
totalAmount = totalAmount + (totalAmount * 0.18)

//Print final bill amount
console.log("Final Bill Amount: ₹" + totalAmount)