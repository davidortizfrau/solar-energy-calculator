// ////////////////////////////////////////////////////////
//
//   The formula for calculating the payment amount.
//
//                   r(1 + r)^n
//           A = P ---------------
//                  (1 + r)^n - 1
//
//   A = payment Amount per period
//   P = initial Principal (loan amount)
//   r = interest rate per period
//   n = total number of payments or periods
//
// ////////////////////////////////////////////////////////

Finance = function(P, n, r){

  let dividend = r * Math.pow((1 + r), n);
  let divisor = Math.pow((1 + r), n) - 1;

  let payment = function() {
    A = P * (dividend/divisor)
    return A
  };

  return { payment }
}