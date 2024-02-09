package Project.Faturat;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Slice;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping
public class FaturaController {

    private final FaturaService faturaService;

    @Autowired
    public FaturaController(FaturaService faturaService) {
        this.faturaService = faturaService;
    }

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/getFaturat")
    public ResponseEntity<String> getFaturant(
            @RequestParam String vatNumber,
            @RequestParam int page,
            @RequestParam int size
    ) {
        Page<Fatura> faturat =  faturaService.getFaturat(vatNumber, page, size);
        String clientsJson = "";
        try {
            clientsJson = objectMapper.writeValueAsString(faturat);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(clientsJson);
    }

 

}
