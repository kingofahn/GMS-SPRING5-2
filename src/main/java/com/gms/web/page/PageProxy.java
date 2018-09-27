package com.gms.web.page;

import java.util.Map;

public class PageProxy {
	private Pagination pagination;
	public void carryOut(Map<?, ?> param) {
		this.pagination=new Pagination();
		pagination.carryOut(param);
	}
}
