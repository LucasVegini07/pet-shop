package petshop.PetShop.modulos.pessoa.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import petshop.PetShop.modulos.pessoa.model.funcionario;
import petshop.PetShop.modulos.pessoa.service.funcionarioService;

@Controller
@RequestMapping("/api")
public class funcionarioController {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    funcionarioService funcionarioService;

    @PostMapping(value = "/funcionario", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> createFuncionario (
            @RequestParam(value = "funcionario", required = false) String funcionarioString ) throws Exception {
        funcionario funcionario = objectMapper.readValue( funcionarioString, funcionario.class);
        return new ResponseEntity<>(funcionarioService.cadastrarFuncionario(funcionario), HttpStatus.OK);
    }

    @PutMapping(value = "/funcionario", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> editaFuncionario (
            @RequestParam(value = "funcionario", required = false) String funcionarioString ) throws Exception {
        funcionario funcionario = objectMapper.readValue( funcionarioString, funcionario.class);
        return new ResponseEntity<>(funcionarioService.cadastrarFuncionario(funcionario), HttpStatus.OK);
    }

    @PostMapping(value = "/funcionario/login")
    public ResponseEntity<?> login(
            @RequestParam(value = "email") String email, @RequestParam(value = "senha") String senha) throws Exception {
        return new ResponseEntity<>(funcionarioService.autenticaFuncionario(email, senha), HttpStatus.OK);
    }
}
