package sesac4_first_project;

import java.util.Scanner;
//import java.util.InputMismatchException;
//import java.util.Arrays;
import java.util.ArrayList;

public class Main {

	public static void main(String[] args) {
	// 1-1. 예외처리
//		int num1 = 5;
//		int num2 = 0;
//		
//		try {
//			System.out.println(num1/num2);
//		}	
//		catch(ArithmeticException e) {
//			System.out.println("0으로 나눌 수 없습니다.");
//		}
//		finally {
//			System.out.println("finally");
//		}
		
	//1-2.예외처리
//		Scanner scanner = new Scanner(System.in);
//		
//		System.out.println("숫자를 입력해주세요.");
//		int num=0; // try안에서 선언되면 catch에서 쓸수 없기 때문에
//		
//		try {
//			num = scanner.nextInt();
//		}
//		catch(InputMismatchException e) {
//			System.out.println("숫자를 입력해야해요.");
//		}
//		
//		System.out.println("숫자" + num);
//		
//		scanner.close();
	//1-3. 예외처리 실습
//		
//		int[] intArray = { 1,2,3,4 };
//		
//		for (int i=0; i< intArray.length; i++) {
//			System.out.println(intArray[i]);
//		}
//		
//		try{
//			System.out.println(intArray[4]);
//		}
//		catch (ArrayIndexOutOfBoundsException e){
//			System.out.println("인덱스가 범위를 벗어났습니다.");
//		}
//------------------------------------------------------------------------------------------
	//3. 클래스
		//같은 패키지(sesac4_first_project)내에 있을 경우 // test는 객체, Test클래스의 인스턴스
//		Test test = new Test(5);
//		System.out.println(test.num);
//		
//		test.testMethod();
	//3-2. 클래스 실습
		Scanner input = new Scanner(System.in);		
		ArrayList <Rectangle> rect1 = new ArrayList<> (); // <Rectangle>객체
//		int i=1;
		while (true) {
			
			System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
			int num1 = input.nextInt();
			int num2 = input.nextInt();
			Rectangle example = new Rectangle(num1);
			example.setWidth(num1);
			example.setHeight(num2);
			
			if (num1 == 0  && num2 ==0) {
				break;
				}
			rect1.add(example);
//			Rectangle.setCount(i++);
			}

		
		for (Rectangle value : rect1) {
			System.out.println("가로 길이는 : " + value.getWidth());
			System.out.println("세로 길이는 : " + value.getHeight());
			System.out.println("넓이는 : " + value.calc());
			System.out.println("--------------------------");
			}
		Rectangle.setCount(rect1.size());
//		System.out.println("Rectangle 인스턴스의 개수는 : " + rect1.size() );
		System.out.println("Rectangle 인스턴스의 개수는 : " + Rectangle.getCount() );		

	}
}

