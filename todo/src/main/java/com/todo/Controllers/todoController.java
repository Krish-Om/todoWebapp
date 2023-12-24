package com.todo.Controllers;

import com.todo.Repositories.todoRepo;
import com.todo.entity.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;

@RestController
@RequestMapping("/")
public class todoController {

    @Autowired
    private todoRepo todorepo;

    @PostMapping(path = "/addTask")
    public @ResponseBody Task addTasks(@RequestParam String taskDetail){
        System.out.println("Received taskdetail: " + taskDetail);
        Task tasks = new Task();
        tasks.setTaskDetail(taskDetail);
        tasks.setIsCompleted(false);
        todorepo.save(tasks);
        return tasks;
    }

    @DeleteMapping("allTask/deleteTask{taskid}")
    public ResponseEntity<String> deleteTask(@PathVariable int TaskId)
    {
        if(todorepo.existsById(TaskId)){
            todorepo.deleteById(TaskId);
            return new ResponseEntity<>("task deleted Succesfully", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Task not found to be deletd", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path ="/allTask")
    public @ResponseBody Iterable<Task> getAllTask(){
        return todorepo.findAll();
    }


}
