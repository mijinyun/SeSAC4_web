package sesac.spring.study.sesacProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;

@Controller
public class HelloController {

    @GetMapping("hi")
    public String getHi(Model model) {
        model.addAttribute("text", "hihihi");
        model.addAttribute("utext","<strong>utext</strong>");
        String[] names={"kim","lee","park"};
        model.addAttribute("names",names);

        int age= 15;
        int age2 = 30;
        model.addAttribute("age",age);
        model.addAttribute("age2",age2);
        return "hi";
    }

    @GetMapping("hi/hello")
    public String getHello(Model model) {
        model.addAttribute("text", "hello everyone~~~~");
        return "hi";
    }

//    public void Person (){
////        String name;
////        int age;
//
//        ArrayList<String> nameList = new ArrayList<>(Arrays.asList("kim","lee","hong","park"));
//        ArrayList<Integer> ageList = new ArrayList<>(Arrays.asList(10,20,30,40));
//    }
//    @GetMapping("people")
//    public String getPerson(Model model){
//        model.addAttribute("name",)
//    }



    @GetMapping("api")
    public String getApi(@RequestParam(value="name",required = false) String name, Model model) {
        model.addAttribute("name",name);
        return "api";
    }

    @GetMapping("api2/{n}")
    public String getApi2(@PathVariable("n") String name, Model model) {
        model.addAttribute("name",name);
        return "api";
    }


//    실습

    @GetMapping("introduce/{name}")
    public String getIntroduce(@PathVariable String name, Model model) {
        model.addAttribute("name",name);
        return "introduce";
    }

    @GetMapping("introduce")
    public String getIntroduce2(@RequestParam String name, Integer age, Model model) {
        model.addAttribute("name",name);
        model.addAttribute("age",age);
        return "introduce";
    }

    @GetMapping("api-post")
    public String getApiPost(){
        return "api-post";
    }
    @PostMapping("mvc-post")
    public String postMVC(
            @RequestParam(value="name", required = false) String name,
            @RequestParam(value="age", required = false) String age,
            @RequestParam(value="gender", required = false) String gender,
            @RequestParam(value="hobby", required = false) String hobby,
            Model model) {

        model.addAttribute("name", name);
        model.addAttribute("age", age);
        model.addAttribute("gender", gender);
        model.addAttribute("hobby", hobby);

        return "api";
        }

//    )
}
