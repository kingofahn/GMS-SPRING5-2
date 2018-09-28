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
	public @ResponseBody Map<String,Object> 
		list(@PathVariable String pageNo){
		Util.log.accept("넘어온페이지 : " + pageNo);
		Map<String,Object> rmap = new HashMap<>();
		rmap.put("pageNumber", Integer.parseInt(pageNo));
		rmap.put("countRow", brdMap.countAll());
		page.carryOut(rmap);
		// countRow, existPrev, prevBlock, beginPage, existNext, nextBlock
		List<Board> list= brdMap.listAll(page);
		rmap.put("list", list);
		rmap.put("page", page);
		return rmap;
	}
	
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String,Object> 
		mylist(@PathVariable String pageNo,
				@PathVariable String id){
		Map<String,Object> rmap = new HashMap<>();
		Util.log.accept("넘어온페이지 : " + pageNo);
		Util.log.accept("넘어온id : " + id);
		rmap.put("writer",id);
		Util.log.accept("brd.getWriter()"+rmap.get("writer"));
		rmap.put("pageNumber", Integer.parseInt(pageNo));
		rmap.put("countRow", brdMap.countUserList(rmap));
		Util.log.accept("brdMap.countUserList(rmap) : " + brdMap.countUserList(rmap));
		page.carryOut(rmap);
		rmap.put("beginRow", page.getBeginRow());
		rmap.put("endRow", page.getEndRow());
		rmap.put("page", page);
		List<Board> list= brdMap.selectUserList(rmap);
		rmap.put("list", list);
		Util.log.accept("brdMap.selectUserList(rmap) : " + rmap.get("list"));
		return rmap;
	}
}
