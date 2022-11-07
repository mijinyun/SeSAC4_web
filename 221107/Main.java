package sesac4_first_project;

import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;

public class Main {
	
//	public static int number() {
//		return 5;
//	}
//	
//	public static void hello() {
//		System.out.println("hello");
//	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
//		System.out.print("안녕하세요");
//		
//		boolean logic = true;
//		
//		char ch = 'A';
//		
//		int number = 1234;
//		
//		double number2 = 5.6;
//		
//		System.out.println(logic);
//		System.out.println(ch);
//		System.out.println(number);
//		System.out.println(number2);
//		
//		String str = "메롱";
//		String str2 = new String("바보");
//------------------------------------------------------------		
//		System.out.println("이름, 나이, 키, 결혼 여부를 입력해주세요.");
//		//윤미진 99 166.5 false 이렇게 넣는다고 생각해보자.
//		
//		Scanner scanner = new Scanner(System.in);
//		
//		String name = scanner.next();
//		int age = scanner.nextInt();
//		double height = scanner.nextDouble();
//		boolean marry = scanner.nextBoolean();
//		
//		System.out.println(name);
//		System.out.println(age);
//		System.out.println(height);
//		System.out.println(marry);
//		
//		scanner.close();
//------------------------------------------------------------
		
//		double a = 10.0;
//		double b = 3.0;
//		System.out.println(a/b);
//		
//		int c = 5;
//		int d = 2;
//		System.out.println(c/d);
		
//------------------------------------------------------------		

//		System.out.println("이름을 입력하세요.");
//		
//		Scanner input = new Scanner(System.in);
//		String name = input.nextLine();
//		
//		System.out.println("나이를 입력하세요.");
//		
//		Scanner input2 = new Scanner(System.in);
//		int age = input2.nextInt();
//		
//		System.out.println("안녕하세요! " + name + "님(" + age + "세)");
//		input.close();
//		input2.close();
//----------------------------------------------------------------
		
//		int number = 9;
//		if (number % 3 == 0) System.out.println("3의 배수");
//		else System.out.println("3의 배수가 아닙니다.");

		// 위 if문과 switch는 동일함.
		
//		switch(number%3) {
//			case 0:
//				System.out.println("3의 배수");
//				break;
//			default:
//				System.out.println("3의 배수가 아닙니다.");
//		}
		
//----------------------------------------------------------
//		String str = "홍길동";
//		
//		if (str.equals("홍길동")) System.out.println("남자");
//		else System.out.println("여자");
//		
//		switch(str) {
//			case "홍길동":
//				System.out.println("남자");
//				break;
//			default :
//				System.out.println("여자");
//		}
//-------------------------------------------------------------		
//		
//		int i;
//		for (i=0; i<10; i++) {
//			System.out.print(i + " ");
//		}
//		
//		int i=0;
//		while (i<10) {
//			System.out.print(i + " ");
//			i++;
//		}

//		int j = 10;
//		do {
//			System.out.print(j + " ");
//			j++;
//		}
//		while (j<10);
//------------------------------------------------------------
//		Scanner num = new Scanner(System.in);
//		
//		while (true) {
//			System.out.println("숫자를 입력하세요. 0을 입력하면 종료");
//			int number = num.nextInt();
//			
//			if (number == 0) break;
//		}
//--------------------------------------------------------------
//		hello();
//		int a = number();
//		System.out.println(a);
//--------------------------------------------------------------
//		Scanner input = new Scanner(System.in);
//		System.out.println("나이를 입력하세요.");
//		int age = input.nextInt();
//		
//		if ( age >=1 && age <=7 ) System.out.println("유아");
//		else if ( age >=8 && age <= 13) System.out.println("초등학생");
//		else if ( age >=14 && age <= 16) System.out.println("중학생");
//		else if ( age >=17 && age <= 19) System.out.println("고등학생");
//		else System.out.println("성인");
//---------------------------------------------------------------
//		Scanner input = new Scanner(System.in);
//		System.out.println("이름을 입력하세요.");
//		
//		String name = input.next();
//		
//		if ( name.equals("홍길동")) System.out.println("남자");
//		else if ( name.equals("성춘향")) System.out.println("여자");
//		else System.out.println("모르겠어요.");
//----------------------------------------------------------------
//		Scanner number = new Scanner(System.in);
//		System.out.println("숫자를 입력하세요");
//		
//		int num = number.nextInt();
//		int i = 1;
//		while (i < num+1 ) {
//			System.out.print(i + " ");
//			i++;
//		}
//----------------------------------------------------------------
//		Scanner number = new Scanner(System.in);
//		System.out.println("숫자 두 개를 입력하세요");
//		
//		double num = number.nextDouble();
//		double num2 = number.nextDouble();
//		
//		System.out.println("덧셈 결과 : " + (num + num2) );
//		System.out.println("뺄셈 결과 : " + (num - num2) );
//		System.out.println("나눗셈 결과 : " + (num / num2) );
//		System.out.println("곱셈 결과 : " + (num * num2) );
//		
//		number.close();
//-----------------------------------------------------------------
//		
//		int[] intArray = new int[2];
//		
//		intArray[0] = 1;
//		intArray[1] = 2;
//		
//		int[] intArray2 = { 1, 2 };  //이렇게 초기화까지 동시에 가능
		
//		for (int i=0; i <intArray2.length; i++) {
//			if(i==0) System.out.print("[");
//			
//			System.out.print(intArray2[i]);		
//			
//			if(i==intArray2.length-1) System.out.println("]");
//			else System.out.print(", ");
//		}
//
//		for (int value: intArray2) {
//			System.out.print(value);
//		}
//		
//		
//		System.out.println(Arrays.toString(intArray));
//-------------------------------------------------------------------
//		ArrayList<Integer> arrayList1 = new ArrayList<>();
//		ArrayList<Integer> arrayList2 = new ArrayList<>();
//		
//		for (int i=0; i<5; i++) {
//			arrayList2.add(i);
//			// [ 0,1,2,3,4]
//		}
//		
//		arrayList1.add(1);
//		// [ 1 ]
//		arrayList1.add(2);
//		// [ 1, 2]
//		arrayList1.add(0,3);
//		// [ 3, 1, 2]
//		arrayList1.addAll(arrayList2);
//		// [ 3, 1, 2, 0, 1, 2, 3, 4 ]
//				
//		arrayList1.remove(2);
//		// [ 3, 1, 0, 1, 2, 3, 4 ]
//
//		arrayList1.clear();
//		// []
//		
//		for (int value : arrayList1) {
//			System.out.print(value + " ");
//		}
//		
//		System.out.println("\n" + arrayList1.size());
//		System.out.println(arrayList1.get(3));
//		System.out.println(arrayList1.indexOf(1));
//		System.out.println(arrayList1.indexOf(8));
//------------------------------------------------------------------


		ArrayList<String> arrayList1 = new ArrayList<>();
		
		Scanner texts = new Scanner(System.in);
//		String text = texts.next();
		
		while (true) {
			System.out.println("문자를 입력해주세요. :");
			String text = texts.next();
			if (text.equals("exit")) {
				break;
				} else arrayList1.add(text);
			}
		
		for (String value : arrayList1) {
			System.out.print(value + "\n");
			}
		}
	}

