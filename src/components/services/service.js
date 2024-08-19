export function addtodo(payload) {
  console.log(payload);
  return fetch("http://localhost:8000/addtodo", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getTodo() {
  return await fetch("http://localhost:8000/todo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function deleteTodo(itemId) {
  return await fetch(`http://localhost:8000/deleteTodo/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getTodoById(id) {
  return await fetch(`http://localhost:8000/todo/${id}`);
}
