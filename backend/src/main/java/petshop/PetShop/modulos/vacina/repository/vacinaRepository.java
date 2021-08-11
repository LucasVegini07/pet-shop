package petshop.PetShop.modulos.vacina.repository;


import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.vacina.model.vacina;

public interface vacinaRepository extends CrudRepository<vacina, Long > {

    vacina getById(int id);
    vacina getByNome(String nome);
    boolean existsByNome(String nome);

}
