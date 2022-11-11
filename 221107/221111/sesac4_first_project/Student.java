package sesac4_first_project;

public abstract class Student extends Person {
	private String school;
	
	public void printName() {
		System.out.println(getName());
	}

	public Student(int age , String name) {
		super(); // 부모 클래스를 호출하는 방법.
//		super(int age); //이렇게 해줄 경우, 아래 setAge()이게 필요없음~
		// 부모 클래스의 멤버에 접근 가능~! Person에 있는 setAge, setName! 상속을 받았기때문에 사용가능.
		setAge(age);
		setName(name);
	}
	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

}
