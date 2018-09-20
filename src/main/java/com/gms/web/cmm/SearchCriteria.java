package com.gms.web.cmm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class SearchCriteria extends Criteria{
	private String searchType;
	private String keyword;
}


