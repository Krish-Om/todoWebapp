package com.todo.Repositories;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.entity.Task;

@Service
public class todoSerImpl implements todoService{
    @Autowired
    private final todoRepo repo;

    public todoSerImpl(todoRepo repo){
        this.repo = repo;
    }

    @Override
    public Task partialUpdate(Integer taskId,Task task){
        task.setId(taskId);
        return repo.findById(taskId).map(exsitingTask ->{
            Optional.ofNullable(task.getIsCompleted()).ifPresent(exsitingTask::setIsCompleted);
            Optional.ofNullable(task.getTaskDetail()).ifPresent(exsitingTask::setTaskDetail);
            return repo.save(exsitingTask);
        }).orElseThrow(()->new RuntimeException("Task doesn't exsits"));
    }

    @Override
    public Task save(Task task) {
        return repo.save(task);
    }

    @Override
    public boolean existsById(Integer taskId) {
        return repo.existsById(taskId);
    }

    @Override
    public void deleteById(Integer taskId) {
        repo.deleteById(taskId);
    }

    @Override
    public List<Task> findAll() {
        return StreamSupport.stream(repo.findAll().spliterator(), false)
                            .collect(Collectors.toList());
    }

    @Override
    public Optional<Task> findOne(Integer taskId) {
        return repo.findById(taskId);
    }

    @Override
    public void deleteAll() {
        repo.deleteAll();
    }
}