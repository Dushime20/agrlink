import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

class ApiService {
  static BASE_URL = "http://localhost:3300/agritech/v1";

  static getHeader(data) {
    const token = localStorage.getItem("token");

    // Detect if data is FormData to decide on Content-Type header
    const isFormData = typeof FormData !== "undefined" && data instanceof FormData;

    return {
      Authorization: `Bearer ${token}`,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    };
  }

  /** Register a new user */
  static async registerUser(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/user/signup`,
        formData,
        {
          headers: this.getHeader(formData), // Pass formData here
        }
      );
      console.log("sign in response", response.data);
      return response.data;
    } catch (error) {
      console.error("Error signup:", error);
      throw error;
    }
  }

  /** Login a registered user */
  static async loginUser(formData) {
    try {
      const response = await axios.post(
        `${this.BASE_URL}/user/signin`,
        formData,
        {
          headers: this.getHeader(formData), // Pass formData here
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  /** Get all users */
  static async getAllUser() {
    try {
      const response = await axios.get(`${this.BASE_URL}/user/getAll`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error get all user in:", error);
      throw error;
    }
  }

  /** Get user by ID */
  static async getUserById(userId) {
    try {
      const response = await axios.get(`${this.BASE_URL}/user/getById/${userId}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  }

  /** Update user by ID */
  static async updateUserById(userId, updatedData) {
    try {
      const response = await axios.put(
        `${this.BASE_URL}/user/update/${userId}`,
        updatedData,
        {
          headers: this.getHeader(updatedData), // Pass data here
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw error;
    }
  }

  /** Delete user */
  static async deleteUser(userId) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/user/delete/${userId}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  }

  /** Add product */
  static async Addproduct(formData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/product/add`, formData, {
        headers: this.getHeader(formData), // Pass formData here
      });
      return response.data;
    } catch (error) {
      console.error("Error adding product in:", error);
      // optionally throw error here
    }
  }

  /** Get all products */
  static async getAllProducts() {
    try {
      const response = await axios.get(`${this.BASE_URL}/product/getAll`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw error;
    }
  }

  /** Get product by ID */
  static async getProductById(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/product/getById/${id}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw error;
    }
  }

  /** Get products by seller ID */
  static async getProductBySellerId() {
    try {
      const response = await axios.get(`${this.BASE_URL}/product/getBySellerId`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching products by seller ID:", error);
      throw error;
    }
  }

  /** Filter products by name, price, and category */
  static async filterProductByNameAndPriceAndCategory(queryParams) {
    try {
      const query = new URLSearchParams(queryParams).toString();
      const response = await axios.get(`${this.BASE_URL}/product/filterProduct?${query}`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error filtering products:", error);
      throw error;
    }
  }











  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static getUserRole() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const decoded = jwtDecode(token);
    return decoded.role;
  } catch {
    return null;
  }
}

static isUser() {
  return this.getUserRole() === "Buyer";
}

static isSeller() {
  return this.getUserRole() === "Seller";
}

static isAdmin() {
  return this.getUserRole() === "Admin";
}
}

export default ApiService;
