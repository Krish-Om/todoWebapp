package com.todo.Repositories;

import java.util.List;
import java.util.Optional;

import com.todo.entity.Task;

public interface todoService {
    Task partialUpdate(Integer id, Task task);
    Task save(Task tas);
    boolean existsById(Integer taskId);
    void deleteById(Integer taskId);
    List<Task> findAll();
    Optional<Task> findOne(Integer taskId);
    void deleteAll();
}
