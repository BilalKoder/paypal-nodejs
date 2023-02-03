var paypal = require('../');

   const clientId ="ASo11bxs9WRcqrGhFjVmvcfVaQxH9hNb7FM3LE_HH9nZp6QQ-F8gYRkGotLBP4LRRrTFlMsARvv_9sg8";
  const clientSecret ="EHZwO2qNe65FvtQIwQ7kmfkWAnJG5U8W9VO8s2maQV4y5P7CAH4EJ9Pdhg9DZ2vcxCwYBHLDhLP952CH";

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': clientId,
    'client_secret': clientSecret,
    'headers' : {
		'custom': 'header'
    }
});
