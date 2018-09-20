package com.gms.web.exm;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Exam {
	String sbjSeq, exmSeq, term, score, userid;
}
