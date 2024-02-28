package Project.Login;

import Project.Users.User;
import Project.Users.UserRepository;
import ch.qos.logback.core.joran.sanity.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LoginService {
    private final UserRepository userRepository;

    @Autowired
    public LoginService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public ArrayList<Object> validateUserCredentials(String username, String password) {

        Optional<User> userOptional = userRepository.findByUsername(username);
        List<Map.Entry<String, User>> list = new ArrayList<>();
        ArrayList<Object> mixedList = new ArrayList<>();
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            if (user.getPassword().equals(password)) {
                mixedList.add("Credentials are valid!");
                mixedList.add(user);
                list.add(new AbstractMap.SimpleEntry<>("Credentials are valid!", user));
            } else {
                mixedList.add("Password does not exist");
                list.add(new AbstractMap.SimpleEntry<>("Password does not exist", null));
            }
        } else {
            mixedList.add("User does not exist");
            list.add(new AbstractMap.SimpleEntry<>("User does not exist", null));
        }
        return mixedList;
    }
}
