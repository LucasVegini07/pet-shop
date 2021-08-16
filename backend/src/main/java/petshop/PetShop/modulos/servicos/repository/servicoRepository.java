package petshop.PetShop.modulos.servicos.repository;

import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.servicos.model.servico;

import java.util.List;

public interface servicoRepository extends CrudRepository<servico, Long> {
    servico getById(int id);
    List getByAnimal_Id(int id);

}
