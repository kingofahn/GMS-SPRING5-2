package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public class Util2 {
	public Function<Member,Member> getAgeAndMember =(Member mbr)->{
		int stf = Integer.valueOf(new SimpleDateFormat("yyyy").format(new Date()))+1-1900;
		String ssn = mbr.getSsn();
		String gender = "";
		gender=(ssn.split("/")[1].equals("1"))? "man":"woman" ;
		mbr.setAge(String.valueOf(stf - Integer.parseInt(ssn.substring(0,2))));
		mbr.setGender(gender);
		return mbr;
	};
}

/*
Consumer<T> void accept(T t)
Function<T,R> R apply(T t)
Predicate<T> boolean test(T t)
Supplier<T> T get()
UnaryOperator<T>  static <T> UnaryOperator<T> identity() 
*/