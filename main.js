$(function () {
  console.log(masodfokuEgyenletMegoldasa(1, 4, 4));
  console.log(masodfokuEgyenletMegoldasa(1, 6, 4));
  console.log(masodfokuEgyenletMegoldasa(5, 5, 5));
  console.log(masodfokuEgyenletMegoldasa(0, 2, 2));
  console.log(masodfokuEgyenletMegoldasa(0, 0, 0));
  console.log(masodfokuEgyenletMegoldasa(0, 1, 2));
  console.log(masodfokuEgyenletMegoldasa(-1, -4, -4));
  console.log(masodfokuEgyenletMegoldasa(7, 8, 9));
  console.log(masodfokuEgyenletMegoldasa(100, 400, 400));
  console.log(masodfokuEgyenletMegoldasa(500, 400, 400));
  console.log(masodfokuEgyenletMegoldasa(1.0, 4.0, 4.0));
});
// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

function masodfokuEgyenletMegoldasa(a, b, c) {
  let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  const eredmeny = {
    X1: x1,
    X2: x2,
  };
  return eredmeny;
}
