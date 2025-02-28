document.addEventListener("DOMContentLoaded", function () {
    const log_modal = document.getElementById("log-modal");
    const reg_modal = document.getElementById("reg-modal");
    const closeLogModal = document.querySelector("#log-modal .close");
    const closeRegModal = document.querySelector("#reg-modal .close");

    closeLogModal.addEventListener("click", () => {
        log_modal.style.display = "none";
    });

    closeRegModal.addEventListener("click", () => {
        reg_modal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target === log_modal) {
            log_modal.style.display = "none";
        }

        if (event.target === reg_modal) {
            reg_modal.style.display = "none";
        }
    };

    document.querySelectorAll("#login-btn").forEach(button => {
        button.addEventListener("click", () => {
            log_modal.style.display = "flex";
        });
    });

    document.querySelectorAll("#register-btn").forEach(button => {
        button.addEventListener("click", () => {
            reg_modal.style.display = "flex";
        });
    });

    function fetchCryptoRates() {
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,xrp,binancecoin,solana,cardano,dogecoin,shiba-inu,litecoin,polkadot,monero,stellar,chainlink,uniswap,vechain,tron,algorand,ethereum-classic,dash,zcash,maker,compound,aave,decentraland,pancakeswap,cosmos,ftx-token,husky&vs_currencies=usd&include_24hr_change=true")
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector("#currency-table-1 tbody");
                tableBody.innerHTML = "";

                const currencies = [
                    { name: "Bitcoin", id: "bitcoin" },
                    { name: "Ethereum", id: "ethereum" },
                    { name: "Tether", id: "tether" },
                    { name: "Binance Coin", id: "binancecoin" },
                    { name: "Solana", id: "solana" },
                    { name: "Cardano", id: "cardano" },
                    { name: "Dogecoin", id: "dogecoin" },
                    { name: "Shiba Inu", id: "shiba-inu" },
                    { name: "Litecoin", id: "litecoin" },
                    { name: "Polkadot", id: "polkadot" },
                    { name: "Monero", id: "monero" },
                    { name: "Stellar", id: "stellar" },
                    { name: "Chainlink", id: "chainlink" },
                    { name: "Uniswap", id: "uniswap" },
                    { name: "VeChain", id: "vechain" },
                    { name: "TRON", id: "tron" },
                    { name: "Algorand", id: "algorand" },
                    { name: "Ethereum Classic", id: "ethereum-classic" },
                    { name: "Dash", id: "dash" },
                    { name: "Zcash", id: "zcash" },
                    { name: "Maker", id: "maker" },
                    { name: "Aave", id: "aave" },
                    { name: "Decentraland", id: "decentraland" },
                    { name: "Cosmos", id: "cosmos" },
                    { name: "FTX Token", id: "ftx-token" }
                ];
                
                currencies.forEach(currency => {
                    const price = data[currency.id].usd.toFixed(2);
                    const change = data[currency.id].usd_24h_change.toFixed(2);
        
                    // Определяем цвет (зеленый - рост, красный - падение)
                    const changeColor = change >= 0 ? "rgb(16,159,105)" : "rgb(246,70,93)";
                    const changeSymbol = change >= 0 ? "▲" : "▼";
        
                    const row = document.createElement("tr");
                    row.className = "item"
                    row.innerHTML = `
                        <td><img src="/assets/${currency.id}.webp" alt="${currency.id}" width="50px"> ${currency.name}</td>
                        <td>$${price}</td>
                        <td style="color: ${changeColor};">${changeSymbol} ${change}%</td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error("Ошибка загрузки данных:", error));
    }

    function fetchCurrencyRates() {
        fetch("https://api.exchangerate-api.com/v4/latest/USD")
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector("#currency-table-2 tbody");
                tableBody.innerHTML = "";

                const currencies = [
                    { name: "Euro", code: "EUR" },
                    { name: "British Pound", code: "GBP" },
                    { name: "Japanese Yen", code: "JPY" },
                    { name: "Australian Dollar", code: "AUD" },
                    { name: "Canadian Dollar", code: "CAD" },
                    { name: "Swiss Franc", code: "CHF" },
                    { name: "Chinese Yuan", code: "CNY" },
                    { name: "Indian Rupee", code: "INR" },
                ];
                
                currencies.forEach(currency => {
                    const rateUSD = data.rates[currency.code].toFixed(2);
                    const rateRUB = (rateUSD * data.rates["RUB"]).toFixed(2);
        
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td><img src="/assets/${currency.code}.svg" alt="${currency.code}" width="50px"> ${currency.name}</td>
                        <td>$${rateUSD}</td>
                        <td>₽${rateRUB}</td> <!-- Рублевая цена -->
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error("Ошибка загрузки данных валют:", error));
    }

    // const currencyData = {
    //     "provider": "https://www.exchangerate-api.com",
    //     "WARNING_UPGRADE_TO_V6": "https://www.exchangerate-api.com/docs/free",
    //     "terms": "https://www.exchangerate-api.com/terms",
    //     "base": "USD",
    //     "date": "2025-02-28",
    //     "time_last_updated": 1740700802,
    //     "rates": {
    //         "USD": 1,
    //         "AED": 3.67,
    //         "AFN": 73.55,
    //         "ALL": 94.49,
    //         "AMD": 394.01,
    //         "ANG": 1.79,
    //         "AOA": 920.06,
    //         "ARS": 1062.38,
    //         "AUD": 1.6,
    //         "AWG": 1.79,
    //         "AZN": 1.7,
    //         "BAM": 1.88,
    //         "BBD": 2,
    //         "BDT": 121.52,
    //         "BGN": 1.88,
    //         "BHD": 0.376,
    //         "BIF": 2966.65,
    //         "BMD": 1,
    //         "BND": 1.34,
    //         "BOB": 6.93,
    //         "BRL": 5.81,
    //         "BSD": 1,
    //         "BTN": 87.32,
    //         "BWP": 13.84,
    //         "BYN": 3.26,
    //         "BZD": 2,
    //         "CAD": 1.44,
    //         "CDF": 2858.75,
    //         "CHF": 0.899,
    //         "CLP": 942.42,
    //         "CNY": 7.29,
    //         "COP": 4129.78,
    //         "CRC": 506.49,
    //         "CUP": 24,
    //         "CVE": 105.81,
    //         "CZK": 23.93,
    //         "DJF": 177.72,
    //         "DKK": 7.16,
    //         "DOP": 62.4,
    //         "DZD": 134.79,
    //         "EGP": 50.66,
    //         "ERN": 15,
    //         "ETB": 126.66,
    //         "EUR": 0.96,
    //         "FJD": 2.3,
    //         "FKP": 0.792,
    //         "FOK": 7.16,
    //         "GBP": 0.792,
    //         "GEL": 2.81,
    //         "GGP": 0.792,
    //         "GHS": 15.54,
    //         "GIP": 0.792,
    //         "GMD": 72.63,
    //         "GNF": 8649.97,
    //         "GTQ": 7.72,
    //         "GYD": 209.59,
    //         "HKD": 7.78,
    //         "HNL": 25.61,
    //         "HRK": 7.23,
    //         "HTG": 131.24,
    //         "HUF": 383.95,
    //         "IDR": 16479.65,
    //         "ILS": 3.57,
    //         "IMP": 0.792,
    //         "INR": 87.32,
    //         "IQD": 1312.32,
    //         "IRR": 42000.89,
    //         "ISK": 138.91,
    //         "JEP": 0.792,
    //         "JMD": 157.86,
    //         "JOD": 0.709,
    //         "JPY": 149.8,
    //         "KES": 129.26,
    //         "KGS": 87.43,
    //         "KHR": 4016.09,
    //         "KID": 1.6,
    //         "KMF": 472.07,
    //         "KRW": 1446.08,
    //         "KWD": 0.309,
    //         "KYD": 0.833,
    //         "KZT": 500.19,
    //         "LAK": 21696.63,
    //         "LBP": 89500,
    //         "LKR": 295.08,
    //         "LRD": 199.5,
    //         "LSL": 18.45,
    //         "LYD": 4.89,
    //         "MAD": 9.92,
    //         "MDL": 18.67,
    //         "MGA": 4706.96,
    //         "MKD": 58.74,
    //         "MMK": 2102.69,
    //         "MNT": 3455.95,
    //         "MOP": 8.01,
    //         "MRU": 39.86,
    //         "MUR": 46.27,
    //         "MVR": 15.47,
    //         "MWK": 1745.53,
    //         "MXN": 20.46,
    //         "MYR": 4.44,
    //         "MZN": 63.95,
    //         "NAD": 18.45,
    //         "NGN": 1497.78,
    //         "NIO": 36.85,
    //         "NOK": 11.23,
    //         "NPR": 139.72,
    //         "NZD": 1.77,
    //         "OMR": 0.384,
    //         "PAB": 1,
    //         "PEN": 3.69,
    //         "PGK": 4.03,
    //         "PHP": 57.99,
    //         "PKR": 280.01,
    //         "PLN": 3.98,
    //         "PYG": 7919.13,
    //         "QAR": 3.64,
    //         "RON": 4.75,
    //         "RSD": 111.86,
    //         "RUB": 87.23,
    //         "RWF": 1426.87,
    //         "SAR": 3.75,
    //         "SBD": 8.67,
    //         "SCR": 14.42,
    //         "SDG": 589.16,
    //         "SEK": 10.73,
    //         "SGD": 1.34,
    //         "SHP": 0.792,
    //         "SLE": 22.89,
    //         "SLL": 22891.37,
    //         "SOS": 572.49,
    //         "SRD": 35.59,
    //         "SSP": 4417.34,
    //         "STN": 23.51,
    //         "SYP": 13020.17,
    //         "SZL": 18.45,
    //         "THB": 33.99,
    //         "TJS": 10.95,
    //         "TMT": 3.5,
    //         "TND": 3.17,
    //         "TOP": 2.39,
    //         "TRY": 36.52,
    //         "TTD": 6.77,
    //         "TVD": 1.6,
    //         "TWD": 32.89,
    //         "TZS": 2599.23,
    //         "UAH": 41.52,
    //         "UGX": 3681.24,
    //         "UYU": 42.82,
    //         "UZS": 12875.65,
    //         "VES": 64.25,
    //         "VND": 25549.96,
    //         "VUV": 123.58,
    //         "WST": 2.82,
    //         "XAF": 629.43,
    //         "XCD": 2.7,
    //         "XDR": 0.761,
    //         "XOF": 629.43,
    //         "XPF": 114.51,
    //         "YER": 247.7,
    //         "ZAR": 18.45,
    //         "ZMW": 28.4,
    //         "ZWL": 26.55
    //     }
    // }


    // const cryptoData = {
    //     "aave": {
    //         "usd": 184.62,
    //         "usd_24h_change": -11.272678334889848
    //     },
    //     "algorand": {
    //         "usd": 0.219492,
    //         "usd_24h_change": -9.178082810871016
    //     },
    //     "binancecoin": {
    //         "usd": 570.23,
    //         "usd_24h_change": -7.54840229603724
    //     },
    //     "bitcoin": {
    //         "usd": 79521,
    //         "usd_24h_change": -7.792659940379533
    //     },
    //     "cardano": {
    //         "usd": 0.592488,
    //         "usd_24h_change": -11.338836356242842
    //     },
    //     "chainlink": {
    //         "usd": 13.73,
    //         "usd_24h_change": -11.523378453421444
    //     },
    //     "cosmos": {
    //         "usd": 4.28,
    //         "usd_24h_change": -8.473920496490505
    //     },
    //     "dash": {
    //         "usd": 24.44,
    //         "usd_24h_change": -8.122893942127176
    //     },
    //     "decentraland": {
    //         "usd": 0.274063,
    //         "usd_24h_change": -6.984457899666831
    //     },
    //     "dogecoin": {
    //         "usd": 0.186141,
    //         "usd_24h_change": -10.848802475081873
    //     },
    //     "ethereum": {
    //         "usd": 2115.3,
    //         "usd_24h_change": -10.21162820489788
    //     },
    //     "ethereum-classic": {
    //         "usd": 18.03,
    //         "usd_24h_change": -5.174620467291412
    //     },
    //     "ftx-token": {
    //         "usd": 1.57,
    //         "usd_24h_change": -7.193508078968179
    //     },
    //     "husky": {
    //         "usd": 2.02027e-10,
    //         "usd_24h_change": null
    //     },
    //     "litecoin": {
    //         "usd": 117.18,
    //         "usd_24h_change": -9.025078325016809
    //     },
    //     "maker": {
    //         "usd": 1544.06,
    //         "usd_24h_change": -12.247761310144071
    //     },
    //     "monero": {
    //         "usd": 212.38,
    //         "usd_24h_change": -1.3777212723907144
    //     },
    //     "polkadot": {
    //         "usd": 4.57,
    //         "usd_24h_change": -8.006045189721608
    //     },
    //     "shiba-inu": {
    //         "usd": 0.00001327,
    //         "usd_24h_change": -9.82565220129311
    //     },
    //     "solana": {
    //         "usd": 128.27,
    //         "usd_24h_change": -9.259869101943945
    //     },
    //     "stellar": {
    //         "usd": 0.260788,
    //         "usd_24h_change": -10.429945560402293
    //     },
    //     "tether": {
    //         "usd": 0.998766,
    //         "usd_24h_change": -0.02521583615756823
    //     },
    //     "tron": {
    //         "usd": 0.219499,
    //         "usd_24h_change": -3.877727083654366
    //     },
    //     "uniswap": {
    //         "usd": 7.21,
    //         "usd_24h_change": -11.28587380324227
    //     },
    //     "vechain": {
    //         "usd": 0.02594319,
    //         "usd_24h_change": -11.215603897564991
    //     },
    //     "zcash": {
    //         "usd": 36.33,
    //         "usd_24h_change": -2.366755571367298
    //     }
    // };
    
    // function insertCryptoData(data) {
    //     const tableBody = document.querySelector("#currency-table-1 tbody");
    //     tableBody.innerHTML = "";

    //     const currencies = [
    //         { name: "Bitcoin", id: "bitcoin", icon: "" },
    //         { name: "Ethereum", id: "ethereum", icon: "" },
    //         { name: "Tether", id: "tether", icon: "" },
    //         { name: "Binance Coin", id: "binancecoin", icon: "" },
    //         { name: "Solana", id: "solana", icon: "" },
    //         { name: "Cardano", id: "cardano", icon: "" },
    //         { name: "Dogecoin", id: "dogecoin", icon: "" },
    //         { name: "Shiba Inu", id: "shiba-inu", icon: "" },
    //         { name: "Litecoin", id: "litecoin", icon: "" },
    //         { name: "Polkadot", id: "polkadot", icon: "" },
    //         { name: "Monero", id: "monero", icon: "" },
    //         { name: "Stellar", id: "stellar", icon: "" },
    //         { name: "Chainlink", id: "chainlink", icon: "" },
    //         { name: "Uniswap", id: "uniswap", icon: "" },
    //         { name: "VeChain", id: "vechain", icon: "" },
    //         { name: "TRON", id: "tron", icon: "" },
    //         { name: "Algorand", id: "algorand", icon: "" },
    //         { name: "Ethereum Classic", id: "ethereum-classic", icon: "" },
    //         { name: "Dash", id: "dash", icon: "" },
    //         { name: "Zcash", id: "zcash", icon: "" },
    //         { name: "Maker", id: "maker", icon: "" },
    //         { name: "Aave", id: "aave", icon: "" },
    //         { name: "Decentraland", id: "decentraland", icon: "" },
    //         { name: "Cosmos", id: "cosmos", icon: "" },
    //         { name: "FTX Token", id: "ftx-token", icon: "" }
    //     ];

        // currencies.forEach(currency => {
        //     const price = data[currency.id].usd.toFixed(2);
        //     const change = data[currency.id].usd_24h_change.toFixed(2);

        //     // Определяем цвет (зеленый - рост, красный - падение)
        //     const changeColor = change >= 0 ? "rgb(16,159,105)" : "rgb(246,70,93)";
        //     const changeSymbol = change >= 0 ? "▲" : "▼";

        //     const row = document.createElement("tr");
        //     row.className = "item"
        //     row.innerHTML = `
        //         <td><img src="/assets/${currency.id}.webp" alt="${currency.id}" width="50px"> ${currency.name}</td>
        //         <td>$${price}</td>
        //         <td style="color: ${changeColor};">${changeSymbol} ${change}%</td>
        //     `;
        //     tableBody.appendChild(row);
        // });
    // }

    // function insertCurrencyData(data) {
    //     const tableBody = document.querySelector("#currency-table-2 tbody");
    //     tableBody.innerHTML = "";

    //     const currencies = [
    //         { name: "USD", code: "USD"},
    //         { name: "Euro", code: "EUR" },
    //         { name: "British Pound", code: "GBP" },
    //         { name: "Japanese Yen", code: "JPY" },
    //         { name: "Australian Dollar", code: "AUD" },
    //         { name: "Canadian Dollar", code: "CAD" },
    //         { name: "Swiss Franc", code: "CHF" },
    //         { name: "Chinese Yuan", code: "CNY" },
    //         { name: "Indian Rupee", code: "INR" },
    //     ];

        // currencies.forEach(currency => {
        //     const rateUSD = data.rates[currency.code].toFixed(2);
        //     const rateRUB = (rateUSD * data.rates["RUB"]).toFixed(2);

        //     const row = document.createElement("tr");
        //     row.innerHTML = `
        //         <td><img src="/assets/${currency.code}.svg" alt="${currency.code}" width="50px"> ${currency.name}</td>
        //         <td>$${rateUSD}</td>
        //         <td>₽${rateRUB}</td> <!-- Рублевая цена -->
        //     `;
        //     tableBody.appendChild(row);
        // });
    // }
    
    // insertCryptoData(cryptoData);
    // insertCurrencyData(currencyData);

    fetchCryptoRates();
    fetchCurrencyRates();

    setInterval(fetchCryptoRates, 180000);
    setInterval(fetchCurrencyRates, 180000);
});
