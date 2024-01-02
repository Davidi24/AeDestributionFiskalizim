package Project.Faturat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<String> getFaturant(@RequestParam String vatNumber) {
        List<Fatura> faturat = faturaService.getAllFaturat(vatNumber);
        String clientsJson = "";
        try {
            clientsJson = objectMapper.writeValueAsString(faturat);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(clientsJson);
    }
}
