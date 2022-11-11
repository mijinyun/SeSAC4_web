package sesac4_first_project;


public class Rectangle {
	private int width;
	private int height;

//	private static double pi = 3.14;
//	public static double getPi() {
//		return pi;
//	}
	private static int count = 0;
	
	public static int getCount() {
		return count;
	}
	public static void setCount(int num) {
		count = num;
	}
	
	
	public Rectangle (int width) {
//		count++; //쌤방식
		this.width = width;
//		this.height = height;
	}
	
	public int calc() {
		return width * height;
	}
	
	
	public void setWidth(int width) {
		this.width = width;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public int getWidth() {
		return width;
	}
	
	public int getHeight() {
		return height;
	}
}
