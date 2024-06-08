package com.todo.Controllers;

import com.todo.Repositories.todoService;
import com.todo.entity.Task;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

// import java.util.Optional;

// import org.aspectj.apache.bcel.generic.RET;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/")
public class todoController {
    @Autowired
    private todoService todoservice;

    @PostMapping(path = "/task")
    public ResponseEntity<Task> addTasks(@RequestBody Task task) {
        System.out.println("Received taskdetail: " + task);
        Task receivedTask =task;
        receivedTask.setIsCompleted(false);
         Task savedTask = todoservice.save(receivedTask);
         return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
         
        }

    @PatchMapping(path = "/task/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") Integer taskId,@RequestBody Task task){
        if(!(todoservice.existsById(taskId))){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        task.setId(taskId);
        Task savedTask = todoservice.partialUpdate(taskId,task);
        return new ResponseEntity<Task>(savedTask, HttpStatus.OK);
    }

    @DeleteMapping("/task/{taskid}")
    public ResponseEntity<String> deleteTask(@PathVariable("taskid") Integer taskId) {
        if (todoservice.existsById(taskId)) {
            todoservice.deleteById(taskId);
            return new ResponseEntity<String>("task deleted Succesfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("Task not found ", HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/tasks")
    public ResponseEntity<String> deleteAll(){
        todoservice.deleteAll();
        return new ResponseEntity<String>("All task is deleted",HttpStatus.OK);
    }

    @GetMapping("/task/{id}")
    public ResponseEntity<?> getTaskById(@PathVariable("id") Integer taskId) {
        if(!todoservice.existsById(taskId)){
            
            return new ResponseEntity<String>("Not Found",HttpStatus.NOT_FOUND);
        }
        Optional<Task> foundTask = todoservice.findOne(taskId);
        return new ResponseEntity<Task>(foundTask.get(),HttpStatus.OK);//the '.get() returns the non-null value'
    }

    @GetMapping(path = "/task")
    public List<Task> getAllTask(){
        List<Task> tasks = todoservice.findAll();
        return tasks.stream()
        .collect(Collectors.toList());
    }
}
