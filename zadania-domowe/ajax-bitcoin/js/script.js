const line = '<i class="fas fa-minus"></i>';
const arrowUp = '<i class="fas fa-arrow-up"></i>';
const arrowDown = '<i class="fas fa-arrow-down"></i>';

const buyP = document.querySelector(".buy");
const sellP = document.querySelector(".sell");

$(function () {
  function getData() {
    $.getJSON(
      "https://api.blockchain.com/v3/exchange/tickers/BTC-USD",
      function (data) {
        if (buyP.textContent === "" && sellP.textContent === "") {
          buyP.innerHTML = `${data.last_trade_price} ${line}`;
          sellP.innerHTML = `${data.price_24h} ${line}`;
        }

        if (data.last_trade_price === Number(buyP.textContent)) {
          buyP.innerHTML = `${data.last_trade_price} ${line}`;
        }

        if (data.last_trade_price > Number(buyP.textContent)) {
          buyP.innerHTML = `${data.last_trade_price} ${arrowUp}`;
        }

        if (data.last_trade_price < Number(buyP.textContent)) {
          buyP.innerHTML = `${data.last_trade_price} ${arrowDown}`;
        }

        if (data.price_24h === Number(sellP.textContent)) {
          sellP.innerHTML = `${data.price_24h} ${line}`;
        }

        if (data.price_24h > Number(sellP.textContent)) {
          sellP.innerHTML = `${data.price_24h} ${arrowUp}`;
        }

        if (data.price_24h < Number(sellP.textContent)) {
          sellP.innerHTML = `${data.price_24h} ${arrowDown}`;
        }
      }
    );
  }

  getData();

  $("button").on("click", function () {
    getData();
  });
});
