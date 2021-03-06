export const login = async (username, password) => {
  const response = await fetch("http://localhost:5000/auth/signin", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    return response.json();
  }
  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const logout = async token => {
  const response = await fetch("http://localhost:5000/auth/signin", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ token })
  });

  if (response.ok) {
    return response.json();
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};
