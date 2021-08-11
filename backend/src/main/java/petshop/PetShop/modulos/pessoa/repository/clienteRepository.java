package petshop.PetShop.modulos.pessoa.repository;

import org.springframework.data.repository.CrudRepository;
import petshop.PetShop.modulos.pessoa.model.cliente;

public interface clienteRepository extends CrudRepository<cliente, Long> {

    cliente getById(int id);
    cliente getByCpf(String cpf);
    boolean existsByCpf(String cpf);
    boolean existsByemail(String email);
    cliente getByEmail(String email);

}
