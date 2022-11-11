package sesac4_first_project;

public abstract class Person {
	private int age;
	private String name;
	
	public Person () {
		//여기서 매개변수를 받으면 상속받는 자식클래스 super()에 매개변수를 적어줘야함.
	}
	
//	public Person (String name) {
//		this.name = name; //이렇게 매개변수를 받게되면 student클래스에서~~
//	}
	
	public int getAge() {
		return age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public abstract void printName();
}
