package com.gms.web.exam;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Testtest {
	public static void main(String[] args) {
		int stf = Integer.valueOf(new SimpleDateFormat("yyyy").format(new Date()))+1-1900;
		String x = "850116-2";
		String gender = "";
		System.out.println("x.substring(7,8)" + x.substring(7,8));
		System.out.println(x.substring(0,2));
		int a = stf - Integer.parseInt(x.substring(0,2));
		System.out.println(a);
		gender=(x.substring(7,8).equals("1"))? "man":"woman" ;
		System.out.println(stf);
		System.out.println(gender);
	}
}
