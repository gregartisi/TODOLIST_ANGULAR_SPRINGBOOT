package com.todo.rest.webservice.restfulwebservices.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todo.rest.webservice.restfulwebservices.objects.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{

	List<Task> findByUserId(Long idUser);

}
