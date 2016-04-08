let priceHistory = [
  { price: 22, date: 1/15},
  { price: 23, date: 2/15},
  { price: 20, date: 3/15},
  { price: 20, date: 4/15},
  { price: 22, date: 5/15},
  { price: 20, date: 6/15},
  { price: 25, date: 7/15},
  { price: 24, date: 8/15},
  { price: 10, date: 9/15},
  { price: 40, date: 10/15},
  { price: 26, date: 11/15},
  { price: 29, date: 12/15},
];

function drawPricePoints() {
  let containerWidth = $("#kWPriceHistory").width();
  let canvasHeight = $("canvas").height();

  let canvas = document.getElementById('canvas');
  let increment = containerWidth/(priceHistory.length - 1);
  let xPos = 0;

  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = 'white';

    ctx.moveTo(0, (canvasHeight-priceHistory[0].price));

    for(let value of priceHistory){
      ctx.lineTo(xPos, (canvasHeight - value.price));
      xPos += increment;
    }
    ctx.stroke();
  }
}

Template.chart.helpers({
  latestPrice: priceHistory[0].price
});

Template.chart.onRendered(drawPricePoints);