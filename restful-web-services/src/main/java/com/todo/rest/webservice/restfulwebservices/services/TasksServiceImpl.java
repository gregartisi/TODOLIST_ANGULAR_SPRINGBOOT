package com.todo.rest.webservice.restfulwebservices.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.rest.webservice.restfulwebservices.DAO.TaskRepository;
import com.todo.rest.webservice.restfulwebservices.objects.Task;

@Service
public class TasksServiceImpl implements TasksService{

	@Autowired
	private TaskRepository taskRepository;
	private  List<Task> tasks = new ArrayList<Task>();
	
	
	public List<Task> getTasksByUser(Long idUser){
		
		tasks = taskRepository.findByUserId(idUser);
		return tasks;
	}
	
	public void removeTask(Long idTask){
		
		System.out.println("remove "+idTask);
		taskRepository.deleteById(idTask);
		
	}
	
	public Task getTask(Long idTask){
		return taskRepository.findById(idTask).get(); 
	}
	
	public Task createTask(Task task){
		System.out.println("taskServiceSave "+task);
		taskRepository.save(task);
		return task;
		
	}
	
	public Task updateTask(Task task){
		taskRepository.save(task);
		return task;
	}
}
