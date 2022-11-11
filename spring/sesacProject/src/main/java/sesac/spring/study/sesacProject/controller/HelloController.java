package sesac.spring.study.sesacProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("hi")
    public String getHi(Model model) {
        model.addAttribute("text", "hihihi");
        return "hi";
    }

    @GetMapping("hi/hello")
    public String getHello(Model model) {
        model.addAttribute("text", "hello everyone~~~~");
        return "hi";
    }
}
