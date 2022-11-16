package sesac.spring.study.sesacProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.study.sesacProject.dto.FormDTO;
import sesac.spring.study.sesacProject.dto.PersonDTO;
import vo.PersonVO;

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
//    @PostMapping("mvc-post")
//    //@ResponseBody // 이걸 써주면 view를 렌더링하는게 아니라 값으로 응답을 해주는 것!
//    // 즉, return하는 것이 view파일이아니라 result라는 글자!를 보내주는것. 즉, axios에서 response.data해서 받은 것이 바로 이 친구
//
//    public String postMVC(
//            @RequestParam(value="name", required = false) String name,
//            @RequestParam(value="age", required = false) String age,
//            @RequestParam(value="gender", required = false) String gender,
//            @RequestParam(value="hobby", required = false) String hobby,
//            @RequestParam(value="year", required = false) Integer year,
//            @RequestParam(value="month", required = false) Integer month,
//            @RequestParam(value="day", required = false) Integer day,
//            Model model) {
//
//        model.addAttribute("name", name);
//        model.addAttribute("age", age);
//        model.addAttribute("gender", gender);
//        model.addAttribute("hobby", hobby);
//        model.addAttribute("year", year);
//        model.addAttribute("month", month);
//        model.addAttribute("day", day);
//
//        return "api";
//        }



        //DTO

    @GetMapping("dto")
    @ResponseBody
    public PersonDTO getDto(PersonDTO person) {
        return person;
        //파라미터로 받은 것을 그대로 return중! //Person클래스에서 setName, setAge되어있던 정보를 파라미터로 받아오는 것.
    }

//    class Person { //이것을 클래스를 따로 만들어서 빼주면 이용하기가 더 편해짐.
//        private String name;
//        private int age;
//        public String getName() { return name; }
//        public  void setName(String name) { this.name = name;}
//
//        public int getAge() { return age; }
//        public  void setAge(int age) { this.age = age;}
//    }

    @PostMapping("mvc-post")
    @ResponseBody
    public FormDTO getFormDto(FormDTO form) {
        return form;
    } // 일반 폼전송을 DTO 방식으로 전송 , 동적 폼전송을 DTO방식으로 전송


    //-------------------------------------------------------------------------------------//

    // 파라미터로 리퀘스트로 받냐 dto로 받냐
    // 일반 폼전송은 리퀘스트 , dto 다 잘 받음.
    // 동적 폼전송은
    //requestParam
    //dto방식
    @GetMapping("form")
    public String getForm() {
        return "form";
    }

    @PostMapping("form-param1")
    public String postForm1(@RequestParam String name, @RequestParam String gender, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }
    // 일반 form 전송, RequestParam
    @PostMapping("form-param2")
    public String postForm2(@RequestParam String name, @RequestParam String gender, Model model) {
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        return "result";
    }


//    @PostMapping("form-dto1")
//    public String postDto1(PersonDTO person, Model model) {
//        model.addAttribute("name", person.getName());
//        model.addAttribute("gender", person.getGender());
//        return "result"; //파일이 렌더링 됨. axios는 result.axios를 읽어서 view 파일을 렌더링해서 보여준 것. html구조가 다 보임.
//    }

    @PostMapping("form-dto1")
    @ResponseBody // 이러면 어플리케이션.json파일로 들어오는 것. -> 이러면 @RequesetBody를 붙여서 PersonDTO 해줘야함.
    public PersonDTO postDto1(@RequestBody PersonDTO person, Model model) {
//        model.addAttribute("name", person.getName());
//        model.addAttribute("gender", person.getGender());
        return person;
        //전달받은 dto를 리턴하도록 변경. 위 코드와 다르게 전송받은 데이터 결과 person을 보여주는 것.
        //@RequestBody는 json파일이 아닐경우 실행이 되지 않음?(라?) --그렇기 떄문에 RequestParams를 사용한 곳에서는 실행이 안되는 것임.

    }
    @PostMapping("form-dto2")
    public String postDto2(PersonDTO person, Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }



    @PostMapping("form-vo1")
    @ResponseBody // @RequestBody 이러면 어플리케이션.json 데이터타입으로 들어오는 것. -> 이러면 @RequesetBody를 붙여서 PersonDTO 해줘야함.
    public PersonVO postVo1(@RequestBody PersonVO person, Model model) {
        return person;
        //@RequestBody는 json 데이터타입이 아닐경우 실행이 되지 않음?(라?)
    }
    @PostMapping("form-vo2")
    public String postVo2(PersonVO person, Model model) {
        model.addAttribute("name", person.getName());
        model.addAttribute("gender", person.getGender());
        return "result";
    }
    // 일반 폼전송 - VO는 setter가 없기때문에 일반폼전송하였을 때 입력한 값이 설정되지 않음.
    // 그렇기 때문에 getName을 하여도 값이 빈값으로 나타난것.


}
