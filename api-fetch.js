
document.querySelector("#btn").addEventListener("click", getData);

async function getData() {
  const output = document.querySelector("#output");

  try {
    // Fetch from API
    const response = await fetch("https://fake-json-api.mock.beeceptor.com/users");

    if (!response.ok) {
      throw new Error("Network error: " + response.status);
    }

    const data = await response.json();

    // Clear old content
    output.innerHTML = "";

    // Check if we got an array of users
    if (Array.isArray(data) && data.length > 0) {
      data.forEach(user => {
        const div = document.createElement("div");
        div.innerHTML = `
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <hr>
        `;
        output.appendChild(div);
      });
    } else {
      output.textContent = "No users found!";
    }
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}

