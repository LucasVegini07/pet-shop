package petshop.PetShop.modulos.consulta.repository;


import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.consulta.model.consulta;

public interface consultaRepository extends CrudRepository<consulta, Long> {
    consulta getById(int id);
}
