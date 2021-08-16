package petshop.PetShop.modulos.pessoa.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import petshop.PetShop.modulos.pessoa.model.cliente;
import petshop.PetShop.modulos.pessoa.service.clienteService;

@Controller
@RequestMapping("/api")
public class clienteController {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    clienteService clienteService ;

    @PostMapping(value = "/cliente", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> cadastrarCliente (
            @RequestParam(value = "cliente", required = false) String clienteString) throws Exception {
        cliente clienteJson = objectMapper.readValue( clienteString, cliente.class);
        return new ResponseEntity<>(clienteService.cadastrarCliente(clienteJson) , HttpStatus.OK);
    }

    @PutMapping(value = "/cliente", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> editaCliente (
            @RequestParam(value = "cliente", required = false) String clienteString) throws Exception {
        cliente clienteJson = objectMapper.readValue( clienteString, cliente.class);
        return new ResponseEntity<>(clienteService.editaCliente(clienteJson) , HttpStatus.OK);
    }

    @PostMapping(value = "/cliente/login")
    public ResponseEntity<?> login(
            @RequestParam(value = "email") String email, @RequestParam(value = "senha") String senha) throws Exception {
        return new ResponseEntity<>(clienteService.autenticaCliente(email, senha), HttpStatus.OK);
    }
}
