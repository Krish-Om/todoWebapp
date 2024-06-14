# Todo App

This is a simple web application that demonstrates CRUD operations through a backend API. It is built using Java Spring Boot and communicates with JavaScript to display the data on a web page.

## Prerequisites

Before running the application, make sure you have the following installed:

- Java Development Kit (JDK)
- Maven
- MySQL

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/todoWebapp.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo
    ```

3. Build the application using Maven:

    ```bash
    mvn clean install
    ```

4. Run the application:

    ```bash
    java -jar target/todo.jar
    ```

5. Open your web browser and visit [http://localhost:8080](http://localhost:8080) to access the Todo App.

## API Endpoints

The following API endpoints are available:

- `GET /task/{id}`: Get a specific todo by ID
- `GET /task`: Get all todos 
- `POST /task`: Create a new todo
- `PATCH /task/{id}`: Update an existing todo
- `DELETE /task/{id}`: Delete a todo
- `DELETE /tasks`: Delete all todo

## Technologies Used

- Java Spring Boot
- JavaScript
- HTML
- CSS

## Additional Information

- The application requires a MySQL database for storing the todo data.
- You can configure the database connection settings in the `application.properties` file.
- The application uses Maven as the build tool to manage dependencies and build the project.
- The frontend of the application is built using JavaScript, HTML, and CSS.
- Feel free to explore and modify the code to fit your needs.

