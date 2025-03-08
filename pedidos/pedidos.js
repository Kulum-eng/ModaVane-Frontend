
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

    socket.emit('create-order', order);

    orderResult.innerHTML = '<p>Pedido creado exitosamente!</p>';
});
