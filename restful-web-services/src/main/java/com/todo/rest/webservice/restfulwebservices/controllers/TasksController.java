package com.todo.rest.webservice.restfulwebservices.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.rest.webservice.restfulwebservices.objects.Task;
import com.todo.rest.webservice.restfulwebservices.services.TasksService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TasksController {

	@Autowired
	private TasksService tasksService;
	
	@GetMapping(value="/tasks/{idTask}")
	public Task getTask(@PathVariable Long idTask) {
		
		return tasksService.getTask(idTask);
	}
	
	@GetMapping("/users/{user}/tasks")
	public List<Task> getTasks(@PathVariable Long user){
		//Appel au service de recuperation des taches
		System.out.println(user);
		return tasksService.getTasksByUser(user);
	}
	
	@DeleteMapping("/tasks/{idTask}/remove")
	public Task removeTasks(@PathVariable Long idTask){
		System.out.println("removeTask "+idTask); 
		//Appel au service de supression des taches
		tasksService.removeTask(idTask);
		return null;
		
	}
	
	@PostMapping("/tasks/save") 
	public Task createTask(@RequestBody Task task){
		//Appel au service de creation des taches
		System.out.println("Save "+task);
		return tasksService.createTask(task);
	}
	
	@PutMapping("tasks/update")
	public Task updateTask(@RequestBody Task task) {
		//update task
		System.out.println("UPDATE "+task);
		return tasksService.updateTask(task); 
	}
	
}
