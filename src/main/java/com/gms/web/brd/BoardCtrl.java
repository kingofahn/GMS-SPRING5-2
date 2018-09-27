package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.cmm.Util2;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	@Autowired Board brd;
	@Autowired BoardMapper brdMap;
	@Autowired Pagination page;
	@Autowired Util2 util2;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody List<Board> 
		list(@PathVariable int pageNo){
		Util.log.accept("pageNo : " + pageNo);
		Map<String,Object> rmap = new HashMap<>();
		page.setBeginRow(1);
		page.setEndRow(5);
		List<Board> list = brdMap.listAll(page);
		Util.log.accept("List : " + list);
		return list;
	}
}
