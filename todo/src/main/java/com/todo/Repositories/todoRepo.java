package com.todo.Repositories;

import com.todo.entity.Task;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;


public interface todoRepo extends CrudRepository<Task, Integer> {

} 
