package sesac4_first_project;

import second.Second;

public class Test {
	//num : 필드
	public int num;
	public String str = "문자열";
	
	//메소드 형태 void : 반환값이 없을 때, 반환값이 있으면 return이 있어야하고 반환될 자료형을 써주면 됨.
//	public void test() {
//		System.out.println("test 메소드");
//	}
	
	//메소드 안에서 생성자
	public Test(int num) { //5번째줄 num이랑은 다른것.
//		num = 1;
//		this.num : 5번째줄의 num
		this.num = num; //메소드에서 생성되는 num (가장 가까운 num을 가져오는 것)
		
	}
	public void testMethod() {
		
		Second sec = new Second();
//		int a = sec.num; // protected 로 되어있어서 못가져옴. 오류
		
		System.out.println("test");
	}
}
