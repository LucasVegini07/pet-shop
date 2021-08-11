package petshop.PetShop.modulos.pessoa.repository;

import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.pessoa.model.funcionario;

import java.util.List;

public interface funcionarioRepository extends CrudRepository<funcionario, Long> {

    List<funcionario> findAllByOrderByIdAsc();
    boolean existsByescopo(String escopo);
    boolean existsByemail(String email);
    funcionario getByEmail(String email);
    funcionario getById(int id);
    funcionario getByCpf(String cpf);

}
