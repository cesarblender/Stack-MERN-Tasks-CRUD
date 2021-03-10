export async function Get(url: string, headers?: any) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function Post<Param>(url: string, body: Param, headers?: any) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });
  return response;
}

export async function Put<Param>(url: string, body: Param, headers?: any) {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  return response;
}

export async function Delete(url: string, headers?: any) {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  return response;
}
