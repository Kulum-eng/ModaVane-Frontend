const socket = io();

const orderForm = document.getElementById('order-form');
const orderResult = document.getElementById('order-result');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const userId = document.getElementById('user_id').value;
    const productId = document.getElementById('product_id').value;
    const totalPrice = document.getElementById('total_price').value;
    const status = document.getElementById('status').value;

    const order = {
        user_id: userId,
        product_id: productId,
        total_price: totalPrice,
        status: status
    };

    fetch('http://localhost:8080/orders/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            orderResult.innerHTML = '<p>Pedido creado exitosamente!</p>';
        } else {
            orderResult.innerHTML = '<p>Error al crear el pedido</p>';
        }
    })
    .catch(error => {
        console.error('Error creande orden:', error);
        orderResult.innerHTML = '<p>Error al crear el pedido pelona .</p>';
    });
});
