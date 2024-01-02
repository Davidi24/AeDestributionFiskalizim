package Project.Login;

import Project.Users.User;
import Project.Users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    private final UserRepository userRepository;

    @Autowired
    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String validateUserCredentials(String username, String password) {

       Optional<User> userOptional =  userRepository.findByUsername(username);

         if (userOptional.isPresent()) {
             User user = userOptional.get();
             if(user.getPassword().equals(password)){
                 return "Credentials are valid!";
             }else {
                 return "Password does not exist";
             }
         }

        return "Username does not exist!!";
    }
}
