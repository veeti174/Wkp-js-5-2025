'use strict'
async function getUser() {
  try {
    const data = await fetchData("https://reqres.in/api/users/1");
    console-log("User data:", data);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

getUser();
