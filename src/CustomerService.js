let url = "http://localhost:8080/customers";

// export async function getAllEmployees() {
//   let response = await fetch(`${url}`);
//   let employees = await response.json();
//   console.log(employees);
//   return employees;
// }

export async function getCustomerById(id) {
  let response = await fetch(`${url}/get/${id}`);
  let customerData = await response.json();
  console.log(customerData);
  return customerData;
}

export async function addCustomer(customer) {
  try {
    const response = await fetch(`${url}/post`, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 406) {
      throw new Error("Request failed with a 406 status code.");
    }
    const responseData = await response.json(); // You might want to parse response data if applicable
    return responseData; // Return parsed response data or the entire response object if needed
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}


export async function deleteCustomer(id) {
  let response = await fetch(`${url}/delete/${id}`, {
    method: "DELETE",
  });

  if (response.status === 200) return true;

  return false;
}
