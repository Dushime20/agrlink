import axios from 'axios';

class ApiService {
  static BASE_URL = "http://localhost:8080/iktech";

  static getHeader() {
    const token = localStorage.getItem("token");
    return {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    };
  }

  


  /** this registers a new user */
  static async registerUser(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/user/signup`, formData, {
        headers: this.getHeader()
      });
      console.log("sign in response", response.data);
      return response.data;
    } catch (error) {
      console.error("Error signup:", error);
      throw error;
    }
  }

  /** this logs in a registered user */
  static async loginUser(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/user/signin`, formData, {
        headers: this.getHeader()
      });
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error; // Rethrow the error so it can be caught in the handleSubmit method
    }
  }
/***USER */

static async getAllUser() {
  try {
    const response = await axios.get(`${this.BASE_URL}/user/listAll`, {
      headers: this.getHeader()
    });
    return response.data;
  } catch (error) {
    console.error("Error get all user in:", error);
    throw error; 
  }
}



         /****CAR */
  static async AddCar(formData){
  try{
    const response = await axios.post(`${this.BASE_URL}/carAvailable/add`, formData, {
      headers: this.getHeader()
    });
    return response.data;
  } catch (error) {
    console.error("Error adding car in:", error);
    //throw error; // Rethrow the error so it can be caught in the handleSubmit method
  }
  }




  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("UserType");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isUser() {
    const userType = localStorage.getItem("UserType");
    return userType === "Customer";
  }
  static isAdmin() {
    const userType = localStorage.getItem("UserType");
    return userType === "Admin";
  }


}


export default ApiService;
