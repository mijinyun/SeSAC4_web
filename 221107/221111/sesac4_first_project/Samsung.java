package sesac4_first_project;

public class Samsung implements Phone {
	
	@Override //이건 없어도 상관없음.
	public void sendCall() {
		System.out.println("뚜루루");
	}
	
	@Override
	public void receiveCall() {
		System.out.println("전화받아");
	}
}
