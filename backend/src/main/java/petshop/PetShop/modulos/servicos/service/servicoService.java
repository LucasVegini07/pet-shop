package petshop.PetShop.modulos.servicos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.animal.model.animal;
import petshop.PetShop.modulos.animal.repository.animalRepository;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.pessoa.repository.clienteRepository;
import petshop.PetShop.modulos.servicos.model.servico;
import petshop.PetShop.modulos.servicos.repository.servicoRepository;

import java.util.List;

@Service
public class servicoService {

    @Autowired
    servicoRepository servicoRepository ;

    @Autowired
    clienteRepository clienteRepository;

    @Autowired
    animalRepository animalRepository;

    public servico cadastrarService(servico s, cliente cli, animal a){
        cli = clienteRepository.getById(cli.getId());
        a = animalRepository.getById(a.getId());
        s.setCliente(cli);
        s.setAnimal(a);
        return servicoRepository.save(s);
    }
    public List getAllByAnimalId(String animalId){
        return servicoRepository.getByAnimal_Id(Integer.parseInt(animalId));
    }
}
