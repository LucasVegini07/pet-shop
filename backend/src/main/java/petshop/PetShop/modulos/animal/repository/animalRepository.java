package petshop.PetShop.modulos.animal.repository;

import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.animal.model.animal;

import java.util.List;

public interface animalRepository extends CrudRepository<animal, Long> {

    animal getById(int id);
    List getByCliente_Id(int id);}
