package petshop.PetShop.modulos.remedio.repository;

import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.remedio.model.remedio;

import java.util.List;

public interface remedioRepository extends CrudRepository<remedio, Long > {

    remedio getById(int id);
    remedio getByNome(String nome);
    boolean existsByNome(String nome);
    List<remedio> findAllByOrderByIdAsc();

}
