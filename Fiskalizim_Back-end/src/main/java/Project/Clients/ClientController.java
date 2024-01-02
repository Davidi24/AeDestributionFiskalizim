package Project.Clients;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ClientController {
    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping("/getClients")
    public ResponseEntity<String> getClients() {

        List<Client> clients = clientService.getAllClients();
        try {
            String clientsJson = objectMapper.writeValueAsString(clients);
            return ResponseEntity.status(HttpStatus.OK).body(clientsJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace(); // Handle the exception based on your needs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error converting to JSON");
        }
    }

    @GetMapping("/getVatnumbers")
    public ResponseEntity<String> getClientsVatnumbers() {

        List<String> clients = clientService.getAllClientsVatNumbers();
        try {
            String clientsJson = objectMapper.writeValueAsString(clients);
            return ResponseEntity.status(HttpStatus.OK).body(clientsJson);
        } catch (JsonProcessingException e) {
            e.printStackTrace(); // Handle the exception based on your needs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error converting to JSON");
        }
    }


}
