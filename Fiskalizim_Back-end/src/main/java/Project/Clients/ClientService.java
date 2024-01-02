package Project.Clients;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;
    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public  List<Client> getAllClients(){
        List<Client> clients = clientRepository.findAll();
        return clients;
    }

    public  List<String> getAllClientsVatNumbers(){
        List<String> clients = clientRepository.findAllVatNumbers();
        return clients;
    }


}
