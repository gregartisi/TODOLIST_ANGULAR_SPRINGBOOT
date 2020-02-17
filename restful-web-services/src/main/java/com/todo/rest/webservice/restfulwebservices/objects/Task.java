package com.todo.rest.webservice.restfulwebservices.objects;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Task {

	@Id
	@GeneratedValue
	private Long id;
	private String definition;
	private Date deadline;
	private Boolean done;
	private Long userId;
	
	
	
	
	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Task(Long id,Long userId, String definition, Date deadline, Boolean done) {
		super();
		this.id = id;
		this.setUserId(userId);
		this.definition = definition;
		this.deadline = deadline;
		this.done = done;
	}


	public String getDefinition() {
		return definition;
	}
	
	public void setDefinition(String definition) {
		this.definition = definition;
	}
	
	public Date getDeadline() {
		return deadline;
	}
	
	public void setDeadline(Date deadline) {
		this.deadline = deadline;
	}
	
	public boolean isDone() {
		return done;
	}
	
	public void setDone(boolean done) {
		this.done = done;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Long getUserId() {
		return userId;
	}


	public void setUserId(Long userId) {
		this.userId = userId;
	}


	@Override
	public String toString() {
		return "Task [id=" + id + ", definition=" + definition + ", deadline=" + deadline + ", done=" + done
				+ ", userId=" + userId + "]";
	}



	
	
}
