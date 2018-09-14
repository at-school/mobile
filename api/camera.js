export const uploadImage = async (imageData, token, callback = () => {}) => {
  const response = await fetch("http://192.168.1.11:5000/camera/save", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token
    },

    body: JSON.stringify({ imageData })
  });

  if (response.ok) {
    callback();
    return response.json();
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};
