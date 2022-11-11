package sesac4_first_project;

public abstract class Student2 {
	private String name;
	private String school;
	private int age;
	private int classNum;
	
	
	public Student2 (String name, String school, int age, int classNum) {
		this.name = name;
		this.school = school;
		this.age = age;
		this.classNum = classNum;
	}

	public abstract void todo();

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getSchool() {
		return school;
	}


	public void setSchool(String school) {
		this.school = school;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public int getClassNum() {
		return classNum;
	}


	public void setClassNum(int classNum) {
		this.classNum = classNum;
	}
	
	
}
