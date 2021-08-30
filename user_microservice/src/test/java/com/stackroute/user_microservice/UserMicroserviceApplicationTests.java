//package com.stackroute.user_microservice;
//
//import com.stackroute.user_microservice.Enum.AcessLevel;
//import com.stackroute.user_microservice.Enum.SocialProvider;
//import com.stackroute.user_microservice.Enum.UserRole;
//import com.stackroute.user_microservice.model.User;
//import com.stackroute.user_microservice.repository.UserRepository;
//import com.stackroute.user_microservice.service.UserService;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.mockito.InjectMocks;
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.when;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.util.Date;
//import java.util.UUID;
//
//@SpringBootTest
//public class UserMicroserviceApplicationTests {
//
//    private User user;
//    @Mock
//    private UserRepository userRepository;
//    @InjectMocks
//    private UserService userService;
// //String user_id, String username, String email, String avatar, SocialProvider organization,
// // Date updatedOnTS, String updatedBy, AcessLevel accessLevel, String paymentMethod, String transactionID
//    @Before
//    public void setUp() throws Exception {
//
//        MockitoAnnotations.initMocks(this);
//        user = new User(UUID.randomUUID(), "John", "john@gmail.com", UserRole.ASSESSOR, "ggggggggvg", SocialProvider.GOOGLE,
//                new Date(), "John", AcessLevel.COMMUNITY, null, null);
//        user.setUserId(UUID.randomUUID());
//        user.setUsername("John");
//        user.setEmail("john@gmail.com");
//        user.setUserRole(UserRole.ASSESSOR);
//        user.setAvatar("ggggggggvg");
//        user.set
//
//
//    }
//
//
//
//    @Test
//    public void saveUserSuccess(){
//            when(userRepository.save((User) any())).thenReturn(user);
//            User savedCategory = userService.saveUser(user);
//            Assert.assertEquals(user, savedCategory);
//
//        }
//	}


