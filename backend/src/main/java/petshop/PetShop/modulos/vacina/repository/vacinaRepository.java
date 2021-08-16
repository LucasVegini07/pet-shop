package petshop.PetShop.modulos.vacina.repository;


import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.remedio.model.remedio;
import petshop.PetShop.modulos.vacina.model.vacina;

import java.util.List;

public interface vacinaRepository extends CrudRepository<vacina, Long > {

    vacina getById(int id);
    vacina getByNome(String nome);
    boolean existsByNome(String nome);
    List<vacina> findAllByOrderByIdAsc();

}
