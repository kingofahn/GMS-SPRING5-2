package com.gms.web.mbr;

import org.springframework.stereotype.Component;
import lombok.Data;
@Component // bean으로 쓴다는 의미
@Data // getter setter으로 쓴다는 의미
public class Member {
	private String userid, 
			ssn, 
			name, 
			roll, 
			teamid, 
			password, 
			age, 
			gender, 
			subject,
			email,
			profile,
			phone;
}