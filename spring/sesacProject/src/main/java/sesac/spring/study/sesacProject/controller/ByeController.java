package sesac.spring.study.sesacProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ByeController {

    @GetMapping("Bye")
    public String getBye(Model model){
        model.addAttribute("text", "Bye~~~");
        return "bye";
    }

    @GetMapping("Bye/GoodBye")
    public String getGoodBye(Model model){
        model.addAttribute("text", "집에 갈래용");
        return "bye";
    }
}
