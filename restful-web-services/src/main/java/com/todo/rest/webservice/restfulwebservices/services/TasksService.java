package com.todo.rest.webservice.restfulwebservices.services;


import java.util.List;

import com.todo.rest.webservice.restfulwebservices.objects.Task;

public interface TasksService {

	public List<Task> getTasksByUser(Long idUser);
	public void removeTask(Long idTask);
	public Task getTask(Long idTask);
	public Task createTask(Task task);
	public Task updateTask( Task task);


}
