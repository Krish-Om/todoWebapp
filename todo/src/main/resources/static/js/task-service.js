class TaskService {
  endpoint = "http://localhost:8080";
  async getAllTasks() {
    const url = this.endpoint + "/task";
    let response;
    try {
      response = await fetch(url);
      if (!this.checkResponseCode(response.status)) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Request failed with : ${error.message}}`);
    }
  }

  async getTasksByTaskId(id) {
    const url = `${this.endpoint}/task/${id}`;
    let response;
    try {
      response = await fetch(url);
      if (!this.checkResponseCode(response.status)) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      return response.json();
    } catch (error) {
      throw new Error(`Request failed with: ${error.message}`);
    }
  }

  async deleteTask(id) {
    const url = `${this.endpoint}/task/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
      },
    };
    let response;
    try {
      response = await fetch(url, options);
      if (!this.checkResponseCode(response.status)) {
        throw new Error("Request failed: ", response.status);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addTask(task) {
    const url = `${this.endpoint}/task`;
    const option = {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response;
    try {
      response = await fetch(url, option);
      if (!this.checkResponseCode(response.status)) {
        throw new Error("Request Failed");
      }
      return response;
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
  async updateStatus(id) {
    const url = `${this.endpoint}/task/${id}`;
    const completeStatus = { isCompleted: true };
    const option = {
      method: "PATCH",
      body: JSON.stringify(completeStatus),
      headers: {
        "Content-type": "application/json",
      },
    };
    let response;
    try {
      response = await fetch(url, option);
      if (!this.checkResponseCode(response.status)) {
        throw new Error(`Request failed`);
      }
      return response;
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async deleteAll() {
    const url = `${this.endpoint}/tasks`;
    const option = {
      method: "DELETE",
    };

    let response;
    try {
      response = await fetch(url, option);
      if (!this.checkResponseCode(response.status)) {
        throw new Error("Request failed", response.status);
      }
      return response;
    } catch (error) {
      throw new Error(`Request failed`, error.message);
    }
  }

  checkResponseCode(statusCode) {
    return statusCode >= 200 && statusCode < 300;
  }
}
