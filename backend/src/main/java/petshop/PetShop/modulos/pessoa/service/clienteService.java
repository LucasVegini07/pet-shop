package petshop.PetShop.modulos.pessoa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.pessoa.repository.clienteRepository;
import petshop.PetShop.modulos.pessoa.repository.pessoaRepository;

@Service
public class clienteService {

    @Autowired
    clienteRepository clienteRepository;

    @Autowired
    pessoaRepository pessoaRepository;

    public cliente cadastrarCliente(cliente c) { return clienteRepository.save(c);}

    public cliente editaCliente(cliente c) { return clienteRepository.save(c);}

    public cliente getClienteByCPF(String cpf) {
        cliente c = clienteRepository.getByCpf(cpf);
        return c;
    }

    public int autenticaCliente(String email, String senha){
        if(clienteRepository.existsByemail(email)){
            cliente c = clienteRepository.getByEmail(email);
            if(c.getSenha().equals(senha))
                return c.getId();
        }
        return 0;
    }


}
