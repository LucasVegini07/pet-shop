package petshop.PetShop.modulos.pessoa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import petshop.PetShop.modulos.pessoa.model.funcionario;
import petshop.PetShop.modulos.pessoa.repository.funcionarioRepository;
import petshop.PetShop.modulos.pessoa.repository.pessoaRepository;

import java.util.List;

@Service
public class funcionarioService {

    @Autowired
     funcionarioRepository funcionarioRepository;

    @Autowired
    pessoaRepository pessoaRepository;

    public funcionario cadastrarFuncionario(funcionario f){
        return funcionarioRepository.save(f);
    }

    public funcionario editaFuncionario(funcionario f){
        return funcionarioRepository.save(f);
    }

    public int autenticaFuncionario(String email, String senha){
        if(funcionarioRepository.existsByemail(email)){
            funcionario f = funcionarioRepository.getByEmail(email);
            if(f.getSenha().equals(senha))
                return f.getId();
        }
        return 0;
    }

    public funcionario getFuncionarioByEmail(String email){
        funcionario f = funcionarioRepository.getByEmail(email);
        return f;
    }

    public funcionario getFuncionarioById(int id){
        funcionario f = funcionarioRepository.getById(id);
        return f;
    }

    public List<funcionario> getAllFuncionarios() {
        return funcionarioRepository.findAllByOrderByIdAsc();
    }

}
