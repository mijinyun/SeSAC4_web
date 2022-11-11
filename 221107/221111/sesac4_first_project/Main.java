package sesac4_first_project;

//import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
//		Student stu = new Student(20, "윤미진");
//		stu.setSchool("새싹대학교");
//		stu.setAge(21);
//		
//		System.out.println(stu.getAge()); //getAge는 Person에 있는 메소드지만 상속받았기 때문에 사용가능!
//		System.out.println(stu.getSchool());

		Kim kim = new Kim("미진","새싹대",22,20);
		Break seo = new Break("서영","새싹대",20,22);
		
		System.out.println(kim.getName() + "/" + kim.getSchool() + "/" + kim.getAge() + "세/" +  kim.getClassNum()+ "학번");
		kim.todo();
		System.out.println(seo.getName() + "/" + seo.getSchool() + "/" + seo.getAge() + "세/" +  seo.getClassNum()+ "학번");
		seo.todo();
	}
}

