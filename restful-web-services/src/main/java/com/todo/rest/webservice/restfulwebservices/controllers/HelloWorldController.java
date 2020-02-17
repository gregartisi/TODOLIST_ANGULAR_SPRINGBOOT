package com.todo.rest.webservice.restfulwebservices.controllers;


import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.rest.webservice.restfulwebservices.objects.HelloWorldBean;
import com.todo.rest.webservice.restfulwebservices.objects.Task;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {

	
	
	
	@GetMapping(value="/hello")
	public String HelloWorld() {
		return "Hello world!";
	}
	
	@GetMapping(value="/hello/{name}")
	public HelloWorldBean HelloWorldBean(@PathVariable String name) {
		//return new HelloWorldBean(name);
		throw new RuntimeException("Une erreur est survenue!");
	}
	
	
}
