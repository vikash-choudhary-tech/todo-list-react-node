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
