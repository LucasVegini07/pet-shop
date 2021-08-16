package petshop.PetShop.modulos.consulta.repository;


import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.consulta.model.consulta;

import java.util.List;

public interface consultaRepository extends CrudRepository<consulta, Long> {
    consulta getById(int id);
    List getByAnimal_Id(int id);
    List findAllByOrderByDataAsc();

}
