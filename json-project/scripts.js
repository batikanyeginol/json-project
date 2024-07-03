document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    displayUsers(users);
});

function displayUsers(users) {
    const userCards = document.getElementById('user-cards');
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2><i class="fas fa-user"></i> ${user.name} (${user.username})</h2>
            <p><i class="fas fa-id-badge"></i> <strong>ID:</strong> ${user.id}</p>
            <p><i class="fas fa-envelope"></i> <strong>Email:</strong> ${user.email}</p>
            <p><i class="fas fa-phone"></i> <strong>Phone:</strong> ${user.phone}</p>
            <p><i class="fas fa-globe"></i> <strong>Website:</strong> ${user.website}</p>
            <p><i class="fas fa-map-marker-alt"></i> <strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><i class="fas fa-building"></i> <strong>Company:</strong> ${user.company.name}</p>
        `;
        userCards.appendChild(card);
    });
}
