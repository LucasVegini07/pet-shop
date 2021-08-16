package petshop.PetShop.modulos.remedio.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petshop.PetShop.modulos.remedio.model.remedio;
import petshop.PetShop.modulos.remedio.service.remedioService;

@RequestMapping("/api")
@RestController
public class remedioController {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    remedioService remedioService;

    @PostMapping(value = "/remedio", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> criarRemedio (
            @RequestParam(value = "remedio", required = false) String remedioString
    ) throws Exception {
        remedio remedio = objectMapper.readValue( remedioString, remedio.class);
        return new ResponseEntity<>(remedioService.cadastrarRemedio(remedio), HttpStatus.OK);
    }

    @PutMapping(value = "/remedio", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> atualizarRemedio (
            @RequestParam(value = "remedio", required = false) String remedioString) throws Exception {
        remedio remedio = objectMapper.readValue( remedioString, remedio.class);
        return new ResponseEntity<>(remedioService.atualizaRemedio(remedio), HttpStatus.OK);
    }

    @GetMapping(value = "/remedio", produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> getRemedios () {
        return new ResponseEntity<>(remedioService.getRemedios(), HttpStatus.OK);
    }



}
