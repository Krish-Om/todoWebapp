# Todo App

This is a simple web application that demonstrates CRUD operations through a backend API. It is built using Java Spring Boot and communicates with JavaScript to display the data on a web page.

## Prerequisites

Before running the application, make sure you have the following installed:

- Java Development Kit (JDK)
- Maven

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/todo-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

3. Build the application using Maven:

    ```bash
    mvn clean install
    ```

4. Run the application:

    ```bash
    java -jar target/todo-app.jar
    ```

5. Open your web browser and visit [http://localhost:8080](http://localhost:8080) to access the Todo App.

## API Endpoints

The following API endpoints are available:

- `GET /api/todos`: Get all todos
- `GET /api/todos/{id}`: Get a specific todo by ID
- `POST /api/todos`: Create a new todo
- `PUT /api/todos/{id}`: Update an existing todo
- `DELETE /api/todos/{id}`: Delete a todo

## Technologies Used

- Java Spring Boot
- JavaScript
- HTML
- CSS

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


