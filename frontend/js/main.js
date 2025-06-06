document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      const qtdProdutosBox = document.getElementById("qtd-produtos");
if (qtdProdutosBox) {
  fetch("http://localhost:5000/produtos", {
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Não autorizado ou erro na resposta.");
      }
      return response.json();
    })
    .then((produtos) => {
      qtdProdutosBox.innerText = produtos.length;
    })
    .catch((error) => {
      console.error("Erro ao carregar produtos:", error);
      qtdProdutosBox.innerText = "0";
    });
}

      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();
      if (data.success) {
        window.location.href = "dashboard.html";
      } else {
        alert("Login inválido!");
      }
    });
  }
  
const formProduto = document.getElementById("formProduto");
if (formProduto) {
  formProduto.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);

    const res = await fetch("http://localhost:5000/produtos", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, preco }),
    });

    if (res.ok) {
      alert("Produto cadastrado com sucesso!");
      formProduto.reset();
    } else {
      alert("Erro ao cadastrar produto.");
    }
  });
}

  const formUsuario = document.getElementById("formUsuario");
  if (formUsuario) {
    carregarUsuarios();

    formUsuario.addEventListener("submit", async (e) => {
      e.preventDefault();
      const id = document.getElementById("id").value;
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      const metodo = id ? "PUT" : "POST";

      await fetch("http://localhost:5000/usuarios", {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id, nome, email, senha }),
      });

      carregarUsuarios();
      formUsuario.reset();
    });
  }
});

async function carregarUsuarios() {
  const res = await fetch("http://localhost:5000/usuarios", {
    credentials: "include",
  });
  const usuarios = await res.json();

  const lista = document.getElementById("listaUsuarios");
  lista.innerHTML = "";
  usuarios.forEach((u) => {
    const li = document.createElement("li");
    li.innerHTML = `${u.nome} (${u.email}) 
      <button onclick="editar(${u.id}, '${u.nome}', '${u.email}')">Editar</button>
      <button onclick="excluir(${u.id})">Excluir</button>`;
    lista.appendChild(li);
  });
}

function editar(id, nome, email) {
  document.getElementById("id").value = id;
  document.getElementById("nome").value = nome;
  document.getElementById("email").value = email;
}

async function excluir(id) {
  await fetch("http://localhost:5000/usuarios", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ id }),
  });
  carregarUsuarios();
}
